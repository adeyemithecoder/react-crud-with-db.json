import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Empcreate = () => {
const [id, setId] = useState("")
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [active, setAcive] = useState(true)
const [validate, setValidate] = useState(false)
const [phone, setPhone] = useState("")
const [isLoading, setIsloading] = useState(false);
const navigate = useNavigate()
                 
const handleSubmit =(e)=>{
  setIsloading(true)
  e.preventDefault()
  const empdata = {id, name, email, phone, active }
  fetch("http://localhost:3500/employee", {
    method: "POST",
    headers: {"content-type": "application/json"},
    body : JSON.stringify(empdata)
  }).then((res) => {
    console.log(res)

   alert("saved successfuylly")
   navigate("/")
  }).catch((err)=> {

    console.log("err:", err)
  }).finally(() => setIsloading(false) )
}

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
<form className="container" onSubmit={handleSubmit} >
  <div className="card">
    <h2>Employee Create</h2>
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
          <input required onMouseDown={e=> setValidate(true)} value={name} onChange={(e)=>setName(e.target.value) } className='form-control' type="text" />
      {name.length === 0 && validate && <span>name is required</span>}
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
          <button disabled={isLoading} className="btn btn-success"> { isLoading ? 'Loading' : 'Save'}</button>
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

export default Empcreate