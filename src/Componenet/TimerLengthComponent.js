import React from "react";

import TimerComponent from "./TimerComponent";

export default function TimerLengthComponent({
  breakTimerLength,
  setBreakTimerLength,
  sessionTimerLength,
  setSessionTimerLength,
}) {
  return (
    <div
      className="_"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "28rem",
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontSize: "3rem",
          fontWeight: "bolder",
        }}
      >
        25 + 5 Clock
      </h1>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TimerComponent
          timerLength={breakTimerLength}
          setTimerLength={setBreakTimerLength}
          timerLengthName={"Break"}
        />
        <TimerComponent
          timerLength={sessionTimerLength}
          setTimerLength={setSessionTimerLength}
          timerLengthName={"Session"}
        />
      </div>
    </div>
  );
}
