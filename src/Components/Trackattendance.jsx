import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom'


const Trackattendance = () => {
    const [trackattendance, setTrackattendance] = useState([])
    const[records,setRecords]=useState(trackattendance)
    const [attendanceCount, setAttendanceCount] = useState({empid: 0,
        total_logged_in_today: 0,
        total_not_logged_in_today: 0})
    useEffect(() => {
        AttendanceCount();
      }, [])
      
       const AttendanceCount= () => {
        axios.get(`${import.meta.env.VITE_SUKALPA}/auth/attendanceCount`)
        .then(result => {
        if(result.data.Status) {
        setAttendanceCount({...attendanceCount,total_employees:result.data.Result[0].total_employees,
            total_logged_in_today:result.data.Result[0].total_logged_in_today,
            total_not_logged_in_today:result.data.Result[0].total_not_logged_in_today});
          }
        })
      }
    useEffect(()=> {
        axios.get(`${import.meta.env.VITE_SUKALPA}/auth/trackattendance`)
       .then(result => {
           if(result.data.Status) {
            setTrackattendance(result.data.Result);
            setRecords(result.data.Result)
           } else {
            alert(result.data.Error)
           }
       }).catch(err => console.log(err))
    }, [])
    
    const Filter = (event) => {
        setRecords(trackattendance.filter(f => f.emp_name.toLowerCase().includes(event.target.value)));
    }

    const Reduce = (event) => {
        setRecords(trackattendance.filter(f => f.logged_in_time.toLowerCase().includes(event.target.value)));
        const searchText = event.target.value.toLowerCase();
        setRecords(trackattendance.filter(f => f.logged_out_time.toLowerCase().includes(searchText)));
    }

  return (
    <div className='dts'>
    <div className='px-5 mt-3 apj' style={{backgroundColor:'',marginTop:40,height:750}}>
      
      <div className='d-flex justify-content-around mt-3'>
        <div className='px-3 pt-2 pb-2 border shadow-sm w-25 text-white' style={{height:110,backgroundColor:'purple',borderRadius:20,marginTop:100}}>
          <div className='text-center pb-1'>
            <h4>Employees</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <h5>Total:</h5>
            <h5>{attendanceCount.total_employees}</h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25 text-white' style={{height:110,backgroundColor:'purple',borderRadius:20,marginTop:100}}>
          <div className='text-center pb-1'>
            <h4>Present</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <h5>Total:</h5>
            <h5>{attendanceCount.total_logged_in_today}</h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25 text-white' style={{height:110,backgroundColor:'purple',borderRadius:20,marginTop:100}}>
          <div className='text-center pb-1'>
            <h4>Leave</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <h5>Total:</h5>
            <h5>{attendanceCount.total_not_logged_in_today}</h5>
          </div>
        </div>
      </div>
        <div style={{marginTop:-2,marginLeft:50}}>
        <label className='text-white'><b>Employee Name:</b></label>
            <input type="text" className="form-control" style={{width:230}} onChange={Filter} placeholder='search employee name'/>
        </div>
        <div style={{marginTop:-63,marginBottom:6,marginLeft:370}}>
        <label className='text-white'><b>Start date:</b></label>
            <input type="datetimestamp" className="form-control" style={{width:230}} onChange={Reduce}  placeholder='search login time'/>
        </div>
        <div style={{marginTop:-66,marginBottom:6,marginLeft:690}}>
        <label className='text-white'><b>End date:</b></label>
            <input type="datetimestamp" className="form-control" style={{width:230}} onChange={Reduce}  placeholder='search logout time'/>
        </div>
      <div className='mt-3' style={{marginLeft:50}}>
        <h3 className='text-white'>List of Attendance</h3>
        <table className='table'>
                <thead>
                    <tr>
                        <th style={{ backgroundColor: 'aqua' }}>Name</th>
                        <th style={{ backgroundColor: 'aqua' }}>Address</th>
                        <th style={{ backgroundColor: 'aqua' }}>Login_time</th>
                        <th style={{ backgroundColor: 'aqua' }}>Logout_time</th>
                        <th style={{ backgroundColor: 'aqua' }}>Hours</th>
                      </tr>
                </thead>
                <tbody>
                   {
                    records.map((a,i) => (
                        <tr key={i}>
                            <td><Link to={'/dashboard/activeemployee/'+a.emp_id} className='w-30'>{a.emp_name}</Link></td>
                            <td>{a.logged_in_location}</td>
                            <td>{a.logged_in_time}</td>
                            <td>{a.logged_out_time}</td>
                            <td>{a.hours}hrs</td>
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
export default Trackattendance