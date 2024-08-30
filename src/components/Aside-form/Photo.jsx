import styles from "../../styles/Aside-form/Photo.module.css";

const Photo = ({ setShow, setContact }) => {
  const changePhotoHandler = (event) => {
    const photoSource = event.target.src;
    setContact((contact) => ({ ...contact, photo: photoSource }));
    setShow((show) => ({ ...show, showPhoto: false }));
  };

  return (
    <div className={styles["photo-container"]}>
      <button
        onClick={() => setShow((show) => ({ ...show, showPhoto: false }))}
      >
        Back
      </button>
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
