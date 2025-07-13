import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function TimerComponent({
  timerLength,
  setTimerLength,
  timerLengthName,
}) {
  const updateIntervalLength = (myBool) => {
    console.log(myBool);
    if (myBool) {
      let updated = timerLength + 1;
      if (updated > 60) {
        return;
      }

      setTimerLength(updated);
    } else {
      let updated = timerLength - 1;
      if (updated < 1) {
        return;
      }
      setTimerLength(updated);
    }
    return;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      id={`${timerLengthName.toLowerCase()}-label`}
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
          <FaArrowUp id={`${timerLengthName.toLowerCase()}-increment`} />{" "}
        </div>
        <div id={`${timerLengthName.toLowerCase()}-length`}>{timerLength} </div>
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
          <FaArrowDown id={`${timerLengthName.toLowerCase()}-decrement`} />
        </div>
      </div>
    </div>
  );
}
