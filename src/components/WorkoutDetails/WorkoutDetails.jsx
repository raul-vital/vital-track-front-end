import { AuthedUserContext } from '../../App'
import { useState, useEffect, useContext } from 'react'
import { useParams, Link } from "react-router-dom"
import ProgressForm from '../ProgressForm/ProgressForm'
import * as workoutService from '../../services/workoutService'
import styles from './WorkoutDetails.module.css'

const WorkoutDetails = (props) => {
    const {workoutId} = useParams()
    const [workout ,setWorkout] = useState(null)
    const [isVisible, setIsVisible] = useState(false)
    const user = useContext(AuthedUserContext)

    useEffect(() => {
        const fetchWorkout = async () =>{
            const workoutData = await workoutService.showRoute(workoutId)
            setWorkout(workoutData)
        }
        fetchWorkout()
    },[workoutId])

    const handleAddProgress = async (progressFormData) =>{
     const newProgress = await workoutService.createProgress(workoutId, progressFormData)
      setWorkout({...workout, progress:[...workout.progress, newProgress]})
    }

   if(!workout) return <main>Loading...</main>

   return(
    <main className={styles.container}>
        <h3>{workout.title}</h3>
        <div className={styles.primaryDiv}>
        <section>
            <p>{new Date(workout.createdAt).toLocaleDateString()}</p>
            <hr></hr>
            <h4>Category:</h4>
            <p>{workout.category}</p>
            <h4>Sets:</h4>
            <p>{workout.sets}</p>
            <h4>Reps:</h4>
            <p>{workout.reps}</p>
            <h4>Weights:</h4>
            <p>{workout.weight} {!workout.weight ? "No Weights Used." : "lb(s)"}</p>
        {workout.user._id && (
            <>
            <button><Link to={`/workouts/${workoutId}/edit`}>Edit Workout</Link></button>
            <button className={styles.deleteBtn} onClick={()=> props.handleRemoveWorkout(workoutId)}>Delete</button>
            </>
        )}
        </section>
        </div>

        <div className={styles.secondaryDiv}>
        <section>
            
            <h3> {workout.title} - Progress</h3>
            <div>
                <button className={styles.progressBtn} onClick={()=>setIsVisible(!isVisible)}>
                    {!isVisible? 'Show Progress' : 'Hide Progress'}
                </button>
                {isVisible && <ProgressForm handleAddProgress={handleAddProgress} workout={workout}/>}
                
             </div>

          </section>
        </div>
    </main>
   )
}

export default WorkoutDetails