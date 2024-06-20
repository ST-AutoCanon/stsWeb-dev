import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Employee = () => {
    const [employee, setEmployee] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3000/auth/employee')
            .then(result => {
                if (result.data.Status) {
                    setEmployee(result.data.Result);
                } else {
                    alert(result.data.Error)
                }
            }).catch(err => console.log(err))
    }, [])
    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/auth/delete_employee/'+id)
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
             <div
      className="container-fluid page-header py-5 mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container text-center py-5">
        <h1 className="display-4 text-white animated slideInDown mb-3">
        <b>Add Employees</b>
        </h1>
        
      </div>
    </div>
        <div className='px-5 mt-3'>
           
            <div className='d-flex justify-content-center'>
                
                <h3>Employee List</h3>
            </div>
            <Link to="/dashboard/add_employee" className='btn btn-success'>
                Add Employee
            </Link>
            <div className='mt-3'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Aadhar Number</th>
                            <th>PAN Number</th>
                            <th>Address</th>
                            <th>Salary</th>
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