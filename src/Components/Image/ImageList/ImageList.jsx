import React from "react";
import ShortID from "shortid";
import ImageToogle from "./../ImageToggle";

const ImageList = ({ imagelist, handleDelete, handleEdit }) => {
  return (
    <div className="row">
      {imagelist.map((image) => (
        <ImageToogle
          key={ShortID.generate()}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          image={image}
        />
      ))}
    </div>
  );
};
export default ImageList;
