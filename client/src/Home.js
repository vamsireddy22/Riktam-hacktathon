import React from 'react'
import {useHistory} from "react-router-dom";
import {Button} from "react-bootstrap"
import "./App.css"
import {Link} from "react-router-dom";
//import {useHistory} from"react-router-dom";

const Home=()=>{
    const history=useHistory();

    function handleClickLogin(){
        useHistory.push("./Login")
    }

    function handleClickRegister(){
        useHistory.push("./Register");
    }

    return(
        <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
            {/* <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="" /> */}
            <h1 className="masthead-heading text-uppercase mb-5">Welcome to Riktam Hackathon Challenge</h1>
            <Button color="black" block size="lg" onClick={()=>{
                 history.push("/login")
             }}>
                Login</Button>

            <Button color="black" block size="lg" onClick={()=>{
                 history.push("/register")
             }}>
                Register</Button>

                <Button color="black" block size="lg" onClick={()=>{
                 history.push("/upload")
             }}>
                Upload</Button>
        </div>
    </header>
    )
}

export default Home;



