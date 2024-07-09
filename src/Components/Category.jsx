import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Category = () => {

    const [category, setCategory] = useState([])

    useEffect(()=> {
       axios.get(`${import.meta.env.VITE_SUKALPA}/auth/category`)
       .then(result => {
           if(result.data.Status) {
            setCategory(result.data.Result);
           } else {
            alert(result.data.Error)
           }
       }).catch(err => console.log(err))
    }, [])
  return (
    <div className='dts'>
      
    <div className='px-5 mt-3 apj' style={{height:700}} >  
        <div className='d-flex justify-content-center '>
            <h3>-:Category List:-</h3>
        </div>
       
        <Link to="/dashboard/add_category" className='btn btn-success' style={{marginTop:100,marginLeft:420}}>
        <i className='bi bi-clipboard-plus'><b>Add Category</b></i>

        </Link>
        
        <div className='mt-3'>
            <table className='table' style={{width:500,marginLeft:250}}>
                <thead>
                    <tr>
                        <th style={{backgroundColor:'aqua'}}>Category's</th>
                    </tr>
                </thead>
                <tbody >
                   {
                    category.map(c => (
                        <tr >
                            <td className='text-black'>{c.name}</td>
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

export default Category