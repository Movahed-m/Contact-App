const FormContainer = ({show,setShow,children}) => {
  
  const showHandler = () => {
    setShow(true);
  };
  return (
    <>
      <div>
        <h3>Add New Contact</h3>
        <button onClick={showHandler}>+</button>
      </div>
      {show && children}
    </>
  );
};

export default FormContainer;
