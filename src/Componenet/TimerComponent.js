import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function TimerComponent({
  timerLength,
  setTimerLength,
  timerLengthName,
}) {
  const updateIntervalLength = (myBool) => {
    console.log(myBool);
    if (myBool) {
      const updated = timerLength + 1;
      if (updated >= 61) {
        return;
      }

      setTimerLength(updated);
    } else {
      const updated = timerLength - 1;
      if (updated <= 0) {
        return;
      }
      setTimerLength(updated);
    }
  };

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
        <div
          id="up"
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => updateIntervalLength(true)}
        >
          <FaArrowUp />{" "}
        </div>
        {timerLength}{" "}
        <div
          id="down"
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => updateIntervalLength(false)}
        >
          <FaArrowDown />
        </div>
      </div>
    </div>
  );
}
