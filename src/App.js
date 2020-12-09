import React, { useState } from "react";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Admin from "./Admin";
// import Authenticate from "./Authenticate";
// import PrivateRoute from "./PrivateRoute";
// import PrivRoute from "./PrivRoute";
import { AuthContext } from "./context/auth";

//Const Declaration begins
// const axios = require("axios");

export default function App() {
  const existingTokens = {userDetailsDB:{},Status:"NotAuthenticated"};
  const [authTokens, SetAuthTokens] = useState(existingTokens);
  const setTokens = (data) => { 
    // localStorage.setItem(" y", JSON.stringify(data));
    SetAuthTokens(data);
  };

  // function CheckAuthentication(){
  //   axios.post('/authenticate')
  //   .then(function (response) {
  //      console.log(response,response.data,response.data.token);
  //      response.data.message === "Authenticated" ? setTokens((prev)=>{
  //       return{
  //         ...prev,
  //         Status:"Authenticated"
  //      }}) :
  //       setTokens((prev)=>{
  //         return{...prev,Status:"NotAuthenticated"}
  //         }) ;
    
  //   })
  //   .catch(function (error) {
  //     console.log(error.response);
  //   })

  //   return authTokens;
  // }

  console.log(AuthContext,"authTokens",authTokens, setTokens);
  return (
    <AuthContext.Provider value={{ authTokens, setTokens }}>
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/Register" component={Register} />
          <Route path="/Login" component={Login} />
          <Route path="/Admin" component={Admin} />
          {/* <Route path="/Authenticate" component={Authenticate} /> */}
          <Route path="/Dashboard" component={Dashboard} />
          {/* <PrivateRoute path="/Dashboard" component={Dashboard} /> */}
        </div>
      </Router>
    </AuthContext.Provider>
  );
}
