import React, { useState } from "react";
import ImageCard from "./../ImageCard";
import ImageEdit from "./../ImageEdit";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const ImageToggle = ({ image, handleDelete, handleEdit }) => {
  const [toggle, SetToggle] = useState(false);
  const token = useSelector((state) => state.token);

  const handleClick = () => {
    SetToggle(true);
  };

  const setDelete = () => {
    handleDelete(image);

    fetch(`http://localhost:3000/api/v1/images/${image.id}`, {
      method: "delete",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response;
        }
      })
      .then((response) => response.json())
      .then((response) => {
        console.log("delete semble avoir fonctionne");
        console.log(response);
      })
      .catch((error) => {
        alert(error);
      });
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
