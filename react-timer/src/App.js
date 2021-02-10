import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import { timerStart, timerStop, timerReset, timerTick } from "./actions";
const App = () => {
  const [click, setClick] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const time = useSelector((state) => state.time);
  const isActive = useSelector((state) => state.isActive);

  const dispatch = useDispatch();

  console.log(time);

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
    console.log("Start Stop", status);
    if (!status) {
      dispatch(timerStart(sec, min, hour));
      return;
    }
    dispatch(timerStop());
  };
  // useEffect(() => {
  //   if (click === 1) {
  //     console.log("Click 1");
  //     setStart(+new Date());
  //     console.log(start);
  //   }
  //   if (click === 2) {
  //     setEnd(Date.now());
  //     console.log(start);
  //     console.log(end);
  //     if (end - start <= 300) {
  //       console.log("Click 2");
  //       startStop(isActive);
  //       setClick(0);
  //     }
  //     setClick(0);
  //   }
  // }, [click]);
  const wait = () => {
    setClick(click + 1);
    let startCLick;
    let endClick;
    if (click === 1) {
      //setStart(Date.now());
      startCLick = Date.now();
      console.log(startCLick);
    }
    if (click === 2) {
      //setEnd(Date.now());
      endClick = Date.now();
      console.log(endClick);
      if (endClick - startCLick <= 300) {
        console.log(endClick - startCLick);
        startStop(isActive);
      }
      setClick(0);
    }
    if (click === 3) {
      setClick(0);
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
