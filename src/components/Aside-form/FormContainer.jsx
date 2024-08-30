const FormContainer = ({ show: { showForm }, setShow, children }) => {
  const showHandler = () => {
    setShow((show) => ({ ...show, showForm: true }));
  };
  return (
    <>
      <div>
        <h3>Add New Contact</h3>
        <button onClick={showHandler}>+</button>
      </div>
      {showForm && children}
    </>
  );
};

export default FormContainer;
