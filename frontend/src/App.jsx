import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Test from './pages/Test.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Test/>} path="/"/>
        {/* <Route element={<Contact/>} path="/contact"/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
