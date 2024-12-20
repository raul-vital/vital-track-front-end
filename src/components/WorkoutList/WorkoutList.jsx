import { Link } from 'react-router-dom'
import styles from './WorkoutList.module.css'
const WorkoutList = (props) =>{
    return(
        <main className={styles.container}>
            <div className={styles.cardDiv}>
            {!props.workouts.length && <h1 className={styles.noWorkout}>No saved workouts.<button className={styles.addNewBtn}><Link className={styles.link}to="/workouts/new">Add New Workout</Link></button></h1>} 
            
            {props.workouts.map((workout) => (
               <Link key={workout._id} to={`/workouts/${workout._id}`}>
                 <div className={styles.cardLi}>
                    <p>{new Date(workout.createdAt).toLocaleDateString()}</p>
                    <h2>{workout.category}</h2>
                    <h3>{workout.title}</h3>
                    
                 </div>
                </Link>
            ))}
           </div> 
        </main>
    )
}

export default WorkoutList