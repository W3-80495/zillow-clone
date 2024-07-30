import React from "react";
import Navbar from "../Components/Navbar";
import working from "../images/weareworking.jpeg";

function WeAreWorking() {
  return (
    <div>
      <Navbar />
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img src={working}></img>
      </div>
    </div>
  );
}

export default WeAreWorking;
