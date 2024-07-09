import React, { useEffect, useState } from 'react'
import Leave from './Leave'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Profile = () => {
  const[profile, setProfile] = useState([])
  const[records, setRecords] = useState(profile)
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SUKALPA}/auth/employee`)
    .then(result => {
        if(result.data.Status) {
         setProfile(result.data.Result);
         setRecords(result.data.Result)
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
  const Filter = (event) => {
      setRecords(profile.filter(f => f.name.toLowerCase().includes(event.target.value)))
  }
  const Reduce = (event) => {
    setRecords(profile.filter(f => f.start_date.toLowerCase().includes(event.target.value)))
  }
  const Find = (event) => {
    setRecords(profile.filter(f => f.end_date.toLowerCase().includes(event.target.value)))
  }
  return (
    <div className='mt-3 apj' style={{height:650}} >
        <h3 className='text-white' style={{marginTop:90,marginLeft:420}}>Leave Queries</h3>
        <br/>
    <label className='text-white'><b>Employee Name:</b></label>
    <input type='text' className='form-control' onChange={Filter} placeholder='Search Employee Name' style={{width:250}}/>
   <div style={{marginTop:-60,marginLeft:300}}>
    <label className='text-white'><b>Start_date:</b></label>
    <input type='date' className='form-control' onChange={Reduce} placeholder='Search Employee Name' style={{width:250}}/>
    </div>
    <div style={{marginTop:-60,marginLeft:600}}>
    <label className='text-white'><b>End_date:</b></label>
    <input type='date' className='form-control' onChange={Find} placeholder='Search Employee Name' style={{width:250}}/>
    </div>
    <br/>
            <table className='table'>
                <thead>
                    <tr>
                        <th  style={{backgroundColor: 'aqua'}}>Name</th>
                        <th  style={{backgroundColor: 'aqua'}}>Category</th>
                        <th  style={{backgroundColor: 'aqua'}}>Start_Date</th>
                        <th style={{backgroundColor: 'aqua'}}>End_Date</th>
                        <th  style={{backgroundColor: 'aqua'}}>Reason</th> 
                        <th  style={{backgroundColor: 'aqua'}}>Status</th>  
                    </tr>
                </thead>
                <tbody>
                   {
                    records.map((e, i) => (
                        <tr key={i}>
                            <td>{e.name}</td>
                            <td>{e.type}</td>
                            <td>{e.start_date}</td>
                            <td>{e.end_date}</td>
                            <td>{e.reason}</td>
                            <td>{e.status}</td>
                            <td>
                             <Link to={`/dashboard/edit_leave/`+e.id}  className='btn btn-info btn-sm me-2 text-white' style={{backgroundColor:'blue', borderRadius:35}}>Take Action</Link>
                             
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