import { v4 as uuidv4 } from "uuid";

import styles from "../../styles/Aside-form/Photo.module.css";
import image from "../../constants/Img";

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
        {image.map((item) => {
          return (
            <img
              src={item.src}
              alt="profile photos"
              key={uuidv4()}
              className={styles["photo-container-img"]}
              onClick={changePhotoHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Photo;
