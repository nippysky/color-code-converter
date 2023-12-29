export const getRandomHexColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";

  // Generate a random hex color code with 6 characters
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

export function rgbStringToHex(rgbString: string) {
  // Extract RGB values from the string using a regular expression
  const matches = rgbString.match(/\d+/g);

  if (!matches || matches.length !== 3) {
    // Handle invalid input
    console.error("Invalid RGB string format");
    return null;
  }

  // Convert the RGB values to hex
  const [r, g, b] = matches.map((value) => {
    const intValue = parseInt(value, 10);
    // Clamp the value to the valid RGB range (0 to 255)
    return Math.min(255, Math.max(0, intValue));
  });

  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");

  // Construct the hex color code
  const hexColor = `#${hexR}${hexG}${hexB}`;

  return hexColor;
}

export function isRGBColorCode(input: string) {
  // Regular expression for case-insensitive RGB color code format
  const rgbRegex =
    /^rgb\(\s*((\d{1,2}|1\d\d|2[0-4]\d|25[0-5]),\s*?){2}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*\)$/i;

  // Test if the input matches the RGB color code format
  return rgbRegex.test(input);
}

export function hexToRgb(hex: string) {
  // Remove the hash (#) character, if present
  hex = hex.replace(/^#/, "");

  // Parse the hex string into three separate components
  const bigint = parseInt(hex, 16);
  const red = (bigint >> 16) & 255;
  const green = (bigint >> 8) & 255;
  const blue = bigint & 255;

  // Return the RGB color as a string
  return `rgb(${red}, ${green}, ${blue})`;
}
