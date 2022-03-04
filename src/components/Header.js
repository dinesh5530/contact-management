import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

const Header = () => {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []); 

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>Contact Form and Contact List page</h2>
      </div>
      
    </div>
    <div className="row" style={{paddingTop:"60px"}}>
    
      <AddContact addContactHandler={addContactHandler} />
      </div>
      <div className="row">
        <h1>My Contacts</h1>
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
      </div>
    </div>
  );
};

export default Header;
