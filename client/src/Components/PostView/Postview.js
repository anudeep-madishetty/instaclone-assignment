import React from "react";
import { FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import logo from "Images/logo.png";

export default function Postview() {
  const navigate = useNavigate();
  const navigateAddPost = () => {
    // console.log("nvigating to add post");
    navigate("/addpost");
  };
  return (
    <header className="header-clone">
      <img className="logo" src={`Images/logo.png`} />
      <FaCamera onClick={navigateAddPost} className="camera-icon" />
    </header>
  );
}
