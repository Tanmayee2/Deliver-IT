import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LandingPage.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { createContext, useContext } from "react";

function LandingPage() {
  const pageNavigation = useNavigate();
  const [employeeId, setEmployeeId] = useState(""); // State for employee ID
  const [deliveryCharges, setDeliveryCharges] = useState("");
  const [range, setRange] = useState(0);
  const user = createContext(null);
  const username = useContext(user);

  const posts = [
    { imageSrc: "post1-image.jpg", text: "This is the content of post 1." },
    { imageSrc: "post2-image.jpg", text: "This is the content of post 2." },
    { imageSrc: "post3-image.jpg", text: "This is the content of post 3." },
  ];

  useEffect(() => {
    // Fetch user information from localStorage on component mount
    const userData = localStorage.getItem("userInfo");
    if (userData) {
      const parsedData = JSON.parse(userData);
      console.log("User Data:", parsedData); // Log user data to console
      //setUser(parsedData.name); // Set user's name to the state
      // Log each component separately
      console.log("User Name:", parsedData.name);
      //setUser(parsedData.firstName); // Set user's name to the state
      // Log each component separately

      console.log("User Name:", userData.name);
      console.log("User Email:", parsedData.email);
      console.log("User Role:", parsedData.role);
    }
  }, []);
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
      <Button
        variant="outline-warning"
        className="chat-live-button"
        onClick={handleChatLive}
      >
        Chat Live
      </Button>
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
      pageNavigation("/Login");
    };

    return (
      <button className="signup-button" onClick={handleSignup}>
        Change Account
      </button>
    );
  }
  function LogoutButton() {
    const logout = () => {
      pageNavigation("/Register");
      localStorage.clear();
      window.location.reload();
    };

    return (
      <button className="login-button" onClick={logout}>
        Log out
      </button>
    );
  }
  function DynamicButton({ userRole }) {
    const buttonText = {
      "Delivery Manager": "Delivery Manager Button",
      "Delivery Driver": "Delivery Driver Button",
      Customer: "Customer Button",
    };

    const handleDynamic = () => {
      // Handle dynamic button functionality
      console.log("Dynamic button clicked");
    };

    return (
      <button className="dynamic-button" onClick={handleDynamic}>
        {buttonText[userRole] || "..."}
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
              <Link href="/LandingPage">HOME</Link>
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
          <p className="ml-3">Welcome {username}!</p>{" "}
          {/* Display user's name or 'Guest' if not available */}
          <div className="buttons-container">
            <LogoutButton></LogoutButton>
            <SignupButton />
            <OrdersButton />
            <DynamicButton userRole={user ? user.role : ""} />{" "}
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

            <div className="w-25">
              {" "}
              <Form.Label>Your Price Limit: $ {range}</Form.Label>
              <Form.Range
                value={range}
                min={0}
                max={200}
                onChange={(e) => setRange(e.currentTarget.value)} //this is only for delivery manager
              />
            </div>

            <></>

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
                  name="ht"
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
            <p> The Dimension of the Package is: Height : Width: Length: </p>
          </aside>
        </div>

        <main>
          <section id="home">
            <h2>Home</h2>
            <p>
              Welcome to our homepage! We are your ultimate solution for
              seamless delivery management. Whether you're a small business
              looking to streamline your logistics or a large enterprise seeking
              to optimize your supply chain, we've got you covered. Our
              comprehensive platform offers intuitive tools and advanced
              technologies to help you efficiently manage every aspect of the
              delivery process. From order scheduling and route optimization to
              real-time tracking and delivery confirmation, our system empowers
              you to deliver goods with precision and reliability. Say goodbye
              to logistical headaches and hello to effortless deliveries with
              our delivery management system. Explore our website to discover
              how we can revolutionize your delivery operations today!
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
