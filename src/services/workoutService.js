const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/workouts`

const indexRoute = async () =>{
    try{
        const res = await fetch(BASE_URL, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
          })
          return res.json()
    }catch(err){
        console.log(err)
    }
}

const showRoute = async (workoutId) => {
    try{
        const res = await fetch(`${BASE_URL}/${workoutId}`,{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        return res.json()
    }catch(err){
        console.log(err)
    }
}

const createRoute = async (workoutFormData) => {
    try{
        const res = await fetch(BASE_URL,{
            method:'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(workoutFormData)
        })
        return res.json()
    }catch(err){
        console.log(err)
    }
}

const updateRoute = async (workoutId, workoutFormData) => {
    try{
        const res = await fetch(`${BASE_URL}/${workoutId}`,{
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(workoutFormData)
        })
         return res.json()

    }catch(err){
        console.log(err)
        }
    }


export{
    indexRoute,
    showRoute,
    createRoute,
    updateRoute,
}