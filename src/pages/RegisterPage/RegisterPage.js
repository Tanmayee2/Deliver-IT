import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./RegisterPage.scss";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/register_bg.jpg";

function RegisterPage() {
  const navigate = useNavigate();
  const FirstnameRef = useRef();
  const LastnameRef = useRef();
  const emailRef = useRef();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [roleSelected, setRoleSelected] = useState("");
  const roleOption = ["Customer", "Delivery Manager", "Delivery Driver"]; // Added for confirm password
  const availPackages = [];
  const chat = [];

  useEffect(() => console.log(roleSelected), [roleSelected]);
  function registerUser(e) {
    e.preventDefault();

    // TODO: Add validation checks here (e.g., confirm passwords match)
    console.log(roleSelected);
    const userData = {
      firstName: FirstnameRef.current.value,
      lastName: LastnameRef.current.value,
      email: emailRef.current.value,
      password: password,
      role: roleSelected,
      packages: availPackages,
      chat: chat,
    };

    fetch("https://delivery-it-server.onrender.com/register", {
      //server working on port 8080
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/Login");
        // Handle the success (maybe redirect to a login page or show a success message)
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
        // Handle the error (show error message to the user)
      });
  }

  return (
    <div
      className="RegisterPage d-flex justify-content-center flex-column loginPage"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        width: "100%",
        //height: "300px", // Adjust height as needed
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card className="RegisterPage__Card p-4 w-50 bg-white bg-opacity-50 rounded-4 ms-5">
        <Form onSubmit={registerUser}>
          <Form.Group className="d-flex flex-row mt-3">
            <Form.Control
              ref={FirstnameRef}
              name="firstName"
              type="text" // Changed type to text
              placeholder="Enter your first name"
            />
            <Form.Control
              className="ms-1"
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
          <Form.Group className="d-flex flex-row mt-3">
            <Form.Control
              ref={setPassword}
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <Form.Control
              className="ms-1"
              type="password"
              ref={setConfirmPassword}
              name="Confirm Password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.currentTarget.value)}
            />
            {confirmPassword.length > 0 && confirmPassword !== password ? (
              <p className="text-bg-danger text">password did not match </p>
            ) : (
              <></>
            )}
          </Form.Group>{" "}
          <Form.Select
            className="mt-3"
            onChange={(e) => {
              setRoleSelected(e.currentTarget.value);
            }}
            aria-label="select role"
          >
            <option>Select Role</option>
            {roleOption.map((element) => (
              <option value={element} key={element}>
                {element}
              </option>
            ))}
          </Form.Select>
          <Form.Group className="mt-1">
            <Button type="submit" className="mt-3 w-100">
              Register
            </Button>
          </Form.Group>
        </Form>
        <p className="text-center mt-3">
          Already a user? <Link to={"/Login"}>Login</Link>
        </p>
      </Card>
    </div>
  );
}
export default RegisterPage;
