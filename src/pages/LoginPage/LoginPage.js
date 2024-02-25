import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";
import GoogleButton from "react-google-button";

function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  function loginUser(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    fetch('http://localhost:3000/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Login failed');
      }
      return response.json();
    })
    .then(data => {
      console.log('Login Successful', data);
      localStorage.setItem('userInfo', JSON.stringify(data)); // Store user info in localStorage
      navigate("/LandingPage");
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <div className="d-flex align-items-center flex-column justify-content-center loginPage">
      <h2 className=" text-white mb-5">Login</h2>
      <Card className="p-5 w-25">
        <Form onSubmit={(e) => loginUser(e)}>
          <Form.Group>
            <Form.Control
              ref={emailRef}
              name="email"
              type="email"
              placeholder="name@example.com"
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
          <br></br>
          <GoogleButton />
          <Form.Group className="mt-1">
            <Button type="submit" className="mt-3 w-100">
              Login
            </Button>
          </Form.Group>
        </Form>
      </Card>
    </div>
  );
}

export default LoginPage;
