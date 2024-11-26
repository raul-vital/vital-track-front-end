import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignupForm = (props) => {

const[message, setMessage] = useState('')
const [formData, setFormData]= useState({
    email:'',
    username: '',
    password:'',
    confirmPassword: '',
})
const navigate = useNavigate()

 // <><><> Handlers <><><>

 const handleChange = (event) =>{
    setFormData({ ...formData, [event.target.name]: event.target.value})
 }
 const handleMessage = (message) =>{
    setMessage(message)

 }
 const handleSubmit =(event) =>{
    event.preventDefault()
    try{
        props.setUser(formData)
        navigate('/')
    }catch(err){
        handleMessage(err.message)
    } 
 }

const { email, username, password, confirmPassword } = formData

const invalidForm = () =>{
    return !(username && password && password === confirmPassword)
}


    return(
      <main>
        <h1>Sign Up</h1>
        <p>{message}</p>
        <form onSubmit={handleSubmit}> 
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                   type="email"
                   id="email"
                   value={email}
                   name="email"
                   onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="username">Username:</label>
                <input 
                   type="text"
                   id="name"
                   value={username}
                   name="username"
                   onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                   type="password"
                   id="password"
                   value={password}
                   name="password"
                   onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="confirm">Confirm Password:</label>
                <input 
                   type="password"
                   id="confirm"
                   value={confirmPassword}
                   name="confirmPassword"
                   onChange={handleChange}
                />
            </div>
            <div>
                <button disabled={invalidForm()}> Sign Up</button>
                <Link to ="/">
                <button> Cancel </button>
                </Link>
            </div>
        </form>
      </main>
    )
}

export default SignupForm

