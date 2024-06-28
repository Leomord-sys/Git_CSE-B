import React from "react";
//import profilePic from "../images/avatar-jessica.jpeg";
import Button from "./Button";
function Profile() {
  return (
    <div className="profile">
      {/* <img src={profilePic} width="100px" /> */}
      <h1>Jessica Randall</h1>
      <h4>London,United Kingdom</h4>
      <p>"Front-end developer and avid reader"</p>
      <Button label="GitHub" />
      <Button label="Frontend Mentor" />
      <Button label="LinkedIn" />
      <Button label="Twitter" />
      <Button label="Instagram" />
    </div>
  );
}
export default Profile;