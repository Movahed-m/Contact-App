import { useState } from "react";
import ContactListItem from "./ContactListItem";
import styles from "../../styles/Main/ContactList.module.css";

const ContactList = (props) => {
  const {
    contacts,
    setContacts,
    setSelectedContact,
    setIdOfSelectedContacts,
    idOfSelectedContacts,
    setAlert,
    isEditDoing,
  } = props;

  const [selected, setSelected] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const exitHandler = () => {
    setIsShow(false);
    setSelected(false);
  };

  const selecteHandler = () => {
    if (!contacts.length) {
      setAlert({
        typeOfAlert: "error",
        description: "No contact added yet! Please first add a new contact",
      });
      return;
    }
    setSelected(selected => !selected);
  };

  const deleteButtonHandler = () => {
    !idOfSelectedContacts.size
      ? setAlert({
          typeOfAlert: "error",
          description: "You must be select a Contact at first!",
        })
      : setIsShow(true);
  };

  const inputHandler = (event) => {
    const inputChecked = event.target.checked;
    const inputId = event.target.dataset.itemId;
    const newSet= new Set(idOfSelectedContacts)
    if (inputChecked) {
      newSet.add(inputId);
    } else {
      newSet.delete(inputId);
    }
    setIdOfSelectedContacts(newSet)
  };

  const deleteHandler = () => {
    setContacts((contacts) =>
      contacts.filter((contact) => !idOfSelectedContacts.has(contact.id))
    );
    setAlert({
      typeOfAlert: "success",
      description: "Selected Contacts delete successfully ✔",
    });
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
          onClick={deleteButtonHandler}
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
      </div>
      <ul className={!contacts.length ? styles["hide-scroll"]: styles["list-container"]}>
        {contacts &&
          contacts.map((item) => (
            <div key={item.id}>
              <ContactListItem
                contact={item}
                selected={selected}
                setSelectedContact={setSelectedContact}
                isEditDoing={isEditDoing}
                setAlert={setAlert}
              />
              <input
                type="checkbox"
                onClick={inputHandler}
                data-item-id={item.id}
                className={!selected ? styles["hide"] : null}
              />
            </div>
          ))}
        <p>{!contacts.length && "No Contact Added Yet"}</p>
      </ul>
    </div>
  );
};

export default ContactList;
