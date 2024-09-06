import { useState } from "react";
import styles from "../../styles/Main/Contact.module.css";

const Contact = (props) => {
  const { selectedContact, setContacts, contacts, setAlert, children, setIsEditDoing, isEditDoing } = props;

  const [isShow, setIsShow] = useState(false);
  const [isContactShow, setIsContactShow] = useState(true);

  const { name, email, phone, photo } = selectedContact;

  const deleteHandler = () => {
    setContacts(contacts.filter((item) => item !== selectedContact));
    setAlert({
      typeOfAlert: "success",
      description: "Contact deleted successfully ✔",
    });
    setIsShow(false);
    setIsContactShow(false);
    setSele;
  };

  const editHandler = () => {
    setIsEditDoing(true)
  }

  const copyHandler = (event) => {
    window.navigator.clipboard.writeText(event.target.innerText);
    setAlert({ typeOfAlert: "success", description: "Copy into Clipboard ✔" });
  };

  return (
    <>
      {isContactShow && (
        <div className={styles["contact-information-container"]}>
          <img src={photo}/>
          <h3>{name}</h3>
          <span onClick={copyHandler}>Email: {email}</span>
          <span onClick={copyHandler}>Phone Number: {phone}</span>
          <div className={styles["option-container"]}>
            <button onClick={() => setIsShow(true)}>Delete</button>
            <button onClick={editHandler}>Edit</button>
          </div>
          {isShow && (
            <div className={styles["modal-container"]}>
              <p>Are You want to delete the Contact?</p>
              <div>
              <button onClick={deleteHandler}>Yes</button>
              <button onClick={() => setIsShow(false)}>No</button>
              </div>
            </div>
          )}
          {isEditDoing && children}
        </div>
      )}
    </>
  );
};

export default Contact;
