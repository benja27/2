import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Splash from "../componentes/Splash"
import Signup from "../componentes/Signup"
import Login from "../componentes/Login"
import Dashboard from "../componentes/Dashboard"
import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  const [isAuth, setisAuth] = useState(false)
  const [loading, setloading] = useState(true)
 
  useEffect(()=>{
    try {
      let token = localStorage.getItem("token")

      if (!token) return setloading(false)
      
      setisAuth(true)
      setloading(false)
      
    } catch (error) {
      console.log('error')
      setloading(false)
    }

  },[])

  if (loading){
    return <div>loading</div>
  }
  
 
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Splash></Splash> } ></Route>
        <Route path="/signup" element={ <Signup></Signup> } ></Route>
        <Route path="/login" element={ <Login></Login> } ></Route>
        <Route path="/Dashboard" element={  isAuth ? <Dashboard></Dashboard> : <Login></Login>  } ></Route>
      </Routes>
    </Router>
  )
}

export default App
