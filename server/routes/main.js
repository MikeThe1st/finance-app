import express from 'express'
import { register, login, userVerification } from '../controllers/auth.js'
import { newTransaction, getUser } from '../controllers/user.js'

import { allCompanies, selectedCompany, recomendedCompanies } from '../controllers/company.js'

const mainRouter = express.Router()

mainRouter.post('/user/register', register)
mainRouter.post('/user/login', login)
mainRouter.get('/user', getUser)
mainRouter.get('/user/auth', userVerification)
mainRouter.post('/user/new-transaction', newTransaction)

mainRouter.get('/companies', allCompanies)
mainRouter.get(`/company`, selectedCompany)
mainRouter.get(`/companies/recommended`, recomendedCompanies)

export default mainRouter
