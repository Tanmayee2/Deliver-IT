import React, { useState } from 'react';

export default function ContactList({ selectedContact, contacts, onSelect }) {
  const [showNewUserForm, setShowNewUserForm] = useState(false);
  const [newUserName, setNewUserName] = useState('');

  const handleNewUserSave = () => {
    // Assuming contact IDs are unique and generated accordingly
    const newUserId = Date.now().toString(); // Generate a unique ID for the new user
    const newContact = {
      id: newUserId,
      name: newUserName
    };

    // Save the new contact to local storage
    const updatedContacts = [...contacts, newContact];
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));

    // Trigger onSelect with the new contact
    onSelect(newContact);

    // Reset the new user form
    setNewUserName('');
    setShowNewUserForm(false);
  };

  return (
    <section className="contact-list">
      <ul>
        {contacts.map(contact =>
          <li key={contact.id}>
            <button onClick={() => onSelect(contact)}>
              {contact.name}
            </button>
          </li>
        )}
      </ul>

      {showNewUserForm ? (
        <div>
          <input
            type="text"
            value={newUserName}
            onChange={e => setNewUserName(e.target.value)}
            placeholder="Enter new user name"
          />
          <button onClick={handleNewUserSave}>Save</button>
        </div>
      ) : (
        <button onClick={() => setShowNewUserForm(true)}>Chat with new user</button>
      )}
    </section>
  );
}
