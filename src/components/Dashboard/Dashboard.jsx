import styles from './Dashboard.module.css'
const Dashboard = ({ user }) => {
    return(
        <main className={styles.dashboard}>
            <h2>Welcome, {user.username}</h2>
            <h1>Vital Track</h1>
            <p>Your Health. Your Journey. Simplified.</p>
        </main>
    )
}

export default Dashboard