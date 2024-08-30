const Photo = ({ setShowPhoto, setContact}) => {
  const changePhotoHandler = (event) => {
    const photoSource = event.target.src;
    setContact(contact => ({...contact, photo: photoSource}))
  };
  return (
    <div>
      <button onClick={() => setShowPhoto(false)}>Back</button>
      <div>
        <img
          src="../.././public/photos/menPhoto.webp"
          alt="Men Photo"
          onClick={changePhotoHandler}
        />
        <img
          src="../.././public/photos/womenPhoto.webp"
          alt="Women Photo"
          onClick={changePhotoHandler}
        />
      </div>
    </div>
  );
};

export default Photo;
