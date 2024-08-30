import { useState } from "react";

import input from "../../constants/input";
import Message from "./Message";

const Form = ({setShow, contact, setContact }) => {
  const [alert, setAlert] = useState("");

  const formHandler = (event) => {
    event.preventDefault();
    if (!contact.name || !contact.email || !contact.phone) {
      setAlert("Please Inter Valid Data!");
      return;
    }
    setAlert("");
    console.log(contact);
    setContact({
      name: "",
      email: "",
      phone: "",
    });
  };

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  return (
    <>
      <button onClick={() => setShow(false)}>back</button>

      <form onSubmit={formHandler}>
        {input.map((item, index) => (
          <input
            key={index}
            type={item.type}
            name={item.name}
            value={contact[item.name]}
            placeholder={item.placeholder}
            onChange={changeHandler}
          />
        ))}
        <button type="submit">Add Contact</button>
        {alert && <Message message={alert} />}
      </form>
    </>
  );
};

export default Form;
