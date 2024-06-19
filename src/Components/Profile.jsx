import React, { useEffect, useState } from 'react'
import Leave from './Leave'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Profile = () => {
  const[profile, setProfile] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios.get('http://localhost:3000/auth/employee')
    .then(result => {
        if(result.data.Status) {
         setProfile(result.data.Result);
        } else {
         alert(result.data.Error)
        }
    }).catch(err => console.log(err))
  },[])
  const handleDelete = (e) => {
   axios.delete('http://localhost:3000/auth/delete_leavepage/'+id)
   .then(result => {
    if(result.data.Status) {
          navigate('/dashboard/profile')
    } else {
        alert(result.data.Error)
    }
   })
  }
  return (
    <div className='mt-3'>
        <div
      className="container-fluid page-header py-5 mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container text-center py-5">
        <h1 className="display-4 text-white animated slideInDown mb-3">
        <b>Leave Status</b>
        </h1>
        
      </div>
    </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Start_Date</th>
                        <th>End_Date</th>
                        <th>Reason</th> 
                        <th>Status</th>  
                    </tr>
                </thead>
                <tbody>
                   {
                    profile.map(e => (
                        <tr>
                            <td>{e.name}</td>
                            <td>{e.type}</td>
                            <td>{e.start_date}</td>
                            <td>{e.end_date}</td>
                            <td>{e.reason}</td>
                            <td>{e.status}</td>
                            <td>
                             <Link to={`/dashboard/edit_leave/`+e.id}  className='btn btn-info btn-sm me-2'>Action</Link>
                             
                            </td>
                        </tr>
                    ))
                   }
                </tbody>
            </table>
        </div>
  )
}

export default Profile