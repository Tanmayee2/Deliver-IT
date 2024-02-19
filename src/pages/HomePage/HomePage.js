import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './HomePage.scss';

function HomePage() {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to Deliveryease</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <LoginButton />
          <SignupButton />
        </nav>
      </header>
      <div className="main-container">
        <main>
          <section>
            <h2>About</h2>
            <p>This is a delivery Management System that will track the users package</p>
          </section>
          <section>
            <h2>Recent Posts</h2>
            <ul>
              <li>Post 1</li>
              <li>Post 2</li>
              <li>Post 3</li>
            </ul>
          </section>
        </main>
        <aside className="side-container">
          <h2>Check out our delivery status here!</h2>
          <p>This is some content in the side container.</p>
          <button>Check Status</button>
          
        </aside>
      </div>
      <footer>
        <p>&copy; 2024 Your Website</p>
      </footer>
    </div>
  );
}



function LoginButton() {
  // Handle navigation to the login page
  const handleLogin = () => {

    window.location.href = '/login';
  };

  return (
    <button className="login-button" onClick={handleLogin}>
      Login
    </button>
  );
}
function SignupButton() {
  // Handle navigation to the login page
  const handleLogin = () => {

    window.location.href = '/register';
  };

  return (
    <button className="login-button" onClick={handleLogin}>
      Sign Up
    </button>
  );
}


export default HomePage;
