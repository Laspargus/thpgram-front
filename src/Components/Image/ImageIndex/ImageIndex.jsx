import React from "react";
import { useState, useEffect } from "react";
import ImageCreate from "./../ImageCreate";
import ImageList from "./../ImageList";

const ImageIndex = () => {
  const [imagelist, SetImageList] = useState([]);

  const handleUpload = (item) => {
    SetImageList(imagelist.concat(item));
  };

  const handleDelete = (item) => {
    const newlist = imagelist.filter((post) => post.id !== item.id);
    SetImageList(newlist);
  };

  useEffect(() => {
    console.log("je mets à jour la liste des images");
    fetch("http://localhost:3000/api/v1/images", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((response) => {
        console.log("ma liste dimage", response);
        SetImageList(response);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <>
      <ImageCreate handleUpload={handleUpload} />
      <ImageList imagelist={imagelist} handleDelete={handleDelete} />
    </>
  );
};

export default ImageIndex;
