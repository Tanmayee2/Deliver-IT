
import React, { useState } from 'react'; // Import useState from React

import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './LandingPage.scss';
import Profile from './Profile';
import deliveryImage from '../../images/DeliveryEase.jpeg';
import axios from 'axios';
const userInfo = JSON.parse(localStorage.getItem('userInfo'));


function LandingPage() {
  const [employeeId, setEmployeeId] = useState(""); // State for employee ID

  const [user, setUser] = useState({
    username: 'JohnDoe', // Default username for demonstration
    userState: 'Active' // Default user state for demonstration
  });
  const posts = [
    { imageSrc: "post1-image.jpg", text: "This is the content of post 1." },
    { imageSrc: "post2-image.jpg", text: "This is the content of post 2." },
    { imageSrc: "post3-image.jpg", text: "This is the content of post 3." }
  ];
  const [contactMessage, setContactMessage] = useState(""); // State for contact message

  const handlePostMessage = () => {
    // You can handle posting the contact message here
    console.log("Posting message:", contactMessage);
    // You may want to send this message to your backend or perform any other action
    // Reset the contact message after posting
    setContactMessage("");
  };

  
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to Deliveryease</h1>
        <nav>
          <ul>
            <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
            <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
            <li><ScrollLink to="recent-posts" smooth={true} duration={500}>Recent Posts</ScrollLink></li> {/* New link for recent posts */}
          </ul>
          <div className="buttons-container">
            {/* Pass setUserState and username props to Profile component */}
            <Profile setUserState={setUser} username={user.username} />
          </div>
          <div className="buttons-container">
            <LogoutButton />
            <SignupButton />
          </div>
        </nav>
      </header>
      <div className="main-container">
      <aside className="left-container">
          <h2>wanna search for employee?</h2>
          <div className="employer-buttons">
            <input 
              type="text" 
              placeholder="Employee ID" 
              value={employeeId} 
              onChange={(e) => setEmployeeId(e.target.value)} // Update employeeId state onChange
            />
            <EmployerButton label="Search Employee" employeeId={employeeId} /> {/* Pass employeeId as prop */}
          </div>
        </aside>
        <aside className="right-container">
          <h2>Right Container</h2>
          <p>This is the right container content.</p>
          {/* Add whatever content you need here */}
        </aside>
        
        <main>
          <section id="home">
            <h2>Home</h2>
            <p>This is the home page of the delivery management system. You can find more information about the system here.</p>
            <h3>Package Information:</h3>
            <ul>
              <li>Tracking Number: XYZ123456789</li>
              <li>Estimated Delivery Date: February 28, 2024</li>
              <li>Current Status: Out for Delivery</li>
            </ul>
          </section>
          <section id="about">
            <h2>About</h2>
            <p>This is a delivery Management System that will track the users package</p>
            <p>Hello </p>
          </section>
          <section>
  <h2>Recent Posts</h2>
  <div className="post-container">
    {posts.map((post, index) => (
      <PostContainer
        key={index}
        imageSrc={post.imageSrc}
        text={post.text}
      />
    ))}
  </div>
</section>

          <section id="contact">
            <h2>Contact Us</h2>
            <textarea 
              rows="4" 
              cols="50" 
              value={contactMessage} 
              onChange={(e) => setContactMessage(e.target.value)} 
              placeholder="Type your message here..."
            />
            <button onClick={handlePostMessage}>Post</button>
          </section>
        </main>
      </div>
      <footer>
        <p>&copy; 2024 DeliveryEase.inc</p>
      </footer>
    </div>
  );
}

function LogoutButton() {
  const handleLogin = () => {
    window.location.href = '/login';
  };

  return (
    <button className="login-button" onClick={handleLogin}>
      Log out
    </button>
  );
}

function SignupButton() {
  const handleSignup = () => {
    window.location.href = '/register';
  };

  return (
    <button className="signup-button" onClick={handleSignup}>
      Change Account
    </button>
  );
}

function EmployerButton({ label }) {
  const handleEmployerAction = () => {
    // Define the action you want to perform for each employer button
    console.log(`Performing action for ${label}`);
  };

  return (
    <button className="employer-button" onClick={handleEmployerAction}>
      {label}
    </button>
  );
}
function PostContainer({ imageSrc, text }) {
  return (
    <div className="post">
      <img src={imageSrc} alt="Post" className="post-image" />
      <p className="post-text">{text}</p>
    </div>
  );
}


export default LandingPage;
