import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './HomePage.scss';
import deliveryImage from '../../images/DeliveryEase.jpeg';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink

function HomePage() {
  return (
    <div className="homepage">
      <header>
        {/* <img src={deliveryImage} alt="Delivery" className="logo-image" /> */}
        <h1>Welcome to Deliveryease</h1>
        <nav>
          <ul>
          <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
            <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
          
          </ul>
          <div className="buttons-container">
            <LoginButton />
            <SignupButton />
          </div>
        </nav>
      </header>
      <div className="main-container">
        <main>
        <section id="home"> {/* Add id for scrolling */}
            <h2>Home</h2>
            <p>This is the home page of the delivery management system. 
              You can find more information about the system here. 
            </p>
          </section>
          <section id="about"> {/* Add id for scrolling */}
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

          <section>
            <h2>Contact Us</h2>
            <p>Feel free to leave a comment:</p>
            {/* <CommentForm /> */}
          </section>
        </main>
        <aside className="side-container">
          <h2>Check out our delivery status here!</h2>
          <p>This is some content in the side container.</p>
          {/* <button>Check Status</button> */
          <div className="buttons-container">
            <CheckStatus />
            
            </div>
          }
        </aside>
      </div>
      <footer>
        <p>&copy; 2024 DeliveryEase.inc</p>
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
function CheckStatus() {
  // Handle navigation to the login page
  const handleStatus = () => {
    window.location.href = '/statusDelivery';
  };

  return (
    <button className="status-button" onClick={handleStatus}>
      Check Status
    </button>
  );
}

function SignupButton() {
  // Handle navigation to the register page
  const handleSignup = () => {
    window.location.href = '/register';
  };

  return (
    <button className="signup-button" onClick={handleSignup}>
      Sign Up
    </button>
  );
}

// function CommentForm() {
//   const [subject, setSubject] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Process the comment here
//     console.log('Subject:', subject);
//     console.log('Description:', description);
//     // Clear form fields after submission
//     setSubject('');
//     setDescription('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="subject">Subject:</label>
//         <input
//           type="text"
//           id="subject"
//           value={subject}
//           onChange={(event) => setSubject(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="description">Description:</label>
//         <textarea
//           id="description"
//           value={description}
//           onChange={(event) => setDescription(event.target.value)}
//         />
//       </div>
//       <button type="submit">Leave Comment</button>
//     </form>
//   );
// }

export default HomePage;
