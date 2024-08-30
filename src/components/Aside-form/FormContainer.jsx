import { useState } from "react";
import Form from "./Form";

const FormContainer = ({ contact, setContact }) => {
  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow(true);
  };
  return (
    <>
      <div>
        <h3>Add New Contact</h3>
        <button onClick={showHandler}>+</button>
      </div>
      {show && (
        <Form
          setShow={setShow}
          contact={contact}
          setContact={setContact}
        />
      )}
    </>
  );
};

export default FormContainer;
