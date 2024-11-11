import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Signup() {
    const navigate = useNavigate()
    const [Message, setMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        let username = e.target.username.value 
        let password = e.target.password.value

        try {
            let response = await axios.post("http://localhost:3000/signup", {username, password})
            setMessage("registro exitoso")
        } catch (error) {
            setMessage("error en el registros, verifica los datos")
        }
    }



  return (
    <div>
      <h1>sign up</h1>

      <form onSubmit={handleSubmit}  >
        <label htmlFor="username">username</label>
        <input type="text" name="username" id="" />
        <div></div>
        <label htmlFor="password">password</label>
        <input type="password" name="password" id="password" />
        <button>enviar</button>
      </form>
      {Message && <p> {Message}</p>  }
      <button onClick={ ()=> navigate("/login") } >Login</button>
    </div>
  )
}

export default Signup
