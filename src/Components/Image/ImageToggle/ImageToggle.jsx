import React, { useState } from "react";
import ImageCard from "./../ImageCard";
import ImageEdit from "./../ImageEdit";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { deleteImage } from "./../../../API/ImageApi";

const ImageToggle = ({ image, handleDelete, handleEdit }) => {
  const [toggle, SetToggle] = useState(false);
  const token = useSelector((state) => state.token);

  const handleClick = () => {
    SetToggle(true);
  };

  const setDelete = async () => {
    handleDelete(image);
    await deleteImage(image, token);
  };

  const setEdit = () => {
    SetToggle(!toggle);
  };

  return (
    <>
      <div className="col-md-4 card">
        {!toggle && <ImageCard image={image} />}
        <a onClick={setDelete}>
          <DeleteOutlined />
        </a>
        <a onClick={setEdit}>
          <EditOutlined />
        </a>
        {toggle && <ImageEdit image={image} handleEdit={handleEdit} />}
      </div>
    </>
  );
};
export default ImageToggle;
