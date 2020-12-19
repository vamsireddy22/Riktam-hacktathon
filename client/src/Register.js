import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './App.css'


const Register=()=>{
    const [email, setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");

    function validateForm(){
        return email.length>0 && password.lenght>0;
    }

    function handleSubmit(event){
        event.preventDefault();
    }

    return(
      <section id="Register">
        <div>
            <center><h1>Welcome and Login with your credentials</h1></center>
            <div className="Login">
            <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
            <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
            <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Register
        </Button>
      </Form>
    </div>
        </div></section>
        
    )
}

export default Register;