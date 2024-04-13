import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";
import GoogleButton from "react-google-button";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import useUserContext from "../../UserContext";

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
          localStorage.setItem("userDetails", JSON.stringify(data.userInfo));
          //navigate(`/landingpage/${data.userInfo.role.toLowerCase()}`);
          navigate(`/LandingPage`);
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
      setUserDetails(userData);
      navigate(`/landingpage/${userData.role.toLowerCase()}`);
    });
  };

  return (
    <div className="d-flex justify-content-center flex-column loginPage">
      <Card className=" p-5 w-25 bg-white bg-opacity-50 rounded-4 ms-5">
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
          <Link className="ml-1 text-decoration-none" to={"/register"}>
            Register
          </Link>
        </p>
      </Card>
    </div>
  );
}

export default LoginPage;
