import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import {  BrowserRouter, Route,Routes, useNavigate } from 'react-router-dom'
import Services from './Components/Services/Services'
import Product from './Components/Product/Product'
import Contact from './Components/Contact/Contact'
import Enginerring from './Components/Enginerring/Enginerring'
import IT from './Components/IT/IT'
import Others from './Components/Others/Others'
import Cons from './Components/Cons/Cons'
import Homo from './Components/Homo/Homo'
import Non from './Components/Non/Non'
import LOG from './Components/LOG/LOG'
import Start from './Components/Start'
import EmployeeLogin from './Components/EmployeeLogin'
import Login from './Components/Login'
import EmployeeDetail from './Components/EmployeeDetail'
import Dashboard from './Components/Dashboard'
import Employee from './Components/Employee'
import Category from './Components/Category'
import Profile from './Components/Profile'
import AddCategory from './Components/AddCategory'
import AddEmployee from './Components/AddEmployee'
import EditEmployee from './Components/EditEmployee'
import EditLeave from './Components/EditLeave'
import Pomo from './Components/Pomo'
import Leave from './Components/Leave'
import Attendence from './Components/Attendence'






const App = () => {
  return (
    
    <div>
      <Navbar/>
     
     <Routes>
     <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/Product" element={<Product/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path='/Enginerring' element={<Enginerring/>}/>
      <Route path='/IT' element={<IT/>}/>
      <Route path='/Others' element={<Others/>}/>
      <Route path='/Cons' element={<Cons/>}/>
      <Route path='/Homo' element={<Homo/>}/>
      <Route path='/Non' element={<Non/>}/>
      <Route path='/LOG' element={<LOG/>}/>
      <Route path='/start' element={<Start/>}/>
      <Route path='/employee_login' element={<EmployeeLogin/>}/>
      <Route path='/adminlogin' element={<Login/>}/>
      <Route path='/employee_detail/:id' element={<EmployeeDetail/>}/>
      <Route path='/attendence/:id' element={<Attendence/>}/>
      <Route path='/leave/:id' element={<Leave/>}/>
      <Route path='/dashboard' element={<Dashboard/>}>
      <Route path='' element={<Pomo/>}/>
      <Route path='/dashboard/employee' element={<Employee/>}/>
      <Route path='/dashboard/category' element={<Category/>}/>
      <Route path='/dashboard/profile' element={<Profile/>}/>
      <Route path='/dashboard/add_category' element={<AddCategory/>}/>
      <Route path='/dashboard/add_employee' element={<AddEmployee/>}/>
      <Route path='/dashboard/edit_employee/:id' element={<EditEmployee/>}/>
      <Route path='/dashboard/edit_leave/:id' element={<EditLeave/>}/>
      </Route>
      
     </Routes>
     <Footer/>
     </div>
     
     
    
  )
}

export default App