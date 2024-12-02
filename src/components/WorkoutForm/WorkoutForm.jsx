import { useState } from 'react'
const WorkoutForm = (props) => {
    const [formData, setFormData] = useState({
        category: 'Strength Training',
        title:'',
        sets:'',
        reps:'',
        weight: '',

    })

    return(
        <main>
            <form>
                <label htmlFor='category'>Category:</label>
                <select 
                  required
                  name="category"
                  id="category"
                  value={formData.category}
                  onChange=''
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
                  onChange=''  
                />  

                <label htmlFor='sets'>Sets:</label>  
                <input 
                   required
                   type="number"
                   name="sets"
                   id="sets"
                   value={formData.sets}
                   onChange=''
              />

              <label htmlFor='reps'>Reps:</label>
              <input 
                 required
                 type="number"
                 name="reps"
                 id="reps"
                 value={formData.reps}
                 onChange=''
             />
             
             <label htmlFor='weight'>Weights: </label>
             <input 
               type="number"
               name="weight"
               id="weight"
               value={formData.weight}
               onChange=''
            />
            <button>Submit</button>

            </form>
        </main>
    )
}

export default WorkoutForm