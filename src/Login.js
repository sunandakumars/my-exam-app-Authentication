import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./styles.css";
import { useAuth } from "./context/auth";


//Const Declaration begins
const axios = require("axios");
const qs = require("qs");
const userDtls={
EmailAddress: "",
Password: ""
};


export default function Login(props) {
  const [userDetails,setUserDetails]=useState(userDtls)
  // const [isLoggedIn, setLoggedIn] = useState(false);
  const { authTokens,setTokens } = useAuth();
  // const referer = props.location.state ? props.location.state.referer : "/";
  // const referer = props.comp ? props.comp : "/";
  const referer='/';
console.log(props);
  function PostLogin(e) {
    e.preventDefault();
    axios.post('/login',qs.stringify({
      EmailAddress  : userDetails.EmailAddress,
      Password      : userDetails.Password
    })
  )
      .then(function (response) {
         console.log(response,response.data,response.data.token);
         setTokens((prev)=>{
           return{
             ...prev,
             userDetailsDB:response.data
          }
           });
      })
      .catch(function (error) {
        console.log(error.response);
      })


    // setTokens({ username: "pvkr", pass: "1234" });
    // setLoggedIn(true);

    console.log(userDetails,"FORM SUBMIT!");

  }
 

function handleOnChange(e){
e.preventDefault();
console.log(e.target);
 setUserDetails((prev)=>({...prev,[e.target.id]:e.target.value}));
}




if (authTokens.userDetailsDB.message==="Login Successfull") {
  console.log("if loop enetered");
 return <Redirect to={referer} />;
}
console.log("referer:",referer);

  return (
    <div className='container-fluid' >
          <div className='container-fluid top'>

          </div>
          <div className='container middle'>
          <h1> Login to Start Learning</h1>
          <form className="LoginForm" id="loginForm" onSubmit={PostLogin}>
          <div className="form-group">
          <label className="EmailAddress" htmlFor="EmailAddress"></label>
          <input onChange={handleOnChange} type="email" className="form-control" id="EmailAddress" aria-describedby="emailHelp" placeholder="Enter email" value={userDetails.EmailAddress}/>
          </div>
          <div className="form-group">
          <label className="Password" htmlFor="Password"></label>
          <input onChange={handleOnChange} type="password" className="form-control" id="Password" placeholder="Password" value={userDetails.Password}/>
          </div>
          <button type="submit" className="btn btn-primary" id="SubmitButton">Submit</button>
          </form>
          </div>
          <div className='container-fluid bottom'>

          </div>
          <button>Logout</button>
        </div>  
      
    
  );
}
