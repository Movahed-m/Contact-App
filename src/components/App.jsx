import { useState } from "react";
import FormContainer from "./Aside-form/FormContainer";
import Form from "./Aside-form/Form";
import PhotoContainer from "./Aside-form/PhotoContainer";
import Photo from "./Aside-form/Photo";

function App() {
  const [show, setShow] = useState({
    showForm: false,
    showPhoto: false,
  });
  
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    photo: "../../public/photos/unknown.webp",
  });
  
  return (
    <>
      <FormContainer setShow={setShow} show={show}>
        <Form contact={contact} setContact={setContact} setShow={setShow}>
          <PhotoContainer
            photo={contact.photo}
            show={show}
            setShow={setShow}
          >
            <Photo setShow={setShow} setContact={setContact} />
          </PhotoContainer>
        </Form>
      </FormContainer>
    </>
  );
}

export default App;
