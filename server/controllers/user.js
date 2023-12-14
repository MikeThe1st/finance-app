import User from "../models/User.js"
import Company from "../models/Company.js"

import jwt from 'jsonwebtoken'

export const newTransaction = async (req, res) => {
    try {
        const { name, date, hour } = req.body
        const possibleHours = ['08:00', '11:00', '14:30', '16:00']
        const token = req.cookies.token
        const secretKey = process.env.JWT_SECRET
        const decoded = await jwt.verify(token, secretKey)

        const frontendUser = await User.findOne({ email: decoded })
        console.log(frontendUser)
        if (!frontendUser) {
            return res.status(404).json({ msg: "User not found.", status: false })
        }

        const companyFromDb = await Company.findOne({ name: name })

        const updatedField = `dates.${date - 1}.${hour}`;
        const testCompany = await Company.findOneAndUpdate(
          { name: name },
          { $set: { [updatedField]: false } },
          { new: true }
        )
            console.log("TEST COMPANY", testCompany)

        console.log(date - 1, hour, companyFromDb.dates[date - 1][hour])
        let stringDate = String(date)
        if(stringDate.length == 1) {
            stringDate = '0' + stringDate
        }
        const dateString = `2023-12-${stringDate}T${possibleHours[hour]}:00Z`;
        console.log(dateString, date, hour, possibleHours[hour])
        let dateObject = new Date(dateString)
        const newTransaction = {
            company: name,
            cost: companyFromDb.price,
            date: dateObject,
        }
        try {
            const result = await User.findOneAndUpdate(
                { email: frontendUser.email },
                { $push: { transactions: newTransaction } },
                { new: true }
              )

            console.log('Document updated successfully:', result);
          } catch (error) {
            console.error('Error updating document:', error);
          }

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

        const checkUser = await User.find({ email: decoded }).select('-password')
        if (!checkUser) {
            return res.status(404).json({ msg: "User not found.", status: false })
        }
        return res.status(200).json(checkUser)
    } catch (error) {
        return res.status(500).json({ error: 'Authentication failed.', status: false })
    }
}

