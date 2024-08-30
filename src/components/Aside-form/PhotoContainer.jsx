const PhotoContainer = ({ showPhoto, setShowPhoto, photo, children }) => {
  return (
    <div>
      <img src={photo} alt="photo" />
      <button onClick={() => setShowPhoto(true)}>🖊</button>
      {showPhoto && children}
    </div>
  );
};

export default PhotoContainer;
