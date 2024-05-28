import React from "react";
import "./screen.css";

export default function Screen({ styledText, myDir }) {
    return (
        <div dir={myDir} className="screen">
            {styledText.map((part, index) => (
                <React.Fragment key={index}>
                    {part.text === '\n' ? (
                        <br />
                    ) : (
                        <span
                            style={{
                                color: part.style.color,
                                fontFamily: part.style.font,
                                fontSize: part.style.fontSize
                            }}
                        >
                            {part.text}
                        </span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}