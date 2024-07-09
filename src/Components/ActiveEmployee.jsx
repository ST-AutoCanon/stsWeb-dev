import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ActiveEmployee = () => {
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  const [employeeDetails, setEmployeeDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/auth/activeemployee/${id}`)
      .then(result => {
        if (result.data.Status) {
          setRecords(result.data.Result);
          //const employee = result.data.Result[0];
          setEmployeeDetails(result.data.Result[0]);
          //   id: employee.id,
          //   name: employee.name,
          //   start_date: employee.start_date,
          //   image: employee.image,
          //   category_name: employee.category_name,
          //   average_working_hours:employee.average_working_hours,
          //   average_in_time:employee.average_in_time,
          //   average_out_time:employee.average_out_time,
          //   expected_break_time:employee.expected_break_time
          // });
        }
      })
      .catch(err => {
        console.error(err);
        setError('An error occurred while fetching data.');
      });
  }, [id]);

  return (
        <div className='px-5 mt-3 apj' style={{marginTop:-10, height: 650 }}>
        <div className='container-fluid detailpage' style={{ marginTop:110 }}>
        </div>
        <div className='row flex-nowrap-3'>
          <div className="attendance-stats">
            <div className="stat-item">
              <h3>{employeeDetails.name}</h3>
              <p><img src={`http://localhost:3000/Images/${employeeDetails.image}`} alt="Employee" className='employee2_image' /></p>
            </div>
            <div className="stat-item">
            <img src="/asset/img/employeeid.png" alt="Timer" style={{width: 30, height: 30}} />
            <p>{employeeDetails.id}</p>
            <h3>Employee ID:</h3>
            </div>
            <div className="stat-item">
            <img src="/asset/img/joiningid.png" alt="Timer" style={{width: 30, height: 30}} />
              <p>{employeeDetails.start_date}</p>
              <h3>Joining Date:</h3>
            </div>
            <div className="stat-item">
            <img src="/asset/img/department.png" alt="Timer" style={{width: 30, height: 30}} />
              <p>{employeeDetails.category_name}</p>
              <h3>Department:</h3>
            </div>
          </div>
          <div className="attendance-stats">
            <div className="stat-item">
            <img src="/asset/img/hours.png" alt="Timer" style={{width: 30, height: 30}} />
            <h3>{employeeDetails.average_working_hours}</h3>
            <p>Average Working Hour</p>
            </div>
            <div className="stat-item">
            <img src="/asset/img/timer.png" alt="Timer" style={{width: 20, height: 20}} />
            <h3>{employeeDetails.average_in_time}</h3>
              <p>Average In Time</p>
            </div>
            <div className="stat-item">
            <img src="/asset/img/pause.png" alt="Timer" style={{width: 20, height: 20}} />
              <h3>{employeeDetails.average_out_time}</h3>
              <p>Average Out Time</p>
            </div>
            <div className="stat-item">
            <img src="/asset/img/break.png" alt="Timer" style={{width: 30, height: 30}} />
              <h3>01:00:00</h3>
              <p>Average Break Time</p>
            </div>
          </div>
          <table className='table'>
            <thead style={{ backgroundColor: 'aqua' }}>
              <tr>
                <th style={{ backgroundColor: 'aqua' }}>Date</th>
                <th style={{ backgroundColor: 'aqua' }}>Check In</th>
                <th style={{ backgroundColor: 'aqua' }}>Check Out</th>
                <th style={{ backgroundColor: 'aqua' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {records.map(record => (
                <tr key={record.logindate}>
                  <td>{record.logindate}</td>
                  <td>{record.check_in}</td>
                  <td>{record.check_out}</td>
                  <td><Link  className='btn btn-info btn-sm me-2 text-white w-30' style={{backgroundColor: record.status === 'Present' ? 'Green' : 'Red',borderRadius: 35}}>{record.status}</Link></td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
 
  )
}

export default ActiveEmployee