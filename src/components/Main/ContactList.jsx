import ContactListItem from "./ContactListItem";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map((item) => (
          <ContactListItem  key={item.id} contact={item}/>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
