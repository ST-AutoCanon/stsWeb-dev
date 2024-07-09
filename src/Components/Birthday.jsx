import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Birthday = () => {
    const [employee, setEmployee] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SUKALPA}/auth/birthday`)
            .then(result => {
                if (result.data.Status) {
                    setEmployee(result.data.Result);
                } else {
                    alert(result.data.Error)
                }
            }).catch(err => console.log(err))
    }, [])
   
  return (
    <div>
       <div className='px-5 mt-3  apj' style={{height:650}}>
           
           <div className='d-flex justify-content-center'  style={{marginTop:90}}>
               
               <h3 className='text-white' style={{marginTop:50}}>Birthday List</h3>
           </div>
           
           <div className='mt-3'>
               <table className='table'>
                   <thead>
                       <tr>
                           <th style={{backgroundColor: 'aqua'}}>Name</th>
                           <th style={{backgroundColor: 'aqua'}}>Image</th>
                           <th style={{backgroundColor: 'aqua'}}>Date of Birth</th>
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
                                   <td>{e.DOB}</td>
                                   <td>
                                   <Link to={`/dashboard/wish/` + e.id} className='btn btn-info btn-sm me-2'>Edit</Link>
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

export default Birthday
