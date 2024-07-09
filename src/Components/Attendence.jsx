import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, Outlet } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";
import './style.css'


const Attendence = () => {
  const [attendence, setAttendence] = useState({
    emp_id: '',
    emp_name: '',
    logged_in_location: '',
    logged_out_location: '',
    logged_in_time: '',
    logged_out_time: '',
    
  })
  const handleConfirm = (e) => {
    e.preventDefault()
    axios.post(`${import.meta.env.VITE_SUKALPA}/employee/detail/`+id, attendence )
    .then(result => {
      console.log(result.data)
    }).catch(err => console.log(err))
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
      axios.get(`${import.meta.env.VITE_SUKALPA}/auth/category`)
      .then(result => {
          if(result.data.Status) {
           setCategory(result.data.Result);
          } else {
           alert(result.data.Error)
          }
      }).catch(err => console.log(err))

       axios.get(`${import.meta.env.VITE_SUKALPA}/auth/employee/`+id)
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

    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SUKALPA}/employee/detail/`+id)
        .then(result => {
            setEmployee(result.data[0])
        })
        .catch(err => console.log(err))
    }, [])
    const handleLogout = () => {
        axios.get(`${import.meta.env.VITE_SUKALPA}/employee/logout`)
        .then(result => {
          if(result.data.Status) {
            localStorage.removeItem("valid")
            navigate('/adminlogin')
          }
        }).catch(err => console.log(err))
      }


      const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`${import.meta.env.VITE_SUKALPA}/auth/employee_detail/`+id, employee)
        .then(result => {
          console.log(result.data)
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
                  to={`/leave/ `+ employee.id}
                  className="nav-link text-white px-0 align-middle"
                >
                  <i className="fs-4 bi-speedometer2 ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Attendence</span>
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
        <div className='col p-0 m-0 apj'>
          
          <div>
        <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
          
        </div>
    </div>
    <Outlet/>
   
    <div className=''>
    <div className='p-2 d-flex justify-content-center shadow'  style={{backgroundColor: 'teal',marginTop:100}}>
      <b><h4 className='text-white'>Leave Approval Status</h4></b>
      </div>
    <div className='mt-3'  >
            <table className='table'>
                <thead >
                    <tr>
                       
                        <th  style={{backgroundColor: 'aqua'}} >Leave Type</th>
                        <th  style={{backgroundColor: 'aqua'}}>Start_Date</th>
                        <th  style={{backgroundColor: 'aqua'}}>End_Date</th>
                        <th style={{backgroundColor: 'aqua'}}>Reason</th> 
                        <th  style={{backgroundColor: 'aqua'}}>Status</th>  
                    </tr>
                </thead>
                <tbody>
                        <tr>   
                            <td >{employee.type}</td>
                            <td>{employee.start_date}</td>
                            <td>{employee.end_date}</td>
                            <td>{employee.reason}</td>
                            <td  >{employee.status}</td>
                        </tr>
                </tbody>
            </table>
        </div>
        <br />
        <br />
        <br />
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border" style={{backgroundColor: 'teal',borderRadius:130}}>
        <h3 className="text-center text-white">Apply Leave</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label for="type" className="form-label  text-white">
             Leave Type
            </label>
            <select name="type" id="type" className="form-select"  onChange={(e) => setEmployee({...employee, type: e.target.value})} >
           <option>Select one</option>
            <option>sick leave</option>
             <option>vacation leave</option>
             
            </select>
          </div>
          <div className="col-12">
          <label for="inputPassword4" className="form-label  text-white">
            Start Date
          </label>
          <input
            type="date"
            className="form-control rounded-0"
            id="inputPassword4"
            placeholder="Enter Password"
            value={employee.start_date}
            onChange={(e) => setEmployee({...employee, start_date: e.target.value})}
          />
          <label for="inputSalary" className="form-label  text-white">
            End Date
          </label>
          <input
            type="date"
            className="form-control rounded-0"
            id="inputSalary"
            placeholder="Enter Salary"
            autoComplete="off"
            value={employee.end_date}
            onChange={(e) => setEmployee({...employee, end_date: e.target.value})}
          />
        </div>
          <div className="col-12">
          <label for="inputReason" className="form-label  text-white">
            Reason
          </label>
          <textarea
            type="text"
            className="form-control rounded-0"
            id="inputReason"
            placeholder="Enter your valid reason"
            autoComplete="off"
            value={employee.reason}
            onChange={(e) => setEmployee({...employee, reason: e.target.value})}
          />
        </div>
        <br/>
        <br/>
        <div className="col-12">
            <label for="status" className="form-label  text-white">
              <input type='checkbox' value='Applied' onChange={(e) => setEmployee({...employee, status: e.target.value})}/><b>Are You Confirm to Apply</b>
            </label>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100 " style={{borderRadius:100, marginLeft:0, backgroundColor:'#4CAF50',color:'white'}}>
              <b>Apply</b>
            </button>
          </div>
        </form>
        </div>
      </div>
      
    </div>
    
    
        
        </div>
        
    </div>
    
   </div>
  </div>
  )
}

export default Attendence