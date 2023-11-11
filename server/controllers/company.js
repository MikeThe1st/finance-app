import User from "../models/User.js"
import Company from "../models/Company.js"


export const allCompanies = async (req, res) => {
    try {
        const companies = await Company.find({})
        return res.status(200).json(companies)
    } catch (error) {
        console.error('Companies search error: ', error);
        return res.status(500).json({ error: 'Search failed.' });
    }
}

export const selectedCompany = async (req, res) => {
    try {
        const {name} = req.body
        const company = await Company.findOne({name: name})
        return res.status(200).json(company)
    } catch (error) {
        console.error('Company not found: ', error);
        return res.status(500).json({ error: 'Search failed.' });
    }
}

export const recomendedCompanies = async (req, res) => {
    try {
        const recomendedCompanies = await Company.find({recomended: true})
        return res.status(200).json(recomendedCompanies)
    } catch (error) {
        console.error('Transaction not created: ', error);
        return res.status(500).json({ error: 'Transaction failed.' });
    }
}
