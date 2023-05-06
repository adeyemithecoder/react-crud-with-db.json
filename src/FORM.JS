import { useState } from "react"
import FormValidation from "./FormValidation"

function App() {
  const [ values, setValues] = useState({
    Email : "",
    username : "",
    password : "",
    confirmPassword : "",
})
const Inputs = [
    {
    id: "1",
    name: "Email",
    label: "Email",
    errorMessage: "password is not correct",
    
    pattern: "123",
    placeholder: "Email",
    type: "text",
    require: true,
     },
    {id: "2",
    name: "username",
    label: "username",
    errorMessage: "password is not correct",
    pattern: "123",
    placeholder: "username",
    type: "text",
    require: true,
     },
    {id: "3",
    name: "password",
    label: "password",
    errorMessage: "password is not correct",
    placeholder: "password",
    pattern: "123",
    type: "text",
    require: true,   
     },
    {id: "4",
    name: "confirmPassword",
    label: "confirmPassword",
    errorMessage: "password is not correct",
    placeholder: "confirmPassword",
    type: "text",
    pattern: values.password,
    require: true,
       },
]
const handleSubmit = (e) => {
e.preventDefault()

}
const onChange =(e) => {
setValues({ ...values, [e.target.name]: e.target.value})
}

  return (
    <div className="App">
       <form onSubmit={handleSubmit}  >
          {Inputs.map((input) => (
            <FormValidation  
            key={input.id} {...input}
             value={values[input.name]}
             onChange={onChange} />
          ))}
        </form>
        <button>submit</button>

    </div>
  );
}

export default App;
