import React , { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import "./RegisterPage.scss"

function RegisterPage() {

  const emailRef = useRef()
  const passwordRef = useRef()


  function registerUser(e) {
    e.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value)
  }
  return (
    <div className="d-flex align-items-center flex-column justify-content-center resgisterPage">
      <h2 className=" text-white mb-5">Login</h2>
      <Card className="p-5 w-25">
        <Form onSubmit={(e) => registerUser(e)}>
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