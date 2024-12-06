import { useState, useEffect } from 'react'
import * as workoutService from '../../services/workoutService'
import styles from './ProgressForm.module.css'

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
        
        <main className={styles.container}>
        <section>
        <div className={styles.cardDiv}>
             {!workout.progress.length && <p className={styles.noProgress}>No saved progress.</p>}
            {workout.progress.map((progressData)=> (
                <div className={styles.cardLi} key={progressData._id}>
                    <h3>Date:</h3>
                    <p>{progressData.date}</p>
                    <h3>Weights Lifted:</h3>
                    <p>{progressData.weightsLifted} Lb(s).</p>
                    <h3>Notes:</h3>
                    <p>{progressData.notes || 'No notes provided.'}</p>
                </div>
            ))}

            </div>
        
        </section>
        <section>
         <div>
        <hr></hr>
         <h1>Add Progress</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor='date'> Date: </label>
        <input
          required
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
        <button className={styles.submitBtn} type="submit">Submit</button>
        
        </form>
        </div>
        <footer></footer>
        </section>

        </main>

        
    )

}

export default ProgressForm