import styles from "../../styles/Aside-form/PhotoContainer.module.css";

const PhotoContainer = (props) => {
const { show: { showPhoto }, setShow, photo, children } = props;

  return (
    <div className={styles["profile-photo-container"]}>
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
