import { useEffect, useRef, useState } from "react";
import { LuPlay, LuTimerReset } from "react-icons/lu";

export default function TimerSessionComponent({
  workLength,
  breakLength,
  setSessionTimerLength,
  setBreakTimerLength,
}) {
  const [timerLeft, setTimeLeft] = useState(workLength * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef(null);
  const bellSoundRef = useRef(null);

  // Initialize bell only once
  useEffect(() => {
    bellSoundRef.current = new Audio(
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"
    );

    setTimeLeft(workLength * 60);
  }, [workLength, setTimeLeft]);

  // Format timer like MM:SS
  const formatTime = (seconds) => {
    const min = String(Math.floor(seconds / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");

    return `${min}:${sec}`;
  };

  // Intervals
  const startTimer = (initialTime, isBreakPhase) => {
    let time = initialTime;
    intervalRef.current = setInterval(() => {
      time -= 1;
      setTimeLeft(time);
      if (time <= 0) {
        clearInterval(intervalRef.current);
        bellSoundRef.current?.play();

        if (!isBreakPhase) {
          // Switch to break
          setIsBreak(true);
          startTimer(breakLength * 60, true);
        } else {
          // Switch to work
          setIsBreak(false);
          setIsRunning(false);
        }
      }
    }, 1000);
  };

  const handleStartStop = () => {
    if (!isRunning) {
      // Start from beginning
      setIsRunning(true);
      setIsPaused(false);
      startTimer(timerLeft, isBreak);
    } else if (isRunning && !isPaused) {
      // Pause
      clearInterval(intervalRef.current);
      setIsPaused(true);
    } else if (isRunning && isPaused) {
      // Resume
      setIsPaused(false);
      startTimer(timerLeft, isBreak);
    }
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setIsPaused(false);
    setIsBreak(false);
    setSessionTimerLength(25);
    setBreakTimerLength(5);
    setTimeLeft(25 * 60);
  };

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
          id="timer-label"
        >
          {isBreak ? "Break" : "Session"}
        </h2>
        <div
          style={{
            fontSize: "5.75rem",
          }}
          id="time-left"
        >
          {formatTime(timerLeft)}
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
        <LuPlay
          onClick={handleStartStop}
          id="start_stop"
          style={{ cursor: "pointer" }}
        />{" "}
        <LuTimerReset
          style={{ cursor: "pointer" }}
          id="reset"
          onClick={handleReset}
        />
      </div>
    </div>
  );
}
