import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import superBase64 from "super-base-64";
import { editImage } from "./../../../API/ImageApi";

const ImageEdit = ({ image, handleEdit }) => {
  const [editedImage, SetEditedImage] = useState(image);
  const [description, SetDescription] = useState(image.description);
  const [image64, SetImage64] = useState();
  const token = useSelector((state) => state.token);
  const user_id = useSelector((state) => state.user_id);
  const handleImageInput = (e) => {
    let file = e.target.files[0];
    SetEditedImage(file);
    encode(e.target.files[0]);
  };

  const handleDescriptionInput = (e) => {
    SetDescription(e);
  };

  const encode = async (image) => {
    let encodedImage = await superBase64(image);
    SetImage64(encodedImage);
  };

  const handleSubmit = async () => {
    const data = {
      id: image.id,
      stream: image64,
      description: description,
      extension: "image/jpg",
      private: false,
      user_id: user_id,
    };

    handleEdit(data);
    await editImage(image, token, data);
  };

  return (
    <>
      <div className="">
        <input type="file" onChange={(e) => handleImageInput(e)} />

        <input
          type="text"
          value={description}
          placeholder={image.description}
          onChange={(e) => handleDescriptionInput(e.target.value)}
        />

        <input
          className="btn btn-info"
          type="button"
          value="Upload File"
          onClick={handleSubmit}
        />
      </div>
    </>
  );
};
export default ImageEdit;
