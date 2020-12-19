import React from 'react'
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap"
import "./App.css"
import Login from "./Login"

const Home=()=>{
    return(
        <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
            {/* <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="" /> */}
            <h1 className="masthead-heading text-uppercase mb-5">Welcome to Riktam Hackathon Challenge</h1>
            {/* <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div> */}
            <a href="./Login"><Button color="black" block size="lg">
          Login
        </Button></a>
        <Button color="black" block size="lg"  href="./Register.js" onCLick={<Login/>}>
          Register
        </Button>
            {/* <p className="masthead-subheading font-weight-light mb-0">Web Designer - UI Designer - Data Science</p> */}
        </div>
    </header>
    )
}

export default Home;



