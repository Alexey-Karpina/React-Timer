export const timerStart = () => {
  return {
    type: "START_TIMER",
  };
};

export const timerStop = () => {
  return {
    type: "STOP_TIMER",
  };
};

export const timerReset = () => {
  return {
    type: "RESET_TIMER",
  };
};

export const timerTick = () => {
  return {
    type: "TICK_TIMER",
  };
};
