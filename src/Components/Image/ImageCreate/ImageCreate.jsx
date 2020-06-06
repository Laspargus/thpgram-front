import React from "react";
import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import superBase64 from "super-base-64";
import { useDispatch, useSelector } from "react-redux";
import { addImage } from "./../../../API/ImageApi";
const ImageCreate = ({ handleUpload }) => {
  const [image, SetImage] = useState();
  const [description, SetDescription] = useState();
  const [image64, SetImage64] = useState();
  const token = useSelector((state) => state.token);
  const user_id = useSelector((state) => state.user_id);

  const handleImageInput = (e) => {
    let file = e.target.files[0];
    SetImage(file);
    encode(e.target.files[0]);
  };

  const handleDescriptionInput = (e) => {
    SetDescription(e);
  };

  const encode = async (image) => {
    let encodedImage = await superBase64(image);
    SetImage64(encodedImage);
    console.log(encodedImage);
  };

  const handleSubmit = async () => {
    const data = {
      stream: image64,
      description: description,
      extension: "image/jpg",
      private: false,
      user_id: user_id,
    };

    handleUpload(data);
    await addImage(data, token);
  };

  return (
    <div className="card m-5 p-5">
      <div className="row">
        <input
          className="col-md-3"
          type="file"
          onChange={(e) => handleImageInput(e)}
        />
        <input
          className="col-md-3"
          type="text"
          value={description}
          onChange={(e) => handleDescriptionInput(e.target.value)}
        />
        <input
          className="btn btn-info col-md-3"
          type="button"
          value="Upload File"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default ImageCreate;
