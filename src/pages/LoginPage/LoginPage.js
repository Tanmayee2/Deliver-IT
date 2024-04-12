import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";
import "./LoginPage.scss";
import GoogleButton from "react-google-button";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";

function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { setUserDetails } = useUserContext();

  function loginUser(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.userInfo) {
          setUserDetails(data.userInfo);
          navigate(`/landingpage/${data.userInfo.role.toLowerCase()}`);
        } else {
          throw new Error("Login failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const handleClick = () => {
    signInWithPopup(auth, provider).then((result) => {
      const userData = { email: result.user.email, role: "Customer" }; // Simplified; adjust as needed
      login(userData);
      navigate(`/landingpage/${userData.role.toLowerCase()}`);
    });
  };

  return (
    <div className="d-flex align-items-center flex-column justify-content-center loginPage">
      <h2 className=" text-white mb-5">Login</h2>
      <Card className="p-5 w-50">
        <Form onSubmit={loginUser}>
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
          <br />
          <Form.Group className="mt-1">
            <Button type="submit" className="mt-3 w-100">
              Login
            </Button>
          </Form.Group>
          <GoogleButton className="mt-3" onClick={handleClick}></GoogleButton>
        </Form>
        <p className="text-center mt-3">
          Not a user?{" "}
          <Link className="ml-1" to={"/register"}>
            Register
          </Link>
        </p>
      </Card>
    </div>
  );
}

export default LoginPage;
