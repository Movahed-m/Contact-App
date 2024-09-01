import { useState } from "react";

const Contact = ({ selectedContact, setContacts , contacts}) => {
  const [isShow, setIsShow] = useState(false)
  const [isContactShow, setIsContactShow] = useState(true)

  const { name, email, phone, photo } = selectedContact;
const deleteHandler = () => {
    setContacts(contacts.filter(item => item !== selectedContact))
    setIsShow(false)
    setIsContactShow(false)
}

  return (
    <>
    {isContactShow && <div>
      <img src={photo} style={{width: "50px"}}/>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <div>
        <button onClick={() => setIsShow(true)}>Delete Contact</button>
        <button>Edit</button>
      </div>
    </div>}
    {isShow && 
    <div>
        <p>Are You want to delete the Contact?</p>
        <button onClick={deleteHandler}>Yes</button>
        <button onClick={()=> setIsShow(false)}>No</button>
    </div>
    }
    </>
  );
};

export default Contact;
