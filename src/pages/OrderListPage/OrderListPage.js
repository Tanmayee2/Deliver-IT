import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./OrderListPage.scss";
import OrderList from "./OrderList"; // Import the OrderList component
import Button from "react-bootstrap/Button";
import Navbarmain from "../../components/NavBar/Navbarmain";
import imageUrl from "../../assets/order.png";

function OrderListPage() {
  const pageNavigation = useNavigate();
  const [employeeId, setEmployeeId] = useState(""); // State for employee ID
  const [deliveryCharges, setDeliveryCharges] = useState("");
  const [user, setUser] = useState();
  useEffect(() => {
    // Fetch user information from localStorage on component mount
    const userData = localStorage.getItem("userInfo");
    if (userData) {
      const parsedData = JSON.parse(userData);
      console.log("User Data:", parsedData); // Log user data to console
      setUser(parsedData.name); // Set user's name to the state
      // Log each component separately
      console.log("User Name:", parsedData.name);
      console.log("User Email:", parsedData.email);
      console.log("User Role:", parsedData.role);
    }
  }, []);
  useEffect(() => {}, []);

  function ChatLiveButton() {
    const handleChatLive = () => {
      pageNavigation("/ChatPage");
    };

    return (
      <Button className="chat-live-button" onClick={handleChatLive}>
        Chat Live
      </Button>
    );
  }

  // component of using user data

  //
  // Sample data for boxes

  return (
    <div className="homepage">
      <Navbarmain />

      <div>
        {/* Render the OrderList component here */}
        <OrderList />
      </div>
      <footer>
        <p>&copy; 2024 DeliveryEase.inc</p>
      </footer>
      {/* Adding Chat Live Button */}
      <ChatLiveButton />
    </div>
  );
}
export default OrderListPage;
