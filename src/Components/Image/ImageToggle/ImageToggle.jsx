import React, { useState } from "react";
import ImageCard from "./../ImageCard";
import ImageEdit from "./../ImageEdit";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const ImageToggle = ({ image, handleDelete }) => {
  const [toggle, SetToggle] = useState(false);

  const handleClick = () => {
    SetToggle(true);
  };

  const handleEdit = () => {
    SetToggle(!toggle);
  };
  return (
    <>
      <div className="col-md-4 card">
        {!toggle && <ImageCard image={image} />}
        <a onClick={handleDelete}>
          <DeleteOutlined />
        </a>
        <a onClick={handleEdit}>
          <EditOutlined />
        </a>
        {toggle && <ImageEdit />}
      </div>
    </>
  );
};
export default ImageToggle;
