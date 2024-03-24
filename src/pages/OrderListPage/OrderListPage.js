import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./OrderListPage.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
const userInfo = JSON.parse(localStorage.getItem("userInfo"));

function LandingPage() {
    const pageNavigation = useNavigate();
    const [employeeId, setEmployeeId] = useState(""); // State for employee ID
    const [deliveryCharges, setDeliveryCharges] = useState("");
    const [user, setUser] = useState({
        username: "", // Initially empty
        userState: "Active", // Default user state for demonstration
    });

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




    // component of using user data
    useEffect(() => {
        // Fetch user info from localStorage or state management
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (userInfo && userInfo.email) {
            setUser({
                ...user,
                username: userInfo.email,
            });
        }
    }, []);
    const [contactMessage, setContactMessage] = useState(""); // State for contact message
  

    //

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
                        <OrdersButton />

                    </div>
                </nav>
            </header>
            <div>
                

                    

                
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
