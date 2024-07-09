import React, { useEffect, useState } from 'react'
import Leave from './Leave'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const fetch = () => {
  const[profile, setProfile] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SUKALPA}/auth/leavepage`)
    .then(result => {
        if(result.data.Status) {
         setProfile(result.data.Result);
        } else {
         alert(result.data.Error)
        }
    }).catch(err => console.log(err))
  },[])
  const handleDelete = (e) => {
   axios.delete(`${import.meta.env.VITE_SUKALPA}/auth/delete_leavepage/`+id)
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
                            <td>{e.category}</td>
                            <td>{e.start_date}</td>
                            <td>{e.end_date}</td>
                            <td>{e.reason}</td>
                            <td>{e.status}</td>
                            <td>
                             
                            </td>
                        </tr>
                    ))
                   }
                </tbody>
            </table>
        </div>
  )
}

export default fetch;