import { AuthedUserContext } from '../../App'
import { useState, useEffect, useContext } from 'react'
import { useParams, Link } from "react-router-dom"
import * as workoutService from '../../services/workoutService'


const WorkoutDetails = (props) => {
    const {workoutId} = useParams()
    const [workout ,setWorkout] = useState(null)
    const user = useContext(AuthedUserContext)

    useEffect(() => {
        const fetchWorkout = async () =>{
            const workoutData = await workoutService.showRoute(workoutId)
            setWorkout(workoutData)
        }
        fetchWorkout()
    },[workoutId])

   if(!workout) return <main>Loading...</main>

   return(
    <main>
        <div>
        <header>
            <h3>{workout.title}</h3>
            <p>{workout.category}</p>
            <p>Sets: {workout.sets}</p>
            <p>Reps: {workout.reps}</p>
            <p>Weights: {workout.weight} {!workout.weight ? "No Weights Used." : "lb/s"}</p>
            <p>progress: {workout.progress.weightsLifted}</p>
        {workout.user._id && (
            <>
            <button><Link to={`/workouts/${workoutId}/edit`}>Edit Workout</Link></button>
            <button onClick={()=> props.handleRemoveWorkout(workoutId)}>Delete</button>
            </>
        )}
        </header>
        </div>

        <div>
        <section>
            {!workout.progress.length && <p>There isn't any progress saved.</p>}
            {workout.progress.map((progressData)=> {
                <p key={progressData._id}> {workout.progressData} </p>
            
            })}
            {console.log(workout.progress)}
          </section>
        </div>
    </main>
   )
}

export default WorkoutDetails