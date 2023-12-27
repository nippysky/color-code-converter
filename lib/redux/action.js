// actions.js
export const setRandomColor = (color) => ({
  type: "SET_RANDOM_COLOR",
  payload: color,
});

const initialState = {
  randomColor: "", // Set an initial color
  isColorSet: false,
};

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RANDOM_COLOR":
      return {
        ...state,
        randomColor: action.payload,
        isColorSet: true,
      };
    default:
      return state;
  }
};

export default colorReducer;
