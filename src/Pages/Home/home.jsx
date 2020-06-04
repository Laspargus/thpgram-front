import React from "react";
import ImageUpload from "./../../Components/ImageUpload";
import { useState, useEffect } from "react";
import ShortID from "shortid";
import ImageCard from "./../../Components/ImageCard";
const Home = () => {
  const [imagelist, SetImageList] = useState();
  const [liststatus, SetListStatus] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/", {
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
        SetListStatus(true);
      })
      .catch((error) => {
        alert(error);
        SetListStatus(false);
      });
  }, []);

  return (
    <>
      <ImageUpload />
      <div className="row">
        {liststatus &&
          imagelist.map((image) => (
            <ImageCard
              key={ShortID.generate()}
              image={image}
              // isAuthenticated={isAuthenticated}
              // handleDelete={handleDelete}
              // handleEdit={handleEdit}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
