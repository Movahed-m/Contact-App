import styles from "../../styles/Main/ContactListItem.module.css";

const ContactListItem = ({ contact, setSelectedContact }) => {
  return (
    <>
      <li
        onClick={() => setSelectedContact(contact)}
        className={styles["contact-item"]}
      >
        <img
          src={contact.photo}
          alt="profile photo"
          style={{ width: "50px" }}
        />
        <span>{contact.name}</span>
        <span>{contact.email}</span>
      </li>
    </>
  );
};

export default ContactListItem;
