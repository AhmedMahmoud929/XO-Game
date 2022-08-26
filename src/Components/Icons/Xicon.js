import React from "react";

const Xicon = ({ color, size }) => {
  return (
    <div
      className={`icon
     ${color ? "icon-" + color : "icon-blue"}
     ${size && "icon-" + size}`}
    >
      <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100">
        <path
          d="M84.707,68.752L65.951,49.998l18.75-18.752c0.777-0.777,0.777-2.036,0-2.813L71.566,15.295
	c-0.777-0.777-2.037-0.777-2.814,0L49.999,34.047l-18.75-18.752c-0.746-0.747-2.067-0.747-2.814,0L15.297,28.431
	c-0.373,0.373-0.583,0.88-0.583,1.407c0,0.527,0.21,1.034,0.583,1.407L34.05,49.998L15.294,68.753
	c-0.373,0.374-0.583,0.88-0.583,1.407c0,0.528,0.21,1.035,0.583,1.407l13.136,13.137c0.373,0.373,0.881,0.583,1.41,0.583
	c0.525,0,1.031-0.21,1.404-0.583l18.755-18.755l18.756,18.754c0.389,0.388,0.896,0.583,1.407,0.583c0.511,0,1.019-0.195,1.408-0.583
	l13.138-13.137C85.484,70.789,85.484,69.53,84.707,68.752z"
        />
      </svg>
    </div>
  );
};

export default Xicon;
