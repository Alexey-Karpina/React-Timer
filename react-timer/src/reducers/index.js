const initialState = {
  time: {
    sec: 0,
    min: 0,
    hour: 0,
  },
  isActive: false,
};

const addSec = (state) => {
  const { sec, min, hour } = state.time;
  if (sec > 59) {
    return {
      hour,
      min: min + 1,
      sec: 0,
    };
  }
  if (min > 59) {
    return {
      hour: hour + 1,
      min: 0,
      sec: 0,
    };
  }
  return {
    hour,
    min,
    sec: sec + 1,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_TIMER":
      return {
        ...state,
        isActive: true,
      };

    case "STOP_TIMER":
      return {
        ...state,
        isActive: false,
      };

    case "RESET_TIMER":
      return initialState;

    case "TICK_TIMER":
      return {
        ...state,
        time: addSec(state),
        isActive: true,
      };
    default:
      return state;
  }
};
export default reducer;
