import react from "react";

export const fetchImages = async () => {
  const response = await fetch("http://localhost:3000/api/v1/images", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

export const addImage = async (data, token) => {
  const response = await fetch("http://localhost:3000/api/v1/images", {
    method: "post",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export const editImage = async (image, token, data) => {
  const response = await fetch(
    `http://localhost:3000/api/v1/images/${image.id}`,
    {
      method: "put",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return await response.json();
};

export const deleteImage = async (image, token) => {
  const response = await fetch(
    `http://localhost:3000/api/v1/images/${image.id}`,
    {
      method: "delete",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    }
  );
  return await response.json();
};
