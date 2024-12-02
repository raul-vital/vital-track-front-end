import { useState } from 'react'
const WorkoutForm = (props) => {
    const [formData, setFormData] = useState({
        category: 'Strength Training',
        title:'',
        sets:'',
        reps:'',
        weight: '',

    })

    const handleChange = (event) =>{
        setFormData({...formData, [event.target.name]: event.target.value})

    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        props.handleNewWorkout(formData)
    }
    return(
        <main>
            <form onSubmit={handleSubmit}>
                <label htmlFor='category'>Category:</label>
                <select 
                  required
                  name="category"
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                <option value="Strength Training">Strength Training</option>
                <option value="Aerobics">Aerobics</option>
                <option value="Strength Training"> Stretching</option>
                <option value="Calisthenics">Calisthenics</option>
                </select>

                <label htmlFor='title'>Title:</label>
                <input 
                  required
                  type="text"
                  name="title"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}  
                />  

                <label htmlFor='sets'>Sets:</label>  
                <input 
                   required
                   type="number"
                   name="sets"
                   id="sets"
                   value={formData.sets}
                   onChange={handleChange}
              />

              <label htmlFor='reps'>Reps:</label>
              <input 
                 required
                 type="number"
                 name="reps"
                 id="reps"
                 value={formData.reps}
                 onChange={handleChange}
             />
             
             <label htmlFor='weight'>Weights: </label>
             <input 
               placeholder='Lbs'
               type="number"
               name="weight"
               id="weight"
               value={formData.weight}
               onChange={handleChange}
            />
            <button type='submit'>Submit</button>

            </form>
        </main>
    )
}

export default WorkoutForm