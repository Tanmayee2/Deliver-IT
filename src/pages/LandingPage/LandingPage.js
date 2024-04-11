import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LandingPage.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";
import UserContext from "../../UserContext";

function LandingPage() {
  const pageNavigation = useNavigate();
  const [employeeId, setEmployeeId] = useState(""); // State for employee ID
  const [deliveryCharges, setDeliveryCharges] = useState("");
  const [range, setRange] = useState(0);
  const [pkgDimensions, setPkgDimension] = useState({
    flagShowDimension: false,
    height: 0,
    width: 0,
    length: 0,
  });
  const [userDetails, setUserDetails] = useContext(UserContext);
  console.log(userDetails);
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
          <p className="ml-3">Welcome {userDetails}!</p>{" "}
          {/* Display userDetails's name or 'Guest' if not available */}
          <div className="buttons-container">
            <LogoutButton></LogoutButton>
            <SignupButton />
            <OrdersButton />
            <DynamicButton userRole={userDetails ? userDetails : ""} />{" "}
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
                <Button className=" px-4" label="Search Employee">
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
                  <option key={e} value={e}>
                    {e}
                  </option>
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
                  className="ms-3"
                  value={pkgDimensions.height}
                  onChange={(e) =>
                    setPkgDimension({
                      ...pkgDimensions,
                      height: e.target.value,
                    })
                  }
                  aria-describedby="basic-addon3"
                />
              </InputGroup.Text>{" "}
              <InputGroup.Text>cm</InputGroup.Text>
              <InputGroup.Text id="basic-addon3">
                Width
                <Form.Control
                  type="number"
                  className="ms-3"
                  id="dimension"
                  value={pkgDimensions.width}
                  onChange={(e) =>
                    setPkgDimension({
                      ...pkgDimensions,
                      width: e.target.value,
                    })
                  }
                  aria-describedby="basic-addon3"
                />
              </InputGroup.Text>{" "}
              <InputGroup.Text>cm</InputGroup.Text>
              <InputGroup.Text id="basic-addon3">
                Length
                <Form.Control
                  type="number"
                  id="dimension"
                  className="ms-3"
                  value={pkgDimensions.length}
                  onChange={(e) =>
                    setPkgDimension({
                      ...pkgDimensions,
                      length: e.target.value,
                    })
                  }
                  aria-describedby="basic-addon3"
                />
              </InputGroup.Text>{" "}
              <InputGroup.Text>cm</InputGroup.Text>
              <Button
                onClick={() =>
                  setPkgDimension({ ...pkgDimensions, flagShowDimension: true })
                }
              >
                Finalize
              </Button>
              <Button
                onClick={() =>
                  setPkgDimension({
                    flagShowDimension: false,
                    height: 0,
                    width: 0,
                    length: 0,
                  })
                }
                className="btn-secondary"
              >
                Reset
              </Button>
            </InputGroup>
            {pkgDimensions.flagShowDimension ? (
              <p>
                {" "}
                The Dimension of the Package is: Height : {
                  pkgDimensions.height
                }{" "}
                Width: {pkgDimensions.width} Length: {pkgDimensions.width}
              </p>
            ) : (
              <></>
            )}
          </aside>
        </div>

        <main>
          <section id="home">
            <Alert variant="success">
              <h2>WHO ARE WE</h2>
              <p>
                Welcome to our homepage! We are your ultimate solution for
                seamless delivery management. Whether you're a small business
                looking to streamline your logistics or a large enterprise
                seeking to optimize your supply chain, we've got you covered.
                Our comprehensive platform offers intuitive tools and advanced
                technologies to help you efficiently manage every aspect of the
                delivery process. From order scheduling and route optimization
                to real-time tracking and delivery confirmation, our system
                empowers you to deliver goods with precision and reliability.
                Say goodbye to logistical headaches and hello to effortless
                deliveries with our delivery management system. Explore our
                website to discover how we can revolutionize your delivery
                operations today!
              </p>
            </Alert>

            <Alert variant="primary">
              <h3>Package Information:</h3>
              <ul>
                <li>Tracking Number: XYZ123456789</li>
                <li>Estimated Delivery Date: February 28, 2024</li>
                <li>Current Status: Out for Delivery</li>
              </ul>
            </Alert>
          </section>
          <Alert variant="danger">
            <h2>About</h2>
            <p>
              At DeliverEasy, we're passionate about revolutionizing the way
              businesses handle their deliveries. With years of experience in
              logistics and technology, we understand the challenges that come
              with managing complex supply chains. Our mission is to empower
              businesses of all sizes with the tools they need to optimize their
              delivery processes and delight their customers. Built on a
              foundation of innovation and efficiency, our delivery management
              system is designed to streamline every step of the delivery
              journey. From order processing to final destination, our platform
              offers unparalleled visibility and control, allowing businesses to
              make informed decisions and drive greater operational success. We
              believe in the power of technology to transform industries, and
              our team is dedicated to staying at the forefront of innovation.
              With cutting-edge features and continuous updates, we're committed
              to providing our clients with the most advanced delivery
              management solution on the market. At DeliverEasy, we're more than
              just a software provider – we're your partner in success. Join us
              on our journey to redefine delivery management and unlock new
              possibilities for your business.
            </p>
          </Alert>

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
