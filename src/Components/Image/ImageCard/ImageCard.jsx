import React from "react";
import "./ImageCard.css";
const ImageCard = ({ image }) => {
  // const image_url = `data:image/${image.extension};base64,${image.stream}`;
  const image_url = image.stream;

  return (
    <>
      <img className="flexible" src={image_url} />
      <p>{image.description}</p>
    </>
  );
};

export default ImageCard;
