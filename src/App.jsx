import { useState, useEffect, createContext } from 'react'
import { Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Landing from './components/Landing/Landing'
import Dashboard from './components/Dashboard/Dashboard'
import SignupForm from './components/SignupForm/SignupForm'
import SigninForm from './components/SigninForm/SigninForm'
import WorkoutList from './components/WorkoutList/WorkoutList'
import WorkoutDetails from './components/WorkoutDetails/WorkoutDetails'
import WorkoutForm from './components/WorkoutForm/WorkoutForm'
import * as authService from './services/authService'
import * as workoutService from './services/workoutService'
export const AuthedUserContext = createContext(null)

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [workouts, setWorkouts] = useState([])
  const navigate = useNavigate()

    useEffect(() => {
       const fetchWorkouts = async () => {
        const workouts = await workoutService.indexRoute()
        setWorkouts(workouts)
       }
       if(user) fetchWorkouts()
    },[user])

  const handleSignout = () =>{
    authService.signout()
    setUser(null)
  }

  const handleNewWorkout = async (workoutFormData) => {
    const newWorkout = await workoutService.createRoute(workoutFormData)
    setWorkouts([newWorkout, ...workouts])
    navigate('/workouts')
  }

  const handleUpdateWorkout = async (workoutId, workoutFormData) => {
      const updatedWorkout = await workoutService.updateRoute(workoutId, workoutFormData)
      setWorkouts(workouts.map((workout) => (workoutId === workout._id ? updatedWorkout : workout)))
      navigate(`/workouts/${workoutId}`)
  }

  const handleRemoveWorkout = async (workoutId) =>{
    const deletedWorkout = await workoutService.deleteRoute(workoutId)
     setWorkouts(workouts.filter((workout)=> workout._id !== deletedWorkout._id))
     navigate('/workouts')
  }
  return (
    <>
     <NavBar  handleSignout={handleSignout} user={user} />
     <Routes>
      {user ? (
        <>
        <Route path="/" element={<Dashboard user={user}/>} />
        <Route path="/workouts" element={<WorkoutList workouts={workouts}/>} />
        <Route path="/workouts/:workoutId" element={<WorkoutDetails  handleRemoveWorkout={handleRemoveWorkout}/>} />
        <Route path="/workouts/new" element = {<WorkoutForm handleNewWorkout={handleNewWorkout} />} />
        <Route path="/workouts/:workoutId/edit" element={< WorkoutForm handleUpdateWorkout={handleUpdateWorkout} />} />
        </>
      ) : (
        <Route path="/" element={<Landing />} />
      )}
      <Route path='/signup' element={<SignupForm  setUser={setUser}/>} />
      <Route path='/signin' element={<SigninForm  setUser={setUser}/>} />
     </Routes>
     
    </>
  )
}

export default App
