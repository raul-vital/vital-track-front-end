import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'
import styles from './SigninForm.module.css'


const SigninForm = (props) =>{
    const navigate = useNavigate()
    const[formData, setFormData] = useState({
        username:'',
        password:'',
    })
    const [message, setMessage] = useState([''])

     // <><><> Handlers <><><>
    const handleMessage = (message) =>{
        setMessage(message)
    }
    const handleChange = (event) =>{
        handleMessage('')
        setFormData({...formData, [event.target.name]: event.target.value})    
    }
    const handleSubmit = async (event) =>{
        event.preventDefault()
        try{
            const user = await authService.signin(formData)
            props.setUser(user)
            navigate('/')
        }catch(err) {
            handleMessage(err.message)
        }
    }
    

    return(
        <main className={styles.container}>
        <h1 className={styles.text}>Sign In</h1>
        <p>{message}</p>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input 
                  type="text"
                  id="username"
                  value={formData.username}
                  name="username"
                  onChange={handleChange}

                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                  type="password"
                  id="password"
                  value={formData.password}
                  name="password"
                  onChange={handleChange}

                />
            </div>
            <div>
            <button className={styles.signinBtn}>Sign In</button>
            <Link to="/">
            <button className={styles.cancelBtn}>Cancel</button>
            </Link>
            </div>
        </form>
        </main>
    )
}


export default SigninForm