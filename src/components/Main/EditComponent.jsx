import { useState } from "react";

import styles from "../../styles/Main/EditComponent.module.css"

const EditComponent = (props) => {
    const {selectedContact, setSelectedContact, setContacts, newContact, setNewContact, setIsEditDoing, setAlert} = props;
    const {id, name, email, phone, photo}= selectedContact;
    const [isChange, setIsChange]= useState(false)

    const inputHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        console.log(name)
        setSelectedContact(selectedContact => ({...selectedContact, [name]: [value]}));
        setNewContact({...selectedContact,[name]: [value]});
        setIsChange(true);
    }

    const cancelHandler= () => setIsEditDoing(false)

    const formHandler = (event) => {
     event.preventDefault();
     setContacts(contacts => contacts.filter(contact => contact.id!==id))
     setContacts(contacts => [...contacts, newContact])
     setIsEditDoing(false);
     setAlert({typeOfAlert: "success", description: "Contact Edit is successfully done ✔"})
    }
  return (
    <form onSubmit={formHandler} className={styles["form-container"]}>
        <img src={photo} alt="profile photo"/>
        <label htmlFor="editName">FullName:</label>
        <input type="text" name="name" id="editName" defaultValue={name} onChange={inputHandler}/>
        <label htmlFor="editEmail">Email:</label>
        <input type="email" name="email" id="editEmail" defaultValue={email} onChange={inputHandler}/>
        <label htmlFor="editPhone">Phone:</label>
        <input type="number" name="phone" id="editPhone" defaultValue={phone} onChange={inputHandler}/>
        <div>
        {isChange && <button type="submit">Done</button>}
        <button type="button" onClick={cancelHandler}>Cancel</button>
        </div>
    </form>
  )
}

export default EditComponent