import React, { useEffect, useState } from "react";
import { Redirect, Route,useHistory } from "react-router-dom";
import { useAuth } from "./context/auth";


//Const Declaration begins
const axios = require("axios");
// const history = useHistory();

function PrivRoute({ component: Component, ...rest }) {
    const [isAuthenticated,setAuthenticated] = useState("No");

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




  
    
  
  
  console.log("PrivROute isAuthenticated",isAuthenticated);
  




  
  return (
    <Route
      {...rest}
      render={(props) =>
     
        isAuthenticated == "Yes" ? ( 
            <Component {...props} />
        ) : (
            
          <Redirect
            to={{ pathname: "/Login", state: { referer: props.location } }}
          />
        )
      }
    />
  );


// if(isAuthenticated==="true"){return <Component {...rest} />}
// // else return  <Redirect to={{ pathname: "/Login", state: { referer: rest.path } }}/>;




}

export default PrivRoute;
