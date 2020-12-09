// import React from "react";
import "./styles.css";

//Const Declaration begins
const axios = require("axios");

export default async function  Authentication() {
        const k = await axios.post('/authenticate')
            .then(function (response) {
              //  console.log(response,response.data,response.data.token);
               if(response.data.message === "Authenticated") {
                console.log("Authenticated Loop entered");
                return("Yes") }
               else {
                console.log("Un Authenticated Loop entered");
                return("No")} ;
            // console.log(response.data.message);
            })
            .catch(function (error) {
              console.log(error.response);
            })
   
            return k;
}
