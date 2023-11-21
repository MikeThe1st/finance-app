import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Test from './pages/Test.jsx'
import Main from './pages/Main.jsx'
import ServicesInfo from './pages/ServicesInfo.jsx'
import Contact from './pages/Contact.jsx'
import RegisterForm from './pages/RegisterForm.jsx'
import LoginForm from './pages/LoginForm.jsx'
import CompanyForm from './pages/CompanyForm.jsx' 
import UserForm from './pages/UserForm.jsx' 


function App() {
  const userTransactionHistory = ['Transakcja 1', 'Transakcja 2', 'Transakcja 3'];
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path="/"/>
        <Route element={<ServicesInfo/>} path="/services-info"/>
        <Route element={<Contact/>} path="/contact"/>
        <Route element={<RegisterForm/>} path="/register"/>
        <Route element={<LoginForm/>} path="/login"/>
        <Route element={<UserForm/>} path='/user-form'/>
        <Route element={<CompanyForm/>} path='/company-form'/>

      </Routes>
    </BrowserRouter>
  )
}

export default App