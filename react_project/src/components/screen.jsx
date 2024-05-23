import React from "react";
import "./screen.css";

export default function Screen({ inputText, colorText, fontText}) {
  return (
    <div className="screen">
      <p style={{color: colorText, fontFamily: fontText}}>{inputText}</p>
    </div>
  );
}