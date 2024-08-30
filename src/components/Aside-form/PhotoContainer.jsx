const PhotoContainer = ({ show: {showPhoto}, setShow, photo, children }) => {
  return (
    <div>
      <img src={photo} alt="photo" />
      <button onClick={() => setShow(show => ({...show,showPhoto: true}))}>🖊</button>
      {showPhoto && children}
    </div>
  );
};

export default PhotoContainer;
