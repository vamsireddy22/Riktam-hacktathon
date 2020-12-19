import React,{useState} from "react";
import axios from "axios";
import './App.css'


const Register=()=>{
    const [email, setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");

    function validateForm(){
        return email.length>0 && password.lenght>0;
    }

    function handleSubmit(){
      const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const name = document.getElementById('name').value;
        const userDetails = {
            email,
            password,
            name
        }
        axios.post("http://localhost:5000/user/signup",userDetails)
            .then(res=>{
                console.log(res);
            })
    }

    return(
      
        <div>
            <center><h1>Welcome and Register</h1></center>
      <div> Name:
        <input type="textfield" id="name"></input>
      </div>
      <div> Email:
        <input type="textfield" id="email"></input>
      </div>
      <div> Password:
        <input type="password" id="password"></input>
      </div>
      <div> 
        <button type="button" onClick={()=>handleSubmit()}>Register</button>
      </div>
    </div>
    )
}

export default Register;