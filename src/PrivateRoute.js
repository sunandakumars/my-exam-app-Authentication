import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./context/auth";
import Login from './Login';


//Const Declaration begins
const axios = require("axios");
const qs = require("qs");


function PrivateRoute({ component: Component, ...rest }) {
  const { authTokens } = useAuth();
  const [isAuthenticated,setAuthenticated] = useState("");
  // const k= AuthenticationStatus();
  console.log("component",{Component},"rest",{...rest},"authTokens",authTokens);
  // console.log("useauth:", useAuth, "isAuthenticated:", authTokens);
  
useEffect(()=>{
  function Authenticate() {
    axios.post('/authenticate')
      .then(function (response) {
        //  console.log(response,response.data,response.data.token);
         response.data.message === "Authenticated" ? setAuthenticated("Yes") :setAuthenticated("No") ;
      
      })
      .catch(function (error) {
        console.log(error.response);
      })

    console.log("Authenticate");

  }

  Authenticate();

},[])
  

if (isAuthenticated==="Yes") {
  console.log("Its Authenticated");
 return <Component />;
}
 else if (isAuthenticated==="No"){
  //  return <Redirect to={{ pathname: "/Login", state: { referer: {...rest}.path } }}/>
  return <Login/>
  } 
  else if (isAuthenticated===""){
    //  return <Redirect to={{ pathname: "/Login", state: { referer: {...rest}.path } }}/>
    return null
    } ;

  
  // return (

  //   <h1> is Loading..</h1>
  //   // <Route
  //   //   {...rest}
  //   //   render={(props) =>
     
  //   //     isAuthenticated ? ( 
  //   //       <Component {...props} />
  //   //     ) : (
  //   //       <Redirect
  //   //         to={{ pathname: "/Login", state: { referer: props.location } }}
  //   //       />
  //   //     )
  //   //   }
  //   // />
  // );


// if(isAuthenticated==="true"){return <Component {...rest} />}
// // else return  <Redirect to={{ pathname: "/Login", state: { referer: rest.path } }}/>;




}

export default PrivateRoute;
