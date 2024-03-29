import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LandingPage.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function LandingPage() {
  const pageNavigation = useNavigate();
  const [employeeId, setEmployeeId] = useState(""); // State for employee ID
  const [deliveryCharges, setDeliveryCharges] = useState("");
  const [range, setRange] = useState(0);
  const [user, setUser] = useState();

  const posts = [
    { imageSrc: "post1-image.jpg", text: "This is the content of post 1." },
    { imageSrc: "post2-image.jpg", text: "This is the content of post 2." },
    { imageSrc: "post3-image.jpg", text: "This is the content of post 3." },
  ];

  // ...existing code...

  useEffect(() => {}, []);
  const [contactMessage, setContactMessage] = useState(""); // State for contact message
  const deliveryOptions = {
    "Standard Delivery": "$5.00",
    "Express Delivery": "$7.00",
    "Same-Day Delivery": "$8.00",
    "Custom Delivery": "$9.00",
  };
  function ChatLiveButton() {
    const handleChatLive = () => {
      pageNavigation("/ChatPage");
    };

    return (
      <button className="chat-live-button" onClick={handleChatLive}>
        Chat Live
      </button>
    );
  }
  function OrdersButton() {
    const handleChatLive = () => {
      pageNavigation("/OrderListPage");
    };

    return (
      <button className="order-list-page" onClick={handleChatLive}>
        Recent Orders
      </button>
    );
  }

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
          <p className="ml-3">Welcome, {user}!</p>
          <div className="buttons-container">
            <LogoutButton></LogoutButton>
            <SignupButton />
            <OrdersButton />
          </div>
        </nav>
      </header>
      <div>
        <div className="d-flex flex-column mt-4">
          <div className="d-flex flex-row justify-content-evenly">
            <div className="employer-buttons">
              <InputGroup className="ms-3 mt-3">
                {" "}
                <Form.Control
                  type="text"
                  placeholder="Search by Employee ID"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)} // Update employeeId state onChange
                />
                <Button
                  className=" px-4"
                  label="Search Employee"
                  employeeId={employeeId}
                >
                  Search
                </Button>
              </InputGroup>
            </div>
            {user === "Delivery Manager" ? (
              <div className="w-25">
                {" "}
                <Form.Label>Your Price Limit {range}</Form.Label>
                <Form.Range
                  value={range}
                  min={0}
                  max={200}
                  onChange={(e) => setRange(e.currentTarget.value)} //this is only for delivery manager
                />
              </div>
            ) : (
              <></>
            )}
            <div>
              <Form.Select
                onChange={(e) => setDeliveryCharges(e.target.value)} //diff delivery charges for diff types
                className="px-5"
                name="delivery-services"
                id="delivery-services"
              >
                <option>Select Delivery Type</option>
                {Object.keys(deliveryOptions).map((e) => (
                  <option value={e}>{e}</option>
                ))}
              </Form.Select>
              <p className="mt-1">
                Cost Incurred : {deliveryOptions[deliveryCharges]}
              </p>
            </div>
          </div>

          <aside className="dimensions">
            <Form.Label>
              <h2>Enter the Dimensions of the package</h2>
            </Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">
                Height
                <Form.Control
                  type="number"
                  id="dimension"
                  aria-describedby="basic-addon3"
                />
              </InputGroup.Text>{" "}
              <InputGroup.Text>cm</InputGroup.Text>
              <InputGroup.Text id="basic-addon3">
                Width
                <Form.Control
                  type="number"
                  id="dimension"
                  aria-describedby="basic-addon3"
                />
              </InputGroup.Text>{" "}
              <InputGroup.Text>cm</InputGroup.Text>
              <InputGroup.Text id="basic-addon3">
                Length
                <Form.Control
                  type="number"
                  id="dimension"
                  aria-describedby="basic-addon3"
                />
              </InputGroup.Text>{" "}
              <InputGroup.Text>cm</InputGroup.Text>
            </InputGroup>
          </aside>
        </div>

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
          <h2>About</h2>
          <p>
            This is a delivery Management System that will track the users
            package
          </p>
          <p>Hello </p>
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
          <h2>Contact Us</h2>
          <textarea
            rows="4"
            cols="50"
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
            placeholder="Type your message here..."
          />
          <Button className="" onClick={handlePostMessage}>
            Post
          </Button>
        </main>
      </div>
      <footer>
        <p>&copy; 2024 DeliveryEase.inc</p>
      </footer>
      {/* Adding Chat Live Button */}
      <ChatLiveButton />
    </div>
  );
}
export default LandingPage;
