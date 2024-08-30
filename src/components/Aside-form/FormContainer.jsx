import styles from "../../styles/Aside-form/FormContainer.module.css";

const FormContainer = ({ show: { showForm }, setShow, children }) => {
  const showHandler = () => {
    setShow((show) => ({ ...show, showForm: true }));
  };
  return (
    <>
      <div className={styles["form-container"]}>
        <h3>Add New Contact</h3>
        <button onClick={showHandler}>+</button>
      </div>
      {showForm && children}
    </>
  );
};

export default FormContainer;
