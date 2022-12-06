import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="landing-block">
        <img src={`Images/Landing.JPG`} className="landing-image" />
        <div className="landing-text">
          <div>10x Team USA 01</div>
          <div>
            <button
              className="landing-button"
              onClick={() => {
                navigate("/postview");
              }}
            >
              Enter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
