import React from 'react'
import { useNavigate } from 'react-router-dom'

function Splash() {
    const navigate = useNavigate()


  return (
    <div>
      <h1>splash screen</h1>      

      <button onClick={  ()=> navigate("/signup") }  >sign up</button>
      <button onClick={  ()=> navigate("/login") }  >login</button>
      <button onClick={  ()=> navigate("/dashboard") }  >dahboard</button>
      {/* <button onClick={  ()=> navigate("/dashboard") }  >login</button> */}
        
    </div>
  )
}

export default Splash
