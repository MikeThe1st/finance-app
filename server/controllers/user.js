import User from "../models/User.js"
import Company from "../models/Company.js"

import jwt from 'jsonwebtoken'

export const newTransaction = async (req, res) => {
    try {
        const { companyName, pricePerH, date, description } = req.body

        const token = req.cookies.token
        const secretKey = process.env.JWT_SECRET
        const decoded = await jwt.verify(token, secretKey)
        
        const frontendUser = await User.find({email: decoded.email})
        if(!frontendUser) {
            return res.status(404).json({msg: "User not found.", status: false})
        }
        const company = await Company.find({name: companyName})

        const newTransaction = {
            company: companyName,
            cost: pricePerH,
            date: date,
            description: description,
        }
        frontendUser.transactions = {
            ...frontendUser.transactions,
            newTransaction,
        }
        await frontendUser.save()

        return res.status(201).json('Transaction created.')
    } catch (error) {
        console.error('Transaction not created: ', error);
        return res.status(500).json({ error: 'Transaction failed.' });
    }
}

export const getUser = async (req, res) => {
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

        const checkUser = await User.find({email: decoded}).select('-password')
        if(!checkUser) {
            return res.status(404).json({msg: "User not found.", status: false})
        }
        return res.status(200).json({ user: checkUser, status: true  })
    } catch (error) {
        return res.status(500).json({ error: 'Authentication failed.', status: false })
    }
}
// export const getUser = async (req, res) => {
//     try {
//         const {email} = req.body
        
//         const singleUser = await User.find({email: email}).select('-password')

//         return res.status(200).json(singleUser)
//     } catch (error) {
//         console.error('Transaction not created: ', error);
//         return res.status(500).json({ error: 'Transaction failed.' });
//     }
// }
