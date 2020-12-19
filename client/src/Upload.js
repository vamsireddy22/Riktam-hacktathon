import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './App.css'


const Upload=()=>{
    const [place, setPlace]=useState("");
    const [date,setDate]=useState("");
    const [time,setTime]=useState("");
    const [pic, setPic]=useState("");

    function handleSubmit(event){
        event.preventDefault();
    }

    return(
        <div>
            <center><h1>Upload picture of unhygenic places</h1></center>
            <div className="Login">
            <Form onSubmit={handleSubmit}>

            <Form.Group size="lg" controlId="name">
            <Form.Label>Place or Area</Form.Label>
          <Form.Control
            autoFocus
            type="place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </Form.Group>

            <Form.Group size="lg" controlId="email">
            <Form.Label>Date</Form.Label>
          <Form.Control
            autoFocus
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label>Upload a Pic</Form.Label>
          <Form.Control
            type="file"
            value={pic}
            onChange={(e) => setPic(e.target.value)}
          />
        </Form.Group>

        <Button block size="lg" type="submit">
          Submit
        </Button>
      </Form>
    </div>
        </div>
        
    )
}

export default Upload;