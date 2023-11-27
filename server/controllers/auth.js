import User from "../models/User.js"

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    try {
        const { name, surname, email, password } = req.body

        const existingUser = await User.findOne({ email } )
        if (existingUser) {
            if (existingUser.email === email) {
                return res.status(409).json({ msg: `User with email: ${email} already exists. Please choose a different email.` })
            }
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({ name, surname, email, password: hashedPassword })
        await newUser.save()

        return res.status(201).json('Account created.')
    } catch (error) {
        console.error('Registration failed:', error);
        return res.status(500).json({ error: 'Registration failed.' });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const loginUser = await User.findOne({ email: email })
        if(!loginUser) {
            return res.status(404).json({msg: 'User not found.'})
        }

        const isPasswordCorrect = await bcrypt.compare(password, loginUser.password)

        if (isPasswordCorrect) {
            console.log('Password matches. Login successful.')
            const secretKey = process.env.JWT_SECRET
            const expires = '1d'
            const token = await jwt.sign(email, secretKey)
            res.cookie("token", token, { httpOnly: true, secure: true, path: '/', sameSite: 'none', expiresIn: expires });
            return res.status(200).json({ token, msg: 'Login success.' })
        }
        else {
            console.log('Password does not match. Login failed.')
            return res.status(409).json({ msg: 'Please provide valid email and password.' })
        }
    } catch (error) {
        console.error('Login failed:', error);
        return res.status(500).json({ error: 'Login failed.' });
    }
}

export const userVerification = async (req, res) => {
    try {
        const token = req.cookies.token

        if (!token) {
            return res.status(404).json({ error: 'Token not found.', status: false });
        }

        const secretKey = process.env.JWT_SECRET
        if (!secretKey) {
            return res.status(500).json({ error: 'JWT secret key is not configured.', status: false })
        }

        const decoded = await jwt.verify(token, secretKey)
        if (!decoded.email) {
            return res.status(401).json({ error: 'Invalid token.', status: false })
        }

        const checkUser = await User.find({email: decoded.email})
        if(!checkUser) {
            return res.status(404).json({msg: "User not found.", status: false})
        }
        return res.status(200).json({ email: decoded.email, status: true  })
    } catch (error) {
        return res.status(500).json({ error: 'Authentication failed.', status: false })
    }
}