import React from "react";

const ProfileCard = ({ profile }) => {
  return (
    <div>
      <p>{profile.username}</p>
      <p>{profile.first_name}</p>
      <p>{profile.last_name}</p>
      <p>{profile.email}</p>
      <p>{profile.created_at}</p>
    </div>
  );
};
export default ProfileCard;
