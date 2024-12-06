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
                <li><Link to="/workouts/new">Add Workout</Link></li>
                <li><Link to="" onClick={handleSignout}> <button> Sign Out </button> </Link></li>
            </ul>
        </nav>
        ) : (
            <nav className={styles.navbar}>
                <ul>
                  <li><Link to="/signin"> <button>Sign In</button> </Link></li>
                  <li><Link to="/signup"> <button>Sign Up</button> </Link></li>
                </ul>

            </nav>

        )}
        </>
    )
}

export default NavBar