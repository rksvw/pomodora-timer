import "./App.css";
import { useState } from "react";
import TimerLengthComponent from "./Componenet/TimerLengthComponent";
import TimerSessionComponent from "./Componenet/TimerSessionComponent.js";

function App() {
  const [breakTimerLength, setBreakTimerLength] = useState(5);
  const [sessionTimerLength, setSessionTimerLength] = useState(25);
  return (
    <>
      <div className="_pomodora">
        <TimerLengthComponent
          breakTimerLength={breakTimerLength}
          setBreakTimerLength={setBreakTimerLength}
          setSessionTimerLength={setSessionTimerLength}
          sessionTimerLength={sessionTimerLength}
        />

        <TimerSessionComponent
          workLength={sessionTimerLength}
          breakLength={breakTimerLength}
          setSessionTimerLength={setSessionTimerLength}
          setBreakTimerLength={setBreakTimerLength}
        />
      </div>
    </>
  );
}

export default App;
