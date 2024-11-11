import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [message, setmessage] = useState("")
    const navigate = useNavigate()


    const handleSubmit = async (e)=>{
        e.preventDefault() 

        let username = e.target.username.value 
        let password = e.target.password.value

        try {
            let results = await  axios.post("http://localhost:3000/login", {username, password} )
            
            
            console.log(` resultados ${results.data.token} `)
            localStorage.setItem("token", results.data.token)

            setmessage("logueado correctametne")
            setTimeout(()=>{
                navigate("/")
            },2000)

        } catch (error) {
            setmessage("credenciales incorrectas")
        }
    }




  return (


    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit} method="post">
        <label htmlFor="">user</label>
        <input type="text" name="username" id="" />
        <div></div>
        <label htmlFor="">password</label>
        <input type="text" name="password" id="" />
        <div></div>
        <button>submit</button>

      </form>

        {message && <p>{message}</p>  }

    </div>
  )
}

export default Login
