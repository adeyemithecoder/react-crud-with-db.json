import React from 'react'
import { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Emplisting = () => {
    const navigate = useNavigate()
    const [empdata, empdatachange] = useState(null)
    const loadEdit =(id)=>{
        navigate('/empEdit/'+id)
    }
    const loadRemove =(id)=>{
        if (window.confirm('Do you want to delete?')) {
            fetch("http://localhost:3500/employee/" + id,{
                method: "DELETE",
              }).then((res) => {
               alert("Removed successfuylly")
               window.location.reload()
              }).catch((err)=> {
              })
        }
    }
    const loadDetails =(id)=>{
        navigate('/empDetails/'+id)
    }
    useEffect(()=>{
        fetch("http://localhost:3500/employee").then((res)=> {
            return res.json()
        }).then((resp)=> {
            empdatachange(resp);
        }).catch((err)=>{
            console.log(err.message)
       } )
    },[])
  return (
    <div className='container' >
        <div className="card">
            <div className="card-title">
                <h2 className='text-center' >Employee listin</h2>
            </div>
            <div className="card-body">
                <div className='divbtn'>
                <Link to='empcreate' className='btn btn-success'>Add new</Link>
                </div>
                <table className="table table-bordered">
                <thead className="bg-dark text-center text-white">
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>email</td>
                        <td>phone</td>
                        <td>actve</td>
                        </tr>
                </thead>
                <tbody>
             { empdata &&
             empdata.map((item) => (
                <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
             <a onClick={()=> {loadEdit(item.id)}} className='btn btn-success'>Edit</a>
              <a onClick={()=> {loadRemove(item.id)}} className='btn btn-danger'>Remove</a>
              <a onClick={()=> {loadDetails(item.id)}} className='btn btn-primary'>Details</a>
              </td> 
                </tr>
             ))}
                </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Emplisting