import React, { useState } from "react";
import { LuPlay, LuTimerReset } from "react-icons/lu";

export default function TimerSessionComponent({ sessionTimerLength }) {
  const [countMinute, setCountMinute] = useState(sessionTimerLength);
  const [countSecond, setCountSecond] = useState(60);
  const [countBreak, setCountBreak] = useState(5);


  // 1. Create a loop that run until the reset button click -> while
  // 2. 25 min timer -> Interval
  // 3. stop 25 min timer and ring bell -> Audio : Set Break
  // 4. start break timer -> Interval
  // 5. stop break timer and ring bell -> Audio : Set timer
  // 6. repeat from step 2 -> again

  return (
    <div
      style={{
        width: "28rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2.3rem",
      }}
    >
      <div
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: ".4rem solid #13353a",
          borderRadius: "20px",
          padding: ".2rem",
          flex: "1",
        }}
      >
        <h2
          style={{
            fontSize: "2.3rem",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          Session
        </h2>
        <div
          style={{
            fontSize: "5.75rem",
          }}
        >
          {`${sessionTimerLength}:00`}
        </div>
      </div>
      <div
        style={{
          fontSize: "2rem",
          display: "flex",
          gap: "10px",
          padding: "1rem",
        }}
      >
        <LuPlay /> <LuTimerReset />
      </div>
    </div>
  );
}
