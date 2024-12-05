import { Link } from "react-router-dom"
import styles from './NavBar.module.css'

const NavBar = ({user, handleSignout}) =>{
    return(
        <>
        {user ? (
        <nav className={styles.navbar}>
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/workouts">Workouts</Link></li>
                <li><Link to="/workouts/new">Add New Workout</Link></li>
                <li><Link to="" onClick={handleSignout}> Sign Out </Link></li>
            </ul>
        </nav>
        ) : (
            <nav className={styles.navbar}>
                <ul>
                  <li><Link to="/signin"> Sign In </Link></li>
                  <li><Link to="/signup"> Sign Up </Link></li>
                </ul>

            </nav>

        )}
        </>
    )
}

export default NavBar