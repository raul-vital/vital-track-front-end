import styles from './Dashboard.module.css'
import Dumbell from '../../assets/images/dumbell3.svg'
const Dashboard = ({ user }) => {
    return(
        <main className={styles.dashboard}>
            <h2>Welcome, {user.username}</h2>
            <h1>Vital Track</h1>
            <p>Your Health. Your Journey. Simplified.</p>
            <img src={Dumbell} alt='a dumbbell'></img>
        </main>
    )
}

export default Dashboard