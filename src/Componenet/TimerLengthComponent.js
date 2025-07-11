import React, { useState } from "react";

import TimerComponent from "./TimerComponent";

export default function TimerLengthComponent() {
  const [breakTimerLength, setBreakTimerLength] = useState(5);
  const [sessionTimerLength, setSessionTimerLength] = useState(25);
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
          setBreakTimerLength={setBreakTimerLength}
          timerLengthName={"Break"}
        />
        <TimerComponent
          timerLength={sessionTimerLength}
          setSessionTimerLength={setSessionTimerLength}
          timerLengthName={"Session"}
        />
      </div>
    </div>
  );
}
