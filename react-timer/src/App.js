import React, { useState, useEffect } from "react";
import "./App.css";
const App = () => {
  const [seconds, setSec] = useState(55);
  const [minutes, setMin] = useState(58);
  const [hours, setHour] = useState(0);
  const [isActive, setActive] = useState(false);
  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setSec(seconds + 1);
        if (seconds > 59) {
          setSec(0);
          setMin(minutes + 1);
        }
        if (minutes > 59) {
          setMin(0);
          setHour(hours + 1);
        }
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [isActive, seconds]);
  const stopTimer = () => {
    setActive(false);
    setSec(0);
    setMin(0);
    setHour(0);
  };
  return (
    <>
      <div className="timer">
        {hours < 10 ? `0${hours}` : hours} :{" "}
        {minutes < 10 ? `0${minutes}` : minutes} :{" "}
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <div className="timer__controller">
        <button
          className="timer__start-stop button"
          onClick={() => setActive(!isActive)}
        >
          Start/Stop
        </button>
        <button className="timer__reset button" onClick={stopTimer}>
          Reset
        </button>
      </div>
    </>
  );
};

export default App;
