import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function TimerComponent({ timerLength, timerLengthName }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "400",
        }}
      >
        {timerLengthName} Length
      </h2>
      <div
        style={{
          fontSize: "1.73rem",
          fontWeight: "bold",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FaArrowUp /> {timerLength} <FaArrowDown />
      </div>
    </div>
  );
}
