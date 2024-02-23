import React, { useState, useEffect } from 'react';
import axios from 'axios';


// Inside the ul element, we use curly braces {} to embed JavaScript code.
// We use the map function to iterate over the data array.
// For each item in the data array, we render a <li> element with the title property of that item as its content.
// We use the key prop with the value of item._id to ensure each rendered li element has a unique identifier.
// This will render a list of <li> elements, each containing the title of an item fetched from the server.
function LoggedInUserInfo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Define a function to fetch data
    const fetchData = async () => {
      try {
        // Make an HTTP GET request to fetch data from the server
        const response = await axios.get('/api/data');

        // Set the fetched data in the component state
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // Cleanup function (optional)
    return () => {
      // Cleanup code (if needed)
    };
  }, []); // Run the effect only once on component mount

  return (
    <div>
      <h1>userinfo</h1>
      {/* Display fetched data */}
      <ul>
        {data.map(item => (
          <li key={item._id}>{item.username}{item.user_id}{item.username}{item.delivery_package_status}</li>
        ))}
      </ul>
    </div>
  );
}

export default LoggedInUserInfo;
