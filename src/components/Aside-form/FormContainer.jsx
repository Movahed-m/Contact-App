import styles from "../../styles/Aside-form/FormContainer.module.css";

const FormContainer = (props) => {
  const { show: { showForm }, setShow, children } = props;

  const showHandler = () => {
    setShow((show) => ({ ...show, showForm: true }));
  };
  return (
    <>
      <div className={styles["form-container"]}>
        <h3>Add New Contact</h3>
        <button onClick={showHandler} className={showForm ? styles["show-form"] : styles["form-container-button"]}>+</button>
        {showForm && children}
      </div>
    </>
  );
};

export default FormContainer;
