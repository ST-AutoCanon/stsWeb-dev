import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, Outlet } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";
import './style.css'


const Leave = () => {
  const {id} = useParams()
  const [attendance, setAttendance] = useState({
   
    emp_name: '',
    logged_in_location: '',
    logged_out_location:'',
    logged_out_time:'',
  })
  

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/employee/leave', attendance)
    .then(result => {
        if(result.data.Status) {
           navigate(`/leave/`+employee.id)
        } else {
            alert(result.data.Error)
        }
    })
    .catch(err => console.log(err))
}
    const [employee, setEmployee] = useState({
      name: '',
      email: '',
      address: '',
      category_id: '',
      type: '',
      start_date:'',
      end_date: '',
      reason: '',
      status: '',
    })
    const [category, setCategory] = useState([])
    useEffect(()=> {
      axios.get('http://localhost:3000/auth/category')
      .then(result => {
          if(result.data.Status) {
           setCategory(result.data.Result);
          } else {
           alert(result.data.Error)
          }
      }).catch(err => console.log(err))

       axios.get('http://localhost:3000/auth/employee/'+id)
        .then(result => {
            setEmployee({
                ...employee,
                name: result.data.Result[0].name,
                email: result.data.Result[0].email,
                address: result.data.Result[0].address,
                salary: result.data.Result[0].salary,
                category_id: result.data.Result[0].category_id,
                status: result.data.Result[0].status,
                reason: result.data.Result[0].reason,
                start_date: result.data.Result[0].start_date,
                end_date: result.data.Result[0].end_date,
                type: result.data.Result[0].type,
            })
        }).catch(err => console.log(err))
   }, [])

    
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3000/employee/detail/'+id)
        .then(result => {
            setEmployee(result.data[0])
        })
        .catch(err => console.log(err))
    }, [])
    const handleLogout = () => {
        axios.get('http://localhost:3000/employee/logout')
        .then(result => {
          if(result.data.Status) {
            localStorage.removeItem("valid")
            navigate('/start')
          }
        }).catch(err => console.log(err))
      }


   
    const [address, setAddress] = useState('');
    const [position, setPosition] = useState({ latitude: null, longitude: null });
  useEffect(()=>{
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        });
        const { latitude, longitude } = position.coords;
        const url = `https:nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        fetch(url).then(res => res.json()).then(data => {
          setAddress(data.display_name || "Address not found");
        });
    });
  }, []);
  
  const handleConfirm = (e) => {
    e.preventDefault()
    axios.put('http://localhost:3000/employee/leave/'+id, attendance)
    .then(result => {
        if(result.data.Status) {
           navigate(`/leave/`+employee.id)
        } else {
            alert(result.data.Error)
        }
    })
    .catch(err => console.log(err))
}
  
  return (
  <div>
    <div className='container-fluid detailpage'>
    <div className='row flex-nowrap' >
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style={{backgroundColor: ' #0d3353', marginTop:80}}>
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 ">
            <h4 className='text-white'>{employee.name}</h4>
            <h6 className='text-white'>{employee.email}</h6>
            <h6 className='text-white'>Salary: ₹{employee.salary}</h6>
            
                <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start mt-5"
              id="menu"
            >
               <li className="w-100">
              <Link to={`/employee_detail/` + employee.id} className='btn btn btn-sm me-2 nav-link px-0 align-middle text-white'>
              <i className="fs-4 bi-people ms-2"></i>
              <span className="ms-2 d-none d-sm-inline">
              Dashboard
              </span>
              </Link>
              </li>
              <li className="w-100">
                <Link
                  to={`/attendence/` + employee.id}
                  className="nav-link text-white px-0 align-middle"
                >
                  <i className="fs-4 bi-speedometer2 ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Apply leave</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to=""
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-people ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                    Attendence
                  </span>
                </Link>
              </li>
             
             
              <li className="w-100" onClick={handleLogout}>
              <Link
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-power ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Logout</span>
                </Link>
              </li>
            </ul>
            </div>
        </div>
        <div className='col p-0 m-0'>
          
          <div>
        <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
          
        </div>
    </div>
    <Outlet/>
    <div
      className="container-fluid page-header py-5 mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container text-center py-5">
        <h1 className="display-4 text-white animated slideInDown mb-3">
        <b></b>
        </h1>
        
      </div>
    </div>
   
           
   
    
    <form className="row g-1" onSubmit={handleSubmit} style={{backgroundColor:'', width:500}}>
          
         
         
          <br/>
          <br/>
          address:{address}
          <div className="col-12">
              <label for="status" className="form-label text-black">
                <input type='checkbox' value={address} onChange={(e) => setAttendance({...attendance, logged_in_location: e.target.value})}/><b>is your Current address</b>
              </label>
            </div>
            Name:{employee.name}
            <div className="col-12">
              <label for="status" className="form-label text-black">
                <input type='checkbox' value={employee.name} onChange={(e) => setAttendance({...attendance, emp_name: e.target.value})}/><b>is its your name</b>
              </label>
            </div>
           
         
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-50 text-white">
                Login
              </button>
            </div>
          </form>
          <br/>
          <br/>
          <br/>
          <br/>
          <form className="row g-1" onSubmit={handleConfirm}>
          
          
          
          
          <br/>
          <div className="col-12">
              <label for="status" className="form-label text-white">
                <input type='checkbox' value={address} onChange={(e) => setEmployee({...attendance, logged_out_location: e.target.value})}/><b>Are You Confirm to Apply</b>
              </label>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-30 text-white">
                Logout
              </button>
            </div>
          </form>
        
        </div>
        
    </div>
    
   
   </div>
  </div>
  )
}

export default Leave