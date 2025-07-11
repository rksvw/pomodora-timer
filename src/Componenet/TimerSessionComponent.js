import React from "react";
import { LuPlay, LuTimerReset } from "react-icons/lu";

export default function TimerSessionComponent({sessionTimerLength}) {
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
          {sessionTimerLength}
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
