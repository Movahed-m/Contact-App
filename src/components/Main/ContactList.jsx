import { useState } from "react";
import ContactListItem from "./ContactListItem";
import styles from "../../styles/Main/ContactList.module.css";

const ContactList = ({
  contacts,
  setContacts,
  setSelectedContact,
  setIdOfSelectedContacts,
  idOfSelectedContacts,
}) => {
  const [selected, setSelected] = useState(false);
  const [alert, setAlert] = useState("");
  const [isShow, setIsShow] = useState(false);

  const exitHandler = () => {
    setIsShow(false);
    setSelected(false);
  };

  const selecteHandler = () => {
    if (!contacts.length) {
      setAlert("No contact added yet! Please first add a new contact");
      setTimeout(() => {
        setAlert("");
      }, 2000);
      return;
    }
    setSelected(true);
  };

  const inputHandler = (event) => {
    const inputChecked = event.target.checked;
    const inputId = event.target.dataset.itemId;
    if (inputChecked) {
      setIdOfSelectedContacts(idOfSelectedContacts.add(inputId));
    } else {
      setIdOfSelectedContacts(idOfSelectedContacts.delete(inputId));
    }
  };

  const deleteHandler = () => {
    setContacts((contacts) =>
      contacts.filter((contact) => !idOfSelectedContacts.has(contact.id))
    );
    setAlert("Selected Contacts delete successfully ✔");
    setTimeout(() => {
      setAlert("");
    }, 2000);
    setIsShow(false);
    setSelectedContact(false);
    setSelected(false);
  };

  return (
    <div className={styles["contact-list-container"]}>
      <div className={styles["contact-list-options"]}>
        <button
          onClick={selecteHandler}
          className={selected ? styles["selecte-button"] : styles["button"]}
        >
         Select
        </button>
        <button
          onClick={() => setIsShow(true)}
          className={selected ? styles["delete-button"] : styles["hide"]}
        >
          {selected && "Delete"}
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
              <input
                type="checkbox"
                onClick={inputHandler}
                data-item-id={item.id}
                className={!selected ? styles["hide"] : null}
              />
              <ContactListItem
                contact={item}
                selected={selected}
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
