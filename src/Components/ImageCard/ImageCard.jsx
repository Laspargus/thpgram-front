import React from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "./ImageCard.css";
const ImageCard = ({ image }) => {
  console.log(image);
  // const image_url = `data:image/${image.extension};base64,${image.stream}`;
  const image_url = image.stream;
  return (
    <>
      <div className="col-md-4">
        <img className="flexible" src={image_url} />
        <p>{image.description}</p>
        <DeleteOutlined />
        <EditOutlined />
      </div>
    </>
  );
};

export default ImageCard;
