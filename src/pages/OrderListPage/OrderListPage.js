import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderListPage.scss";
import OrderList from "./OrderList"; // Import the OrderList component
import Button from "react-bootstrap/Button";
import Navbarmain from "../../components/NavBar/Navbarmain";

function OrderListPage() {
  const pageNavigation = useNavigate();
  useEffect(() => {
    // Fetch user information from localStorage on component mount
    const userData = localStorage.getItem("userInfo");
    if (userData) {
      const parsedData = JSON.parse(userData);
      console.log("User Data:", parsedData); // Log user data to console
      // Log each component separately
      console.log("User Name:", parsedData.name);
      console.log("User Email:", parsedData.email);
      console.log("User Role:", parsedData.role);
    }
  }, []);
  useEffect(() => {}, []);

  function ChatLiveButton() {
    const handleChatLive = () => {
      pageNavigation("/chat");
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
