import { AuthedUserContext } from '../../App'
import { useState, useEffect, useContext } from 'react'
import { useParams, Link } from "react-router-dom"
import ProgressForm from '../ProgressForm/ProgressForm'
import * as workoutService from '../../services/workoutService'


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
    <main>
        <div>
        <header>
            <h3>{workout.title}</h3>
            <p>{workout.category}</p>
            <p>Sets: {workout.sets}</p>
            <p>Reps: {workout.reps}</p>
            <p>Weights: {workout.weight} {!workout.weight ? "No Weights Used." : "lb(s)"}</p>
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
            
            <h3> {workout.title} - Progress</h3>
            <div>
                {isVisible && <ProgressForm handleAddProgress={handleAddProgress} workout={workout}/>}
                <button onClick={()=>setIsVisible(!isVisible)}>
                    Show Or Hide
                </button>
             </div>

          </section>
        </div>
    </main>
   )
}

export default WorkoutDetails