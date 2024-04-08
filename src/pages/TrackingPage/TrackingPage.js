import React, { useState, useEffect } from 'react';
import './tracking.css'; // Import the CSS file
import upsLogo from '../../assets/images/ups-logo-0.png';
import fedexLogo from '../../assets/images/fedex-logo.png';

const TrackingPage = () => {
 const [trackingNumber, setTrackingNumber] = useState('');
 const [status, setStatus] = useState('');

 const handleInputChange = (event) => {
    setTrackingNumber(event.target.value);
 };

 const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Replace the URL with the actual endpoint of your backend server
      const response = await fetch(`http://localhost:8080/track/${trackingNumber}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setStatus(data.status);
    } catch (error) {
      console.error('Error fetching tracking status:', error);
      setStatus('Error fetching tracking status');
    }
 };

 useEffect(() => {
    const trackButton = document.querySelector('.track-button');
    if (trackingNumber) {
      trackButton.classList.add('active');
    } else {
      trackButton.classList.remove('active');
    }
 }, [trackingNumber]); // Dependency array includes trackingNumber

 return (
    <div>
      <h2>Track your package</h2> {/* Updated text */}
      <form onSubmit={handleSubmit}>
        <label>
          Tracking Number:
          <input
            type="text"
            value={trackingNumber}
            onChange={handleInputChange}
            className="tracking-input"
            required
          />
        </label>
        <button type="submit" className="track-button">TRACK</button>
      </form>
      {status && <p>Status: {status}</p>}
      <div className="tracking-link"> {/* Container for FedEx and UPS buttons */}
        <a href="https://www.ups.com/track?loc=en_US" target="_blank" rel="noopener noreferrer">
          <button>
            <img src={upsLogo} alt="UPS Logo" className="logo" />
            Track UPS Package
          </button>
        </a>
        <a href="https://www.fedex.com/en-us/tracking.html" target="_blank" rel="noopener noreferrer">
          <button>
            <img src={fedexLogo} alt="FedEx Logo" className="logo" />
            Track FedEx Package
          </button>
        </a>
      </div>
    </div>
 );
};

export default TrackingPage;
