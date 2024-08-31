import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import input from "../../constants/input";
import styles from "../../styles/Aside-form/Form.module.css";

const Form = ({ setShow, contact, setContact, setContacts, children }) => {
  const [alert, setAlert] = useState("");

  const formHandler = (event) => {
    event.preventDefault();
    if (!contact.name || !contact.email || !contact.phone) {
      setAlert("Please Inter Valid Data!");
      return;
    } else {
      setAlert("Contact Added Sucssessfully");
      setTimeout(() => setAlert(""), 2000);
    }
    setContacts((contacts) => [...contacts, contact]);
    setContact({
      id: "",
      name: "",
      email: "",
      phone: "",
      photo: "../../public/photos/unknown.webp",
    });
  };

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setContact((contact) => ({ ...contact, [name]: value, id: uuidv4() }));
  };

  return (
    <div className={styles["inner-form-container"]}>
      <button
        onClick={() => setShow((show) => ({ ...show, showForm: false }))}
        className={styles["form-button"]}
      >
        back
      </button>

      <form onSubmit={formHandler}>
        {children}
        {input.map((item, index) => (
          <div key={index} className={styles["form-input-container"]}>
            <label htmlFor={item.name}>{item.labelName}</label>
            <input
              type={item.type}
              name={item.name}
              id={item.name}
              value={contact[item.name]}
              placeholder={item.placeholder}
              onChange={changeHandler}
            />
          </div>
        ))}
        <button type="submit">Add Contact</button>
        {alert && (
          <p
            className={
              alert === "Please Inter Valid Data!"
                ? styles["error-message"]
                : styles["sucesses-message"]
            }
          >
            {alert}
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
