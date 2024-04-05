import React from "react";
import "./HomePage.scss";
import deliveryImage from "../../assets/images/DeliveryEase.jpeg";
//import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink
import axios from "axios";

function HomePage() {
  return (
    <div className="homepage">
      <header>
        <div className="logo-container">
          {/* <img src={deliveryImage} alt="Delivery" className="logo-image small-logo" /> */}
        </div>
        <div className="title-container">
          <h1>Welcome to Deliveryease</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="http://localhost:3000/HomePage">HOME</a>
            </li>
            <li>
              <a href="http://localhost:3000/HomePage">ABOUT</a>
            </li>
            <li>
              <a href="http://localhost:3000/HomePage">CONTACT US</a>
            </li>
            <li>
              <a href="http://localhost:3000/HomePage">#</a>
            </li>
          </ul>
          <div className="buttons-container">
            <LoginButton />
            <SignupButton />
          </div>
        </nav>
      </header>
      <div className="main-container">
        <main>
          <section id="home">
            {" "}
            {/* Add id for scrolling */}
            <h2>Home</h2>
            <p>
              This is the home page of the delivery management system. You can
              find more information about the system here.
            </p>
          </section>
          <section id="about">
            {" "}
            {/* Add id for scrolling */}
            <h2>About</h2>
            <p>
              This is a delivery Management System that will track the users
              package
            </p>
          </section>
          <section>
            <h2>Recent Posts</h2>
            <ul>
              <li>login to continue!</li>
            </ul>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>Feel free to leave a comment:</p>
            {/* <CommentForm /> */}
          </section>
        </main>
        <aside className="side-container">
          <h2>Check out our delivery status here!</h2>
          <p>This is some content in the side container.</p>
          {
            /* <button>Check Status</button> */
            <div className="buttons-container">
              <CheckStatus />
            </div>
          }
        </aside>
      </div>
      <footer>
        <p>&copy; 2024 DeliveryEase.inc</p>
      </footer>
    </div>
  );
}

function LoginButton() {
  // Handle navigation to the login page
  const handleLogin = () => {
    window.location.href = "/login";
  };

  return (
    <button className="login-button" onClick={handleLogin}>
      Login
    </button>
  );
}
function CheckStatus() {
  // Handle navigation to the login page
  const handleStatus = () => {
    window.location.href = "/statusDelivery";
  };

  return (
    <button className="status-button" onClick={handleStatus}>
      Check Status
    </button>
  );
}

function SignupButton() {
  // Handle navigation to the register page
  const handleSignup = () => {
    window.location.href = "/register";
  };

  return (
    <button className="signup-button" onClick={handleSignup}>
      Sign Up
    </button>
  );
}
export default HomePage;
