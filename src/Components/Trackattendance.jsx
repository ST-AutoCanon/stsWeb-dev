import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom'


const Trackattendance = () => {
    const {id} = useParams();
    const [trackattendance, setTrackattendance] = useState([])
    const[records,setRecords]=useState(trackattendance)
    useEffect(()=> {
       axios.get('http://localhost:3000/auth/trackattendance')
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
    <div>
    <div className="container-fluid detailpage">
    <div className="container text-center py-5">
    </div>
    </div>
    <div className='px-5 mt-3 apj'>  
        <div className='container-fluid detailpage' style={{marginTop:-25}}>
        <h2 className='text-white text-center'>Attendance List</h2><br/>
        </div>

    <div className='row flex-nowrap-3'>
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style={{marginBottom:26}}>
    <label className='text-white'><b>Employee Name:</b></label>
        <input type="text" className="form-control" style={{width:230}} onChange={Filter} placeholder='search employee name'/>
    </div>
    <div style={{marginTop:-90,marginBottom:24,marginLeft:250}}>
    <label className='text-white'><b>Start date:</b></label>
        <input type="datetimestamp" className="form-control" style={{width:230}} onChange={Reduce}  placeholder='search login time'/>
    </div>
    <div style={{marginTop:-90,marginBottom:24,marginLeft:510}}>
    <label className='text-white'><b>End date:</b></label>
        <input type="datetimestamp" className="form-control" style={{width:230}} onChange={Reduce}  placeholder='search logout time'/>
    </div><br/>
    <table className='table'>
                <thead>
                    <tr>
                        <th style={{backgroundColor:'aqua'}}>Name</th>
                        <th style={{backgroundColor:'aqua'}}>Address</th>
                        <th style={{backgroundColor:'aqua'}}>Login_time</th>
                        <th style={{backgroundColor:'aqua'}}>Logout_time</th>
                        <th style={{backgroundColor:'aqua'}}>Hours</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    records.map((a,i) => (
                        <tr key={i}>
                            <td>{a.emp_name}</td>
                            <td>{a.logged_in_location}</td>
                            <td>{a.logged_in_time}</td>
                            <td>{a.logged_out_time}</td>
                            <td>{a.hours}hrs{a.minutes} minutes</td>
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