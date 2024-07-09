import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Employee = () => {
    const [employee, setEmployee] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SUKALPA}/auth/employee`)
            .then(result => {
                if (result.data.Status) {
                    setEmployee(result.data.Result);
                } else {
                    alert(result.data.Error)
                }
            }).catch(err => console.log(err))
    }, [])
    const handleDelete = (id) => {
        axios.delete(`${import.meta.env.VITE_SUKALPA}/auth/delete_employee/`+id)
        .then(result => {
            if(result.data.Status) {
                 window.location.reload()
            } else {
                alert(result.data.Error)
            }
        })
    }
    return (
        <div>
             
        <div className='px-5 mt-3  apj' style={{height:650}}>
           
            <div className='d-flex justify-content-center'  style={{marginTop:90}}>
                
                <h3 className='text-white' style={{marginTop:50}}>Employee List</h3>
            </div>
            <Link to="/dashboard/add_employee" className='btn btn-lg btn-success w-10'>
               <i className='bi bi-clipboard-plus'><b>Add Employee</b></i>
            </Link>
            <Link to="/dashboard/birthday" className='btn btn-warning kng ' style={{marginLeft:590}}>
               <i className='bi bi-cake-fill'><b>Today Birthday's</b></i>
            </Link>
            <div className='mt-3 pss'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th style={{backgroundColor: 'aqua'}}>Name</th>
                            <th style={{backgroundColor: 'aqua'}}>Image</th>
                            <th style={{backgroundColor: 'aqua'}}>Email</th>
                           
                            <th style={{backgroundColor: 'aqua'}}>Aadhar Number</th>
                            <th  style={{backgroundColor: 'aqua'}}>PAN Number</th>
                            <th style={{backgroundColor: 'aqua'}}>Address</th>
                            <th style={{backgroundColor: 'aqua'}}>Salary</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employee.map(e => (
                                <tr>
                                    <td>{e.name}</td>
                                    <td>
                                        <img src={`http://localhost:3000/Images/` + e.image} className='employee_image' />
                                    </td>
                                    <td>{e.email}</td>
                                   
                                    <td>{e.aadhar_number}</td>
                                    <td>{e.pan_number}</td>
                                    <td>{e.address}</td>
                                    <td>{e.salary}</td>
                                  
                                    <td>
                                        <Link to={`/dashboard/edit_employee/` + e.id} className='btn btn-info btn-sm me-2'>Edit</Link>
                                        <button className='btn btn-warning btn-sm' onClick={() => handleDelete(e.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}

export default Employee