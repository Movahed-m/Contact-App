import { useState } from "react";
import FormContainer from "./Aside-form/FormContainer";

function App() {
  const [contact, setContact] = useState({
    name:"",
    email:"",
    phone:""
  });
  return (
    <>
      <FormContainer contact={contact} setContact={setContact}/>
    </>
  );
}

export default App;
