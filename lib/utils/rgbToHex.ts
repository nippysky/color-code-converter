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
