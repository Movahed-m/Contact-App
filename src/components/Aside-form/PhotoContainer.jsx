import { useState } from "react";
import Photo from "./Photo";

const PhotoContainer = ({ photo, setContact }) => {
  const [showPhoto, setShowPhoto] = useState(false);

  return (
    <div>
      <img src={photo} alt="photo" />
      <button onClick={() => setShowPhoto(true)}>🖊</button>
      {showPhoto && <Photo setShowPhoto={setShowPhoto} setContact={setContact}/>}
    </div>
  );
};

export default PhotoContainer;
