import styles from "../../styles/Aside-form/PhotoContainer.module.css";

const PhotoContainer = ({ show: { showPhoto }, setShow, photo, children }) => {
  return (
    <div className={styles["photo-container"]}>
      <img src={photo} alt="photo" />
      <button
        type="button"
        onClick={() => setShow((show) => ({ ...show, showPhoto: true }))}
      >
        🖊
      </button>
      {showPhoto && children}
    </div>
  );
};

export default PhotoContainer;
