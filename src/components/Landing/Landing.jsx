import styles from './Landing.module.css'
import Dumbell from '../../assets/images/dumbell3.svg'


const Landing = () => {
    return (
        <main className={styles.landing}>
            <h1>Vital Track</h1>
            <h3>Your Health. Your journey. Simplified. </h3>
            <img src={Dumbell} alt='a dumbbell'></img>
        </main>
        
    )
}

export default Landing