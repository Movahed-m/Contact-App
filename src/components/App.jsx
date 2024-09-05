import { useState } from "react";
import FormContainer from "./Aside-form/FormContainer";
import Form from "./Aside-form/Form";
import PhotoContainer from "./Aside-form/PhotoContainer";
import Photo from "./Aside-form/Photo";
import styles from "../styles/App.module.css";
import MainContainer from "./Main/MainContainer";
import ContactList from "./Main/ContactList";
import Contact from "./Main/Contact";
import Message from "./Message";
import EditComponent from "./Main/EditComponent";
import ContactListItem from "./Main/ContactListItem";

function App() {
  const [show, setShow] = useState({
    showForm: false,
    showPhoto: false,
  });
  const [contact, setContact] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    photo: "../../public/photos/unknown.webp",
  });
  const [contacts, setContacts] = useState([]);
  const [searchedContacts, setSearchedContacts] = useState([...contacts]);
  const [isSearch, setIsSearch] = useState(false);
  const [selectedContact, setSelectedContact] = useState("");
  const [idOfSelectedContacts, setIdOfSelectedContacts] = useState(new Set());
  const [alert, setAlert] = useState({
    typeOfAlert: "",
    description: "",
  });
  const[isEditDoing, setIsEditDoing]= useState(false);
  const [newContact, setNewContact] = useState({
    id:"",
    name:"",
    email:"",
    phone:"",
    photo:"",
  })

  return (
    <div className={styles["container"]}>
      <FormContainer setShow={setShow} show={show}>
        <Form
          contact={contact}
          setContact={setContact}
          setShow={setShow}
          setContacts={setContacts}
          alert={alert}
          setAlert={setAlert}
        >
          <PhotoContainer photo={contact.photo} show={show} setShow={setShow}>
            <Photo setShow={setShow} setContact={setContact} />
          </PhotoContainer>
        </Form>
      </FormContainer>
      <MainContainer
        setSearchedContacts={setSearchedContacts}
        contacts={contacts}
        setIsSearch={setIsSearch}
      >
        <ContactList
          contacts={!isSearch ? contacts : searchedContacts}
          setContacts={setContacts}
          setSelectedContact={setSelectedContact}
          idOfSelectedContacts={idOfSelectedContacts}
          setIdOfSelectedContacts={setIdOfSelectedContacts}
          setAlert={setAlert}
          isEditDoing={isEditDoing}
        />
        {selectedContact && (
          <Contact
            selectedContact={selectedContact}
            setContacts={setContacts}
            contacts={contacts}
            setAlert={setAlert}
            setIsEditDoing={setIsEditDoing}
            isEditDoing={isEditDoing}
          >
            <EditComponent
              selectedContact={selectedContact}
              setSelectedContact={setSelectedContact}
              setContacts={setContacts}
              newContact={newContact}
              setNewContact={setNewContact}
              setIsEditDoing={setIsEditDoing}
            />
          </Contact>
        )}
      </MainContainer>
      <Message alert={alert} setAlert={setAlert} />
    </div>
  );
}

export default App;
