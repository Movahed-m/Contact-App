import { useState } from "react";
import ContactListItem from "./ContactListItem";
import styles from "../../styles/Main/ContactList.module.css";

const ContactList = ({ contacts, setContacts, setSelectedContact }) => {
  const [selecteAll, setSelecteAll] = useState(false);
  const [alert, setAlert] = useState("");
  const [isShow, setIsShow] = useState(false);

  const exitHandler = () => {
    setIsShow(false);
    setSelecteAll(false);
  };

  const deleteHandler = () => {
    setContacts([]);
    setAlert("All Contacts delete successfully ✔");
    setTimeout(() => {
      setAlert("");
    }, 2000);
    setIsShow(false);
    setSelectedContact(false)
  };

  return (
    <div className={styles["contact-list-container"]}>
      <div className={styles["contact-list-options"]}>
        <button
          onClick={() => setSelecteAll(true)}
          className={selecteAll ? styles["selecte-button"] : styles["button"]}
        >
          {selecteAll ? "Selected" : "Selecte All"}
        </button>
        <button
          onClick={() => setIsShow(true)}
          className={selecteAll ? styles["delete-button"] : styles["hide"]}
        >
          {selecteAll && "Delete All"}
        </button>
        {isShow && (
          <div className={styles["modal-container"]}>
            <p>Are you want to delete all contacts?</p>
            <div>
              <button onClick={deleteHandler}>Yes</button>
              <button onClick={exitHandler}>No</button>
            </div>
          </div>
        )}
        <p className={alert ? styles["delete-message"] : styles["hide"]}>
          {alert && alert}
        </p>
      </div>
      <ul>
        {contacts &&
          contacts.map((item) => (
            <div key={item.id}>
              <input type="checkbox" checked={selecteAll} />
              <ContactListItem
                contact={item}
                selecteAll={selecteAll}
                setSelectedContact={setSelectedContact}
              />
            </div>
          ))}
        <p>{!contacts.length && "No Contact Added Yet"}</p>
      </ul>
    </div>
  );
};

export default ContactList;
