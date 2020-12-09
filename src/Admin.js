import React, { useEffect, useState } from "react";
import "./styles.css";
import Authentication from './Authentication';
import Login from "./Login";

export default function Admin() {

const [isAuthenticated,setAuthenticated]=useState("");

 useEffect(()=>{
  const Auth= async ()=>{  
     const i =await Authentication();
     setAuthenticated(i);
    // console.log("AdminPage",i); 
  };
Auth();
 },[])
// console.log("Adminpagereturntest",isAuthenticated)


if(isAuthenticated==="") return null
else if(isAuthenticated==="No") return(<Login/>)


return (
  <div className="App">
    <h1>Hello from Admin page</h1>
   
  </div>
);

}
