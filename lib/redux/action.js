// actions.js
export const setRandomColor = (randomColor) => ({
  type: "SET_RANDOM_COLOR",
  payload: { randomColor },
});

const initialState = {
  randomColor: "", // Set an initial color
  rgbColor: "", // Set initial RGB values
  cmykColor: "", // Set initial CMYK values
  isColorSet: false,
};

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RANDOM_COLOR":
      const { randomColor } = action.payload;

      // Calculate RGB values from the random color
      const rgbValues = randomColor
        .slice(1) // Remove the '#' from the hex color
        .match(/.{2}/g) // Split into pairs of characters
        .map((hex) => parseInt(hex, 16)) // Convert each pair to decimal
        .join(", ");

      // Calculate CMYK values from the RGB values
      const cmykValues = rgbValues
        .split(", ")
        .map((value) => Math.round((1 - value / 255) * 100))
        .join(", ");

      return {
        ...state,
        randomColor,
        rgbColor: `RGB(${rgbValues})`,
        cmykColor: `CMYK(${cmykValues})`,
        isColorSet: true,
      };

    default:
      return state;
  }
};

export default colorReducer;
