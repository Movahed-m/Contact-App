const ContactListItem = ({ contact, setSelectedContact }) => {
  return (
    <>
      <li onClick={() => setSelectedContact(contact)}>
        <img
          src={contact.photo}
          alt="profile photo"
          style={{ width: "50px" }}
        />
        <div>
          <span>{contact.name}</span>
          <span>{contact.email}</span>
        </div>
      </li>
    </>
  );
};

export default ContactListItem;
