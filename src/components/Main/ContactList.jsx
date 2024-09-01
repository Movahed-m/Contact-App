import { useState } from "react";
import ContactListItem from "./ContactListItem";

const ContactList = ({ contacts, setContacts, setSelectedContact}) => {
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
    setIsShow(false);
  };

  return (
    <div>
      <div>
        <button onClick={() => setSelecteAll(true)}>
          {selecteAll ? "Selected" : "Selecte All"}
        </button>
        <button onClick={() => setIsShow(true)}>
          {selecteAll && "Delete All"}
        </button>
        {isShow && (
          <div>
            <p>Are you want to delete all contacts?</p>
            <button onClick={deleteHandler}>Yes</button>
            <button onClick={exitHandler}>No</button>
          </div>
        )}
        <p>{alert && alert}</p>
      </div>
      <ul>
        {contacts &&
          contacts.map((item) => (
            <div key={item.id}>
              <input type="checkbox" checked={selecteAll} />
              <ContactListItem contact={item} selecteAll={selecteAll} setSelectedContact={setSelectedContact}/>
            </div>
          ))}
      </ul>
      <p>{!contacts.length && "No Contact Added Yet"}</p>
    </div>
  );
};

export default ContactList;
