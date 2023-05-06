import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const EmpEdit = () => {
  let [id, setId] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [active, setAcive] = useState(true)
  const [phone, setPhone] = useState("")
  const navigate = useNavigate()

  let {myid}=useParams()
  const [empdata, setEmpdata] = useState({})
useEffect(()=>{
  fetch("http://localhost:3500/employee/"+myid).then((res)=> {
            return res.json()
        }).then((resp)=> {
          setName(resp.name)
          setId(resp.id)
          setEmail(resp.email)
          setAcive(resp.active)
          setPhone(resp.phone)
          setEmpdata(resp);
          console.log(resp)

        }).catch((err)=>{
            console.log(err.message)
       } )
},[])
const handleSubmit =(e)=>{
  e.preventDefault()
  const empdata = {id, name, email, phone, active }
  fetch("http://localhost:3500/employee/" + myid, {
    method: "PUT",
    headers: {"content-type": "application/json"},
    body : JSON.stringify(empdata)
  }).then((res) => {
   alert("saved successfuylly")
   navigate("/")
  }).catch((err)=> {

  })
}

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
<form className="container" onSubmit={handleSubmit} >
  <div className="card">
    <h2>Employee Edit</h2>
  </div>
  <div className="card-body">
    <div className="row">

      <div className="col-lg-12">
        <div className="form-group">
          <label>ID</label>
          <input value={id} disabled='disabled' className='form-control' type="text" />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="form-group">
          <label>Name</label>
          <input required  value={name} onChange={(e)=>setName(e.target.value) }
           className='form-control' type="text" />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="form-group">
          <label>Email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value) } className='form-control' type="text" />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="form-group">
          <label>Phone</label>
          <input value={phone} onChange={(e)=>setPhone(e.target.value) } className='form-control' type="text" />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="form-check">
        <input checked={active} onChange={(e)=>setAcive(e.target.checked) } className='form-check-input' type="checkbox" />
          <label  className='form-check-label'>Is active</label>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="form-check">
          <button className="btn btn-success">Save</button>
          <Link to='/' className='btn btn-danger' >Back</Link>
          <label className='form-check-label'>Is active</label>
        </div>
      </div>

    </div>
  </div>
</form>
        </div>
      </div>
    </div>
  )
}

export default EmpEdit