import React , { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import {useNavigate} from  "react-router-dom"
import "./LoginPage.scss"
import GoogleButton from "react-google-button";

function LoginPage() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate();

  function loginUser(e) {
    e.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value)
    navigate("/Dashboard")

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
          <GoogleButton
          />
          <Form.Group className="mt-1">
            <Button type="submit" className="mt-5 w-100">
              Login
            </Button>
          </Form.Group>
        </Form>
      </Card>
    </div>
  )
}

export default LoginPage