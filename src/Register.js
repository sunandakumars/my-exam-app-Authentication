import React, { useState } from "react";
import {Redirect } from "react-router-dom";
// import "./styles.css";
// import { useAuth } from "./context/auth";
import "./styles/components/Register.css";
// import Cookies from 'js-cookie';

//Const Declaration begins
const axios = require("axios");
const qs = require("qs");
const userDtls={
FirstName : "",
LastName : "",
EmailAddress: "",
Password: ""
};

// Const Declaration ends
export default function Register(props) {
  const [userDetails,setUserDetails]=useState(userDtls)
  const [IsRegistered, setRegistered] = useState("No");
  // const { setTokens } = useAuth();
  // const referer = props.location.state ? props.location.state.referer : "/";

  function PostRegister(e) {
    e.preventDefault();
    axios.post('/register',qs.stringify({
      FirstName     : userDetails.FirstName,
      LastName      : userDetails.LastName,
      EmailAddress  : userDetails.EmailAddress,
      Password      : userDetails.Password
    })
  )
      .then(function (response) {
         console.log(response,response.data,response.data.token);
         response.data.message ==="Registered Sucessfully" ?setRegistered("Yes") :setRegistered("No") ; 
         
      
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




if (IsRegistered==="Yes") {
  console.log("if loop enetered");
 return <Redirect to={{pathname: "/Login"}} />;
}





  // console.log(
  //   "loginuseAuth",
  //   setTokens,
  //   "props",
  //   props,
  //   referer,
  //   props.location,
  //   props.location.state,
  //   isLoggedIn
  // );















  return (
    <div className='container-fluid' >
          <div className='container-fluid top'>

          </div>
          <div className='container middle'>
          <h1> Register to Start Learning</h1>
          <form className="LoginForm" id="loginForm" onSubmit={PostRegister}>
          <div className="form-group">
          <label className="FirstName" htmlFor="FirstName"></label>
          <input onChange={handleOnChange} type="text" className="form-control" id="FirstName"  placeholder="Enter First Name" value={userDetails.FirstName}/>
          <label className="LastName" htmlFor="LastName"></label>
          <input onChange={handleOnChange} type="text" className="form-control" id="LastName"  placeholder="Enter Last Name" value={userDetails.LastName}/>
          </div>
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
        
        </div>  
  );
}
