import React, { useEffect, useState } from "react";
// import { Redirect } from "react-router-dom";
import "./styles.css";
// import { useAuth } from "./context/auth";
import Login from "./Login";

//Const Declaration begins
const axios = require("axios");
// const qs = require("qs");





export default function Dashboard() {
  const [isAuthenticated,setAuthenticated] = useState("");
  // const { setTokens } = useAuth();
  // function Logout() {
  //   setTokens();
  //   localStorage.clear();
  // }
  
  // console.log("useLayoutEffect entered");
  
 

  useEffect(()=>{
  
      const Authenticate = () => {
          axios.post('/authenticate')
            .then(function (response) {
               console.log(response,response.data,response.data.token);
               response.data.message === "Authenticated" ? setAuthenticated("Yes") : setAuthenticated("No") ;
            console.log(response.data.message);
            })
            .catch(function (error) {
              console.log(error.response);
            })
      
          console.log("Authenticate lopp entered");
      
        }
        
        Authenticate();
  },[])


console.log("DashboardAuthenticate",isAuthenticated)



  if(isAuthenticated==="No")
  return (
    <Login/>
  )
  else if(isAuthenticated==="")
  return null
  return (
    <div>
      <h1>Hello from Dashboard</h1>
    </div>
  );


  
}
