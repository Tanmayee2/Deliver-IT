import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './HomePage.scss';

function HomePage() {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to My Website</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <LoginButton />
        </nav>
      </header>
      <div className="main-container">
        <main>
          <section>
            <h2>Featured Content</h2>
            <p>This is where your featured content goes.</p>
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
          <h2>Side Container</h2>
          <p>This is some content in the side container.</p>
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
    // Perform any login-related logic here if needed

    // Navigate to the login page
    // Assuming the login page route is '/login'
    // Replace '/login' with the actual route to your login page
    window.location.href = '/login';
  };

  return (
    <button className="login-button" onClick={handleLogin}>
      Login
    </button>
  );
}


export default HomePage;
