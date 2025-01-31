import styles from "../../styles/Main/ContactListItem.module.css";

const ContactListItem = ({ contact, setSelectedContact, isEditDoing, setAlert }) => {
  const itemHandler = () => {
    if(isEditDoing){
      setAlert({typeOfAlert: "error", description: "You must be end the edit!"})
      return;
    }
    setSelectedContact(contact)}
  return (
    <>
      <li
        onClick={itemHandler}
        className={styles["contact-item"]}
      >
        <img
          src={contact.photo}
          alt="profile photo"
        />
        <span>{contact.name}</span>
        <span>{contact.email}</span>
      </li>
    </>
  );
};

export default ContactListItem;
