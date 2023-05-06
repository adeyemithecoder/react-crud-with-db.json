import React from 'react'
import { useState } from 'react'

function FormValidation(props) {
  const [focused, setFocus] = useState(false)

    const {label,errorMessage, onChange, id, ...inputprops} = props
    const handleFocus = (e) => {
        setFocus(true)
    }
   
  return (
    <div className='forminput'>
      <label >{label}</label>
      <input {...inputprops} onChange={onChange} onBlur={handleFocus}
       focused={focused.toString()} 
       />
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormValidation
