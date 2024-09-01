const ContactListItem = ({ contact, setSelectedContact }) => {
  return (
    <>
      <li onClick={() => setSelectedContact(contact)}>
        <img
          src={contact.photo}
          alt="profile photo"
          style={{ width: "50px" }}
        />
        <span>{contact.name}</span>
        <span>{contact.email}</span>
        <span>{contact.phone}</span>
      </li>
    </>
  );
};

export default ContactListItem;
