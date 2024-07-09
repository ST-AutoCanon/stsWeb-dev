import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Profile from './Profile'

const EditLeave = () => {
  const {id} = useParams()
  const [leave, setLeave] = useState({
    name: '',
    status: ''
  })
  useEffect(()=> {
      axios.get(`${import.meta.env.VITE_SUKALPA}/auth/employee/`+id)
      .then(result => {
           setLeave({
            ...leave,
            name: result.data.Result[0].name,
            status:result.data.Result[0].status
           })
      }).catch(err => console.log(err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`${import.meta.env.VITE_SUKALPA}/auth/profile/`+id, leave)
    .then(result => {
      if(result.data.Status) {
        navigate('/dashboard/profile')
    } else {
        alert(result.data.Error)
    }
    }).catch(err => console.log(err))
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      
    <div className="p-3 rounded w-50 border">
    <div
      className="container-fluid page-header py-5 mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container text-center py-5">
        <h1 className="display-4 text-white animated slideInDown mb-3">
          
        </h1>
        
      </div>
    </div>
      <h3 className="text-center">Leave Status</h3>
      <form className="row g-1" onSubmit={handleSubmit}>
        <div className="col-12">
          <label for="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control rounded-0"
            id="inputName"
            placeholder="Enter Name"
            value={leave.name}
            onChange={(e) => setLeave({...leave, name: e.target.value})}
          />
        </div>
        <div className="col-12">
            <label for="status" className="form-label">
              Status
            </label>
            <select name="status" id="status" className="form-select"  onChange={(e) => setLeave({...leave, status: e.target.value})} >
            <option>Approve Status</option>
             <option>Approved</option>
             <option>Rejected</option>
            </select>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100" >
            Apply
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default EditLeave