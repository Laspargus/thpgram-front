import React from "react";
import { useState, useEffect } from "react";
import ImageCreate from "./../ImageCreate";
import ImageList from "./../ImageList";

// api
import { fetchImages } from "./../../../API/ImageApi";

const ImageIndex = () => {
  const [imagelist, SetImageList] = useState([]);
  const [isloading, SetIsLoading] = useState(false);
  const handleUpload = (item) => {
    SetImageList(imagelist.concat(item));
  };

  const handleEdit = (data) => {
    const newlist = imagelist.map((image) =>
      image.id === data.id ? data : image
    );
    SetImageList(newlist);
  };

  const handleDelete = (item) => {
    const newlist = imagelist.filter((post) => post.id !== item.id);
    SetImageList(newlist);
  };

  useEffect(() => {
    SetIsLoading(true);
    refreshImages();
  }, []);

  const refreshImages = async () => {
    const images = await fetchImages();
    SetImageList(images);
    SetIsLoading(false);
  };

  return (
    <>
      <ImageCreate handleUpload={handleUpload} />
      {isloading ? (
        <div>loading...</div>
      ) : (
        <ImageList
          imagelist={imagelist}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};

export default ImageIndex;
