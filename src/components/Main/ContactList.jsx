import { useState } from "react";
import ContactListItem from "./ContactListItem";

const ContactList = ({ contacts }) => {
  const [selecteAll, setSelecteAll] = useState(false);

  const selecteHandler = () => setSelecteAll((selecteAll) => !selecteAll);
  const deleteHandler = () => {}

  return (
    <div>
      <div>
        <button onClick={selecteHandler}>
          {selecteAll ? "Selected" : "Selecte All"}
        </button>
        <button onClick={deleteHandler}>{selecteAll && "Delete All"}</button>
      </div>
      <ul>
        {contacts.map((item) => (
          <ContactListItem
            key={item.id}
            contact={item}
            selecteAll={selecteAll}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
