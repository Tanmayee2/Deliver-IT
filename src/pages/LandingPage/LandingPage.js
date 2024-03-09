import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import "./LandingPage.scss";
const userInfo = JSON.parse(localStorage.getItem("userInfo"));

function LandingPage() {
  const pageNavigation = useNavigate()
  const [employeeId, setEmployeeId] = useState(""); // State for employee ID
  const [deliveryCharges , setDeliveryCharges] = useState("")
  const [user, setUser] = useState({
    username: "JohnDoe", // Default username for demonstration
    userState: "Active", // Default user state for demonstration
  });
  const posts = [
    { imageSrc: "post1-image.jpg", text: "This is the content of post 1." },
    { imageSrc: "post2-image.jpg", text: "This is the content of post 2." },
    { imageSrc: "post3-image.jpg", text: "This is the content of post 3." },
  ];
  const [contactMessage, setContactMessage] = useState(""); // State for contact message
  const deliveryOptions = {
    "Standard Delivery": "$5.00",
    "Express Delivery": "$7.00",
    "Same-Day Delivery": "$8.00",
    "Custom Delivery": "$9.00",
};
  const handlePostMessage = () => {
    console.log("Posting message:", contactMessage);
    setContactMessage("");
  };
  function SignupButton() {
    const handleSignup = () => {
      pageNavigation("/register");
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
  function LogoutButton() {
    const logout = () => {
      localStorage.clear();
      window.location.reload();
    };
  
    return (
      <button className="login-button" onClick={logout}>
        Log out
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
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to DeliverEasy</h1>
        <nav>
          <ul>
            <li>
              <Link href="HomePage">HOME</Link>
            </li>
            <li>
              <Link href="/About">ABOUT</Link>
            </li>
            <li>
              <Link href="HomePage">CONTACTS</Link>
            </li>
            <li>
              <Link href="HomePage">RECENT POSTS</Link>
            </li>
          </ul>{" "}
          <p className="ml-3">Welcome, {user.username}!</p>
          <div className="buttons-container">
            <LogoutButton></LogoutButton>
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
            <EmployerButton label="Search Employee" employeeId={employeeId} />{" "}
          </div>
        </aside>
        <aside className="right-container">
          <h2>Search for Delivery Services</h2>
          <label for="delivery-services">Delivery Services: </label>
          <select onChange={(e)=>setDeliveryCharges(e.target.value)} name="delivery-services" id="delivery-services">
            {Object.keys(deliveryOptions).map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
          <p className="mt-3">Cost Incurred : {deliveryOptions[deliveryCharges]}</p>
        </aside>

        <main>
          <section id="home">
            <h2>Home</h2>
            <p>
              This is the home page of the delivery management system. You can
              find more information about the system here.
            </p>
            <h3>Package Information:</h3>
            <ul>
              <li>Tracking Number: XYZ123456789</li>
              <li>Estimated Delivery Date: February 28, 2024</li>
              <li>Current Status: Out for Delivery</li>
            </ul>
          </section>
          <section id="about">
            <h2>About</h2>
            <p>
              This is a delivery Management System that will track the users
              package
            </p>
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



export default LandingPage;
