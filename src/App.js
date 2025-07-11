import "./App.css";
import TimerLengthComponent from "./Componenet/TimerLengthComponent";
import TimerSessionComponent from "./Componenet/TimerSessionComponent";

function App() {
  return (
    <>
      <div className="_pomodora">
        <TimerLengthComponent />
        <TimerSessionComponent />
      </div>
    </>
  );
}

export default App;
