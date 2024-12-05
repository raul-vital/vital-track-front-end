import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'
import styles from './SignupForm.module.css'

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
 const handleSubmit = async (event) =>{
    event.preventDefault()
    try{
        const newUser = await authService.signup(formData)
        props.setUser(newUser.user)
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
      <main className={styles.container}>
        <h1 className={styles.text}>Sign Up</h1>
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
                   id="username"
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
                <button  className={styles.signupBtn} disabled={invalidForm()}> Sign Up</button>
                <Link to ="/">
                <button className={styles.cancelBtn}> Cancel </button>
                </Link>
            </div>
        </form>
      </main>
    )
}

export default SignupForm

