import { useState } from "react";

const EditComponent = (props) => {
    const {selectedContact, setSelectedContact, setContacts, newContact, setNewContact, setIsEditDoing} = props;
    const {id, name, email, phone, photo}= selectedContact;
    const [isChange, setIsChange]= useState(false)

    const inputHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value
        setSelectedContact(selectedContact => ({...selectedContact, [name]: [value]}));
        setNewContact({...selectedContact,[name]: [value]})
        setIsChange(true)
    }

    const cancelHandler= () => setIsEditDoing(false)

    const formHandler = (event) => {
     event.preventDefault();
     setContacts(contacts => contacts.filter(contact => contact.id!==id))
     setContacts(contacts => [...contacts, newContact])
     setIsEditDoing(false);
    }
  return (
    <form onSubmit={formHandler}>
        <img src={photo} alt="profile photo" style={{width: "20px"}}/>
        <label htmlFor="name">FullName:</label>
        <input type="text" name="name" id="name" defaultValue={name} onChange={inputHandler}/>
        <label htmlFor="email">Email:</label>
        <input type="email" email="email" id="email" defaultValue={email} onChange={inputHandler}/>
        <label htmlFor="phone">Phone:</label>
        <input type="number" phone="phone" id="phone" defaultValue={phone} onChange={inputHandler}/>
        {isChange && <button type="submit">Done</button>}
        <button type="button" onClick={cancelHandler}>Cancel</button>
    </form>
  )
}

export default EditComponent