import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Test from './pages/Test.jsx'
import Main from './pages/Main.jsx'
import ServicesInfo from './pages/ServicesInfo.jsx'
import Contact from './pages/Contact.jsx'
import RegisterForm from './pages/RegisterForm.jsx'
import LoginForm from './pages/LoginForm.jsx'
import CompanyForm from './pages/CompanyForm.jsx' 
import UserForm from './pages/UserForm.jsx' 
import CompanyList from './pages/CompanyList.jsx'
import CalendarForm from './pages/CalendarForm.jsx'


function App() {
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
        <Route element={<CompanyList/>} path='/company-list'/>
        <Route element={<CalendarForm/>} path='/calendar-form'/>

      </Routes>
    </BrowserRouter>
  )
}

export default App