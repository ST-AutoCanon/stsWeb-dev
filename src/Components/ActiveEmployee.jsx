import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Link, useNavigate } from 'react-router-dom';

const ActiveEmployee = () => {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  const [employeeDetails, setEmployeeDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Extract the ID from the pathname
  const id = window.location.pathname.split('/').pop();
  console.log("ID from pathname:", id); // Check if the id is being retrieved correctly

  useEffect(() => {
    if (!id) {
      setError('No ID provided');
      setLoading(false);
      return;
    }

    axios.get(`${import.meta.env.VITE_SUKALPA}/auth/activeemployee/${id}`)
      .then(result => {
        console.log("Result from API:", result); // Log the result from API
        if (result.data.Status) {
          const employee = result.data.Result[0];
          setRecords(result.data.Result);
          setEmployeeDetails({
            id: employee.id,
            name: employee.name,
            start_date: employee.start_date,
            image: employee.image,
            category_name: employee.category_name,
            average_working_hours: employee.average_working_hours,
            average_in_time: employee.average_in_time,
            average_out_time: employee.average_out_time,
            expected_break_time: employee.expected_break_time,
          });
        } else {
          setError('Failed to fetch employee details');
        }
      })
      .catch(err => {
        console.error(err);
        setError('An error occurred while fetching data.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='px-5 mt-3 apj' style={{ marginTop: -10, height: 650 }}>
      <div className='container-fluid detailpage' style={{ marginTop: 110 }}>
      </div>
      <div className='row flex-nowrap-3'>
        <div className="attendance-stats">
          <div className="stat-item">
          <p><img src={`${import.meta.env.VITE_SUKALPA}/Images/${employeeDetails.image}`} alt="Employee" className='employee2_image'/></p>
          <h3>{employeeDetails.name}</h3>
          </div>
          <div className="stat-item">
            <img src="/asset/img/employeeid.png" alt="employeeid" style={{ width: 30, height: 30 }} />
            <p>{employeeDetails.id}</p>
            <p><strong>Employee ID</strong></p>
          </div>
          <div className="stat-item">
            <img src="/asset/img/joiningid.png" alt="joiningid" style={{ width: 30, height: 30 }} />
            <p>{employeeDetails.start_date}</p>
            <p><strong>Joining Date</strong></p>
          </div>
          <div className="stat-item">
            <img src="/asset/img/department.png" alt="department" style={{ width: 30, height: 30 }} />
            <p>{employeeDetails.category_name}</p>
            <p><strong>Department</strong></p>
          </div>
        </div>
        <div className="attendance-stats">
          <div className="stat-item">
            <img src="/asset/img/hours.png" alt="hours" style={{ width: 30, height: 30 }} />
            <p>{employeeDetails.average_working_hours}</p>
            <p><strong>Average Working Hour</strong></p>
          </div>
          <div className="stat-item">
            <img src="/asset/img/timer.png" alt="timer" style={{ width: 20, height: 20 }} />
            <p>{employeeDetails.average_in_time}</p>
            <p><strong>Average In Time</strong></p>
          </div>
          <div className="stat-item">
            <img src="/asset/img/pause.png" alt="pause" style={{ width: 20, height: 20 }} />
            <p>{employeeDetails.average_out_time}</p>
            <p><strong>Average Out Time</strong></p>
          </div>
          <div className="stat-item">
            <img src="/asset/img/break.png" alt="break" style={{ width: 30, height: 30 }} />
            <p>01:00:00</p>
            <p><strong>Average Break Time</strong></p>
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
                <td><Link className='btn btn-info btn-sm me-2 text-white w-30' style={{ backgroundColor: record.status === 'Present' ? 'Green' : 'Red', borderRadius: 35 }}>{record.status}</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveEmployee