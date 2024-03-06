import React, { useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import {useNavigate} from "react-router";
import "./RegisterPage.scss";
import { Link } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();
  const FirstnameRef = useRef();
  const LastnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useState();
  const confirmPasswordRef = useState(); // Added for confirm password

  function registerUser(e) {
    e.preventDefault();

    // TODO: Add validation checks here (e.g., confirm passwords match)

    const userData = {
      firstName: FirstnameRef.current.value,
      lastName: LastnameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    fetch('http://localhost:8080/register', { //server working on port 8080
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      navigate("/Login")
      // Handle the success (maybe redirect to a login page or show a success message)
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      // Handle the error (show error message to the user)
    });
  }

  return (
    <div className="d-flex align-items-center flex-column justify-content-center registerPage">
      <h2 className="text-white mb-5">Register </h2>
      <Card className="p-5 w-25">
        <Form onSubmit={registerUser}>
          <h2> User Registration </h2> <br></br>
          <Form.Group>
            <Form.Control
              ref={FirstnameRef}
              name="firstName"
              type="text" // Changed type to text
              placeholder="Enter your first name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="mt-3"
              ref={LastnameRef}
              name="lastName"
              type="text" // Changed type to text
              placeholder="Enter your last name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="mt-3"
              ref={emailRef}
              name="email"
              type="email"
              placeholder="Enter your Email Id"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="mt-3"
              ref={passwordRef}
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="mt-3"
              ref={confirmPasswordRef} // Use the new ref for confirm password
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Group>
          <Form.Group className="mt-1">
            <Button type="submit" className="mt-5 w-100">
              Register
            </Button> 
          </Form.Group>
        </Form>
        <p className="text-center mt-3">Already a user? <Link to={"/Login"}>Login</Link></p>
      </Card>
    </div>
  );
}
export default RegisterPage;
