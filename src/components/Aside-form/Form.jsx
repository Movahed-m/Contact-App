import { v4 as uuidv4 } from "uuid";

import input from "../../constants/input";
import styles from "../../styles/Aside-form/Form.module.css";

const Form = ({ setShow, contact, setContact, setContacts, children , setAlert}) => {

  const formHandler = (event) => {
    event.preventDefault();
    if (!contact.name || !contact.email || !contact.phone) {
      setAlert({
        typeOfAlert : "error", 
        description: "Pleade inter valid data !"});
      return;
    } else {
      setAlert({
        typeOfAlert : "success", 
        description: "New Contact added successfully ✔"});
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
      </form>
    </div>
  );
};

export default Form;
