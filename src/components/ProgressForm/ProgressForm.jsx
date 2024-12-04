import { useState, useEffect } from 'react'
import * as workoutService from '../../services/workoutService'

const ProgressForm = ({ workout, handleAddProgress}) => {
    const [formData, setFormData] = useState({
        date: '',
        weightsLifted:'',
        notes: ''
    })
    
    const handleChange = (event) =>{
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        handleAddProgress(formData)
        setFormData({
            date: '',
            weightsLifted: '',
            notes: ''
        })
    }

    return(
        <>
        <section>
        <div>
            {console.log(workout.progress)}
             {!workout.progress.length && <p>There isn't any progress saved.</p>}
            {workout.progress.map((progressData)=> (
                <div key={progressData._id}>
                    <p>Date: {progressData.date}</p>
                    <p>Weights Lifted: {progressData.weightsLifted}</p>
                    <p>Notes: {progressData.notes || 'No notes provided.'}</p>
                </div>
            ))}

            </div>
        
        </section>
        <section>
         <div>
        <form onSubmit={handleSubmit}>
        
        <label htmlFor='date'> Date: </label>
        <input
          type="text"
          name="date"
          id="date"
          placeholder='MM/DD/YYYY'
          value={formData.date}
          onChange={handleChange}
        />
         <label htmlFor='weights-lifted'> Weights Lifted: </label>
        <input
          type="number"
          name="weightsLifted"
          id="weights-lifted"
          placeholder='Lbs'
          value={formData.weightsLifted}
          onChange={handleChange}
        />
         <label htmlFor='notes'> Notes: </label>
        <textarea
          type="text"
          name="notes"
          id="notes"
          value={formData.notes}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
        </form>
        </div>
        </section>
        </>
    )

}

export default ProgressForm