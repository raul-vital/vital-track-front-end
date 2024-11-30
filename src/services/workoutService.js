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

export{
    indexRoute
}