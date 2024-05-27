import React from "react";
import "./screen.css";

export default function Screen({ styledText }) {
    return (
        <div className="screen">
            {styledText.map((part, index) => (
                <span
                    key={index}
                    style={{ color: part.style.color, fontFamily: part.style.font }}
                >
                    {part.text}
                </span>
            ))}
        </div>
    );
}
