import React from "react";
import ShortID from "shortid";
import ImageToogle from "./../ImageToggle";

const ImageList = ({ imagelist, handleDelete }) => {
  return (
    <div className="row">
      {imagelist.map((image) => (
        <ImageToogle
          key={ShortID.generate()}
          handleDelete={handleDelete}
          image={image}
        />
      ))}
    </div>
  );
};
export default ImageList;
