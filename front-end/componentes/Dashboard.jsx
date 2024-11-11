import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate()

  useEffect(() => {


    const checkToken = async () => {

        try {
            let token = localStorage.getItem("token");
            let results = await axios.get("http://localhost:3000/protected", {
              headers: { Authorization: token },
            });
            let msj = results.data.message;
            console.log(`este es el mensaje ${msj}`);
            setMessage(results.data.message);
            
        } catch (error) {
            console.log(`este es el error ${error}`)
            setMessage(`este es el error `)
            navigate("/login")
        }
    };

    checkToken();
  }, []);


  const handlelogout = () =>{
    console.log("log out")
  }

  return (
    <div>
      <h1>dashboard</h1>

      {message && <p> {message} </p>}
      <button onClick={()=>handlelogout()} >logout</button>
    </div>
  );
}

export default Dashboard;
