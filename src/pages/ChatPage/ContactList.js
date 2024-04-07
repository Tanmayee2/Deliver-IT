import React, { useState, useEffect } from 'react';

export default function ContactList({ selectedContact, contacts, onSelect }) {
  const [showNewUserForm, setShowNewUserForm] = useState(false);
  const [newUserEmail, setNewUserEmail] = useState('');
  const [updatedContacts, setUpdatedContacts] = useState(contacts);

  useEffect(() => {
    setUpdatedContacts(contacts);
  }, [contacts]);

  const chatObject = {
    timestamp: new Date(),
    messages: [],
    participants: [selectedContact.email, newUserEmail],
  };

  const handleNewUserSave = () => {
    // Assuming contact IDs are unique and generated accordingly
    const newUserId = Date.now().toString(); // Generate a unique ID for the new user
    const newContact = {
      id: newUserId,
      email: newUserEmail,
      chatList: chatObject, // Add email to the new contact
    };

    fetch("http://localhost:8080/addChat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        // Save the new contact to local storage
        const updatedContactsArray = [...updatedContacts, data];
        localStorage.setItem('contacts', JSON.stringify(updatedContactsArray));

        // Trigger onSelect with the new contact
        onSelect(data);

        // Reset the new user form
        setNewUserEmail('');
        setShowNewUserForm(false);
      })
      .catch((error) => {
        console.error('Error adding new contact:', error);
      });
  };

  return (
    <section className="contact-list">
      <ul>
        {updatedContacts.map(contact =>
          <li key={contact.id}>
            <button onClick={() => onSelect(contact)}>
              {contact.email}
            </button>
          </li>
        )}
      </ul>

      {showNewUserForm ? (
        <div>
          <input
            type="email"
            value={newUserEmail}
            onChange={e => setNewUserEmail(e.target.value)}
            placeholder="Enter new user email"
          />
          <button onClick={handleNewUserSave}>Save</button>
        </div>
      ) : (
        <button onClick={() => setShowNewUserForm(true)}>Chat with new user</button>
      )}
    </section>
  );
}
