import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome-component d-flex flex-column justify-content-center">
      <div className="container ">
        <h1 className="display-1 text-uppercase">Gissa flaggan!</h1>
        <p>
          Ett klurigt spel för dig som vill lära dig mer om världens alla
          flaggor.
        </p>
      </div>
    </div>
  );
}

export default Welcome;
