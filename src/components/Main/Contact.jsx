import { useState } from "react";
import styles from "../../styles/Main/Contact.module.css";

const Contact = (props) => {
  const { selectedContact, setContacts, contacts, setAlert } = props;

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

  const copyHandler = (event) => {
    window.navigator.clipboard.writeText(event.target.innerText);
    setAlert({ typeOfAlert: "success", description: "Copy into Clipboard ✔" });
  };

  return (
    <>
      {isContactShow && (
        <div className={styles["contact-information-container"]}>
          <img src={photo} style={{ width: "50px" }} />
          <h3>{name}</h3>
          <span onClick={copyHandler}>{email}</span>
          <span onClick={copyHandler}>{phone}</span>
          <div>
            <div>
              <button onClick={() => setIsShow(true)}>Delete Contact</button>
              <button>Edit</button>
            </div>
            {isShow && (
              <div>
                <p>Are You want to delete the Contact?</p>
                <button onClick={deleteHandler}>Yes</button>
                <button onClick={() => setIsShow(false)}>No</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
