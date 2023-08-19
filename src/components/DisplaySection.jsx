import React from "react";

function DisplaySection({ triggerPreview }) {
  const handleLearnTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="display-section wrapper">
      <g2 className="title">New</g2>
      <p className="text">Brilliant</p>
      <span className="description">
        A display that's up to 2x brighter oin the sun.
      </span>
      <button className="button" onClick={triggerPreview}>
        Try me!
      </button>
      <button onClick={handleLearnTop} className="back-button">
        TOP
      </button>
    </div>
  );
}

export default DisplaySection;
