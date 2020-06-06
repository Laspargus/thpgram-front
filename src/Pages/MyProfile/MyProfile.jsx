import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProfileCard from "./../../Components/Profile/ProfileCard";

const MyProfile = () => {
  const user_id = useSelector((state) => state.user_id);
  const token = useSelector((state) => state.token);
  const [profile, SetProfile] = useState();
  const [loading, SetLoading] = useState(false);
  console.log(token);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/profile/${user_id}`, {
      method: "get",
      headers: {
        Authorization: "Bearer " + token,
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
        SetProfile(response);
        SetLoading(true);
      })
      .catch((error) => {
        SetLoading(false);
        alert(error);
      });
  }, []);

  return <>{loading && <ProfileCard profile={profile} />}</>;
};

export default MyProfile;
