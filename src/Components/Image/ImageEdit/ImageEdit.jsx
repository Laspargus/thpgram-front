import React from "react";

const ImageEdit = () => {
  return (
    <>
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
    </>
  );
};
export default ImageEdit;
