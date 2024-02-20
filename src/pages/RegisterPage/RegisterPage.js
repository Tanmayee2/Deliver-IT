import React , { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import "./RegisterPage.scss"

function RegisterPage() {

  const FirstnameRef = useRef()
  const LastnameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()


  function registerUser(e) {
    e.preventDefault();
    console.log(FirstnameRef.current.value, LastnameRef.current.value, emailRef.current.value, passwordRef.current.value)
  }
  return (
    <div className="d-flex align-items-center flex-column justify-content-center resgisterPage">
      <h2 className=" text-white mb-5">Register</h2>
      <Card className="p-5 w-25">
        <Form onSubmit={(e) => registerUser(e)}>
          <Form.Group>
            <Form.Control
              ref={FirstnameRef}
              name="Firstname"
              type="Firstname"
              placeholder="Enter your first name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
            ref={LastnameRef}
            name="Lastname"
            type="Lastname"
            placeholder="Enter your last name"
            />
          </Form.Group>
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
          <Form.Group>
            <Form.Control
            className="mt-3"
              ref={passwordRef}
              name="password"
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
      </Card>
    </div>
  )
}

export default RegisterPage