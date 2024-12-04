import { useState, useEffect } from 'react'
import * as workoutService from '../../services/workoutService'

const ProgressForm = (props) => {
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
        props.handleAddProgress(formData)
        setFormData({
            date: '',
            weightsLifted: '',
            notes: ''
        })
    }

    return(
        <>
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
        
        </>
    )
}

export default ProgressForm