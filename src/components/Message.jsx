import styles from "../styles/Message.module.css";

const Message = ({ alert, setAlert }) => {
  const alertHandler = () =>
    alert.description &&
    setTimeout(() => setAlert({ typeOfAlert: "", description: "" }), 2000);
  alertHandler();

  return (alert.description && <p className={alert.typeOfAlert === "success" ? styles["success"] : styles["error"]}>{alert.description}</p>);
};

export default Message;
