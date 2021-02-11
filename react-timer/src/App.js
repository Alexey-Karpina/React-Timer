import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



import { timerStart, timerStop, timerReset, timerTick } from "./actions";
const App = () => {
  const [click, setClick] = useState(1);
  const [start, setStart] = useState(0);
  const time = useSelector((state) => state.time);
  const isActive = useSelector((state) => state.isActive);

  const dispatch = useDispatch();


  const { sec, min, hour } = time;
  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        dispatch(timerTick());
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive, sec]);
  const startStop = (status) => {
    if (!status) {
      dispatch(timerStart(sec, min, hour));
      return;
    }
    dispatch(timerStop());
  };

  const wait = () => {
    setClick(click + 1);
    let endClick;
    let interval;
    if (click === 1) {
      setStart(Date.now());
    }
    if (click === 2) {
      endClick = Date.now();

      if (endClick - start <= 300) {
        startStop(isActive);
      }
      setClick(1);
    }
    if (click === 3) {
      setClick(1);
    }
  };
  return (
    <>
      <div className="timer" onClick={() => wait()}>
        {hour < 10 ? `0${hour}` : hour} : {min < 10 ? `0${min}` : min} :{" "}
        {sec < 10 ? `0${sec}` : sec}
      </div>
      <div className="timer__controller">
        <button
          className="timer__start-stop button"
          onClick={() => startStop(isActive)}
        >
          {isActive ? "Stop" : "Start"}
        </button>
        <button
          className="timer__reset button"
          onClick={() => dispatch(timerReset())}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default App;
