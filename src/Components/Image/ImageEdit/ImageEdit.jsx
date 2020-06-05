import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import superBase64 from "super-base-64";

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

  const handleSubmit = () => {
    const data = {
      id: image.id,
      stream: image64,
      description: description,
      extension: "image/jpg",
      private: false,
      user_id: user_id,
    };

    handleEdit(data);

    console.log("les data qui partent", data);
    fetch(`http://localhost:3000/api/v1/images/${image.id}`, {
      method: "put",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((response) => {
        console.log("ledit semble avoir fonctionne");
        console.log(response);
      })
      .catch((error) => {
        alert(error);
      });
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
