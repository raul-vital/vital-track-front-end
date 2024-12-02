import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import * as workoutService from '../../services/workoutService'


const WorkoutDetails = (props) => {
    const {workoutId} = useParams()
    const [workout ,setWorkout] = useState(null)

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
            <p> progress: {workout.progress.weightsLifted}</p>
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