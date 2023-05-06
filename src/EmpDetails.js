import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const EmpDetails = () => {
  const {id}=useParams()
  const [empdata, setEmpdata] = useState({})
useEffect(()=>{
  fetch("http://localhost:3500/employee/"+id).then((res)=> {
            return res.json()
        }).then((resp)=> {
          setEmpdata(resp);
        }).catch((err)=>{
            console.log(err.message)
       } )
},[])
  return (
    <div>
      { empdata &&
      <div>
      <h1>Employee Name is {empdata.name} : ({empdata.id}) </h1>
      <h3>contact Details</h3>
      <h5>Email is : {empdata.email} </h5>
      <h5>Phone is : {empdata.phone} </h5>
      <Link className='btn btn-danger' to={'/'}>Back to Listing</Link>
      </div>
      }
    </div>
  )
}




export default EmpDetails