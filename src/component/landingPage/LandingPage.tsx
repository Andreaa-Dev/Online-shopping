import React from "react";
import LandingButton from "./LandingButton";
import MainPageImg from "../../images/mainPageImg.jpeg";

function LandingPage() {
  return (
    <div>
      <img src={MainPageImg} alt="ColourPop" />
      <LandingButton />
    </div>
  );
}

export default LandingPage;
