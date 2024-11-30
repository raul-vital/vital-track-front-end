import { Link } from 'react-router-dom'
const WorkoutList = (props) =>{
    return(
        <main>
            <div>
            {props.workouts.map((workout) => (
               <Link key={workout._id} to={`/workouts/${workout._id}`}>
                 <header>
                    <h2>{workout.category}</h2>
                    <h3>{workout.title}</h3>
                    <p>{new Date(workout.createdAt).toLocaleDateString()}</p>
                 </header>
                </Link>
            ))}
           </div> 
        </main>
    )
}

export default WorkoutList