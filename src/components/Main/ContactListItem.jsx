import { useState } from "react";

const ContactListItem = ({ contact, setSelectedContact }) => {
  const [copyText, setCopyText] = useState("");
  const [copyAlert, setCopyAlert] = useState("");

  const copyHandler = (event) => {
    setCopyText(event.target.innerText);
    window.navigator.clipboard.writeText(copyText);
    setCopyAlert("Copy into Clipboard ✔");
    setTimeout(() => {
      setCopyAlert(false);
    }, 2000);
  };

  return (
    <>
      <li onClick={() => (setSelectedContact(contact))}>
        <img
          src={contact.photo}
          alt="profile photo"
          style={{ width: "50px" }}
        />
        <span>{contact.name}</span>
        <span onClick={copyHandler}>{contact.email}</span>
        <span onClick={copyHandler}>{contact.phone}</span>
      </li>
      <p>{copyAlert}</p>
    </>
  );
};

export default ContactListItem;
