import React, { useState } from 'react';
import axios from 'axios';

function LandingPageExportData() {
  const [formData, setFormData] = useState({
    // Initialize formData state with your desired form fields
    name: '',
    email: '',
    message: ''
  });

  // Function to handle form input changes
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = async event => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      // Make an HTTP POST request to the server with formData
      const response = await axios.post('/api/data', formData);

      // Handle successful response from the server (if needed)
      console.log('Response from server:', response.data);
      
      // Reset the form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      // Handle errors (if any)
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="landing-page">
      <h1>Welcome to the Landing Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LandingPageExportData;
