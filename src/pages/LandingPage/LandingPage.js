import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";
import useUserContext from "../../UserContext";
import Navbarmain from "../../components/NavBar/Navbarmain";
import backgroundImage from "../../assets/landingPage_bg.jpg";

function LandingPage() {
  const pageNavigation = useNavigate();
  const [deliveryCharges, setDeliveryCharges] = useState("");
  const [range, setRange] = useState(0);
  const [pkgDimensions, setPkgDimension] = useState({
    flagShowDimension: false,
    height: 0,
    width: 0,
    length: 0,
  });
  const userLocalDetails = localStorage.getItem("userDetails");
  const { userDetails, setUserDetails } = useUserContext();
  try {
    const email = userDetails.email;
    console.log(email);
  } catch {
    setUserDetails(JSON.parse(userLocalDetails));
  }

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

  const handlePostMessage = () => {
    console.log("Posting message:", contactMessage);
    setContactMessage("");
  };

  return (
    <>
      {userDetails && (
        <div className="homepage">
          <Navbarmain />
          <div
            style={{
              backgroundImage: `url(${backgroundImage})`,
              width: "100%",
              height: "300px", // Adjust height as needed
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="d-flex flex-column"
          >
            <div className="d-flex flex-row justify-content-evenly">
              {userDetails.role === "Delivery Manager" ? (
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
              ) : (
                <></>
              )}
            </div>

            <div className="d-flex flex-column bg-white bg-opacity-50">
              <Form.Label>
                <h2 className="text-center">
                  Enter the Dimensions of the package
                </h2>
              </Form.Label>
              <InputGroup className="mb-2 ms-5">
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
                  disabled={
                    pkgDimensions.length === 0 ||
                    pkgDimensions.width === 0 ||
                    pkgDimensions.height === 0
                  }
                  onClick={() =>
                    setPkgDimension({
                      ...pkgDimensions,
                      flagShowDimension: true,
                    })
                  }
                >
                  Finalize
                </Button>
                <Button
                  onClick={() => {
                    setPkgDimension({
                      flagShowDimension: false,
                      height: 0,
                      width: 0,
                      length: 0,
                    });
                    setDeliveryCharges("");
                  }}
                  className="btn-secondary"
                >
                  Reset
                </Button>
              </InputGroup>
              {pkgDimensions.flagShowDimension ? (
                <div className="d-flex flex-column ms-5">
                  <Form.Select
                    onChange={
                      (e) => {
                        if (e.target.value === "Select Delivery Type") {
                          setDeliveryCharges("");
                        } else {
                          setDeliveryCharges(e.target.value);
                        }
                      } //diff delivery charges for diff types
                    }
                    className="px-5 w-25"
                    name="delivery-services"
                    id="delivery-services"
                  >
                    <option value={"Select Delivery Type"}>
                      Select Delivery Type
                    </option>
                    {Object.keys(deliveryOptions).map((e) => (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    ))}
                  </Form.Select>

                  <div className="d-flex flex-row justify-content-between">
                    <div>
                      <p className="mt-1">
                        Cost Incurred :{" "}
                        {deliveryCharges.length
                          ? deliveryOptions[deliveryCharges]
                          : ""}
                      </p>
                      <p>
                        {" "}
                        The Dimension of the Package is: Height :{" "}
                        {pkgDimensions.height} Width: {pkgDimensions.width}{" "}
                        Length: {pkgDimensions.width}
                      </p>
                    </div>

                    <Button
                      disabled={!deliveryCharges}
                      style={{ backgroundColor: "#58508d" }}
                      className="h-50 w-25 me-5"
                      onClick={() => pageNavigation("/PaymentPage")}
                    >
                      Pay Now
                    </Button>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>

          <main>
            <section id="home">
              <Alert style={{ backgroundColor: "#ffa600" }}>
                <h2>WHO ARE WE</h2>
                <p>
                  Welcome to our homepage! We are your ultimate solution for
                  seamless delivery management. Whether you're a small business
                  looking to streamline your logistics or a large enterprise
                  seeking to optimize your supply chain, we've got you covered.
                  Our comprehensive platform offers intuitive tools and advanced
                  technologies to help you efficiently manage every aspect of
                  the delivery process. From order scheduling and route
                  optimization to real-time tracking and delivery confirmation,
                  our system empowers you to deliver goods with precision and
                  reliability. Say goodbye to logistical headaches and hello to
                  effortless deliveries with our delivery management system.
                  Explore our website to discover how we can revolutionize your
                  delivery operations today!
                </p>
              </Alert>

              <Alert style={{ backgroundColor: "#ffa600" }}>
                <h3>Package Information:</h3>
                <ul>
                  <li>Tracking Number: XYZ123456789</li>
                  <li>Estimated Delivery Date: February 28, 2024</li>
                  <li>Current Status: Out for Delivery</li>
                </ul>
              </Alert>
            </section>
            <Alert style={{ backgroundColor: "#ffa600" }}>
              <h2>About</h2>
              <p>
                At DeliverEasy, we're passionate about revolutionizing the way
                businesses handle their deliveries. With years of experience in
                logistics and technology, we understand the challenges that come
                with managing complex supply chains. Our mission is to empower
                businesses of all sizes with the tools they need to optimize
                their delivery processes and delight their customers. Built on a
                foundation of innovation and efficiency, our delivery management
                system is designed to streamline every step of the delivery
                journey. From order processing to final destination, our
                platform offers unparalleled visibility and control, allowing
                businesses to make informed decisions and drive greater
                operational success. We believe in the power of technology to
                transform industries, and our team is dedicated to staying at
                the forefront of innovation. With cutting-edge features and
                continuous updates, we're committed to providing our clients
                with the most advanced delivery management solution on the
                market. At DeliverEasy, we're more than just a software provider
                – we're your partner in success. Join us on our journey to
                redefine delivery management and unlock new possibilities for
                your business.
              </p>
            </Alert>
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
          <footer>
            <p>&copy; 2024 DeliveryEase.inc</p>
          </footer>
          {/* Adding Chat Live Button */}
          <ChatLiveButton />
        </div>
      )}
    </>
  );
}
export default LandingPage;
