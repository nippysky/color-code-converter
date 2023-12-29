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

export function rgbToCmyk(rgbString: string): string {
  // Extract RGB values from the input string
  const rgbMatch = rgbString.match(/(\d+),\s*(\d+),\s*(\d+)/);

  if (!rgbMatch) {
    throw new Error("Invalid RGB color string format");
  }

  const red = parseInt(rgbMatch[1]);
  const green = parseInt(rgbMatch[2]);
  const blue = parseInt(rgbMatch[3]);

  // Normalize the RGB values to the range [0, 1]
  const normalizedRed = red / 255;
  const normalizedGreen = green / 255;
  const normalizedBlue = blue / 255;

  // Calculate the CMY values
  const cyan = 1 - normalizedRed;
  const magenta = 1 - normalizedGreen;
  const yellow = 1 - normalizedBlue;

  // Find the minimum K value
  const black = Math.min(1, Math.min(cyan, magenta, yellow));

  // Adjust CMY values with respect to black
  const adjustedCyan = (cyan - black) / (1 - black);
  const adjustedMagenta = (magenta - black) / (1 - black);
  const adjustedYellow = (yellow - black) / (1 - black);

  // Convert CMYK values to percentages
  const cmykValues = {
    c: Math.round(adjustedCyan * 100),
    m: Math.round(adjustedMagenta * 100),
    y: Math.round(adjustedYellow * 100),
    k: Math.round(black * 100),
  };

  // Return the CMYK color as a string
  return `cmyk(${cmykValues.c}%, ${cmykValues.m}%, ${cmykValues.y}%, ${cmykValues.k}%)`;
}

export function isRGBColorCode(input: string): boolean {
  // Regular expression for case-insensitive RGB color code format
  const rgbRegex =
    /^rgb\(\s*((\d{1,2}|1\d\d|2[0-4]\d|25[0-5]),\s*?){2}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*\)$/i;

  // Test if the input matches the RGB color code format
  return rgbRegex.test(input);
}

export function isValidCmykColorCode(input: string): boolean {
  // Regular expression for case-insensitive CMYK color code format
  const cmykRegex =
    /^cmyk\(\s*((\d{1,2}|100)%,\s*?){2}(\d{1,2}|100)%,\s*(\d{1,2}|100)%\)$/i;

  // Test if the input matches the CMYK color code format
  return cmykRegex.test(input);
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

export function hexToCmyk(hex: string): string {
  // Remove the hash (#) character, if present
  hex = hex.replace(/^#/, "");

  // Parse the hex string into three separate components
  const bigint = parseInt(hex, 16);
  const red = (bigint >> 16) & 255;
  const green = (bigint >> 8) & 255;
  const blue = bigint & 255;

  // Normalize the RGB values to the range [0, 1]
  const normalizedRed = red / 255;
  const normalizedGreen = green / 255;
  const normalizedBlue = blue / 255;

  // Calculate the CMY values
  const cyan = 1 - normalizedRed;
  const magenta = 1 - normalizedGreen;
  const yellow = 1 - normalizedBlue;

  // Find the minimum K value
  const black = Math.min(cyan, magenta, yellow);

  // Adjust CMY values with respect to black
  const adjustedCyan = black === 1 ? 0 : (cyan - black) / (1 - black);
  const adjustedMagenta = black === 1 ? 0 : (magenta - black) / (1 - black);
  const adjustedYellow = black === 1 ? 0 : (yellow - black) / (1 - black);

  // Convert CMYK values to percentages
  const cmykValues = {
    c: Math.round(adjustedCyan * 100),
    m: Math.round(adjustedMagenta * 100),
    y: Math.round(adjustedYellow * 100),
    k: Math.round(black * 100),
  };

  // Return the CMYK color as a string
  return `cmyk(${cmykValues.c}%, ${cmykValues.m}%, ${cmykValues.y}%, ${cmykValues.k}%)`;
}

export function cmykToHex(cmykString: string): string {
  // Regular expression to extract CMYK values
  const cmykMatch = cmykString.match(
    /(\d{1,3})%,\s*(\d{1,3})%,\s*(\d{1,3})%,\s*(\d{1,3})%/
  );

  if (!cmykMatch) {
    throw new Error("Invalid CMYK color code format");
  }

  const c = Math.min(100, parseInt(cmykMatch[1], 10)) / 100;
  const m = Math.min(100, parseInt(cmykMatch[2], 10)) / 100;
  const y = Math.min(100, parseInt(cmykMatch[3], 10)) / 100;
  const k = Math.min(100, parseInt(cmykMatch[4], 10)) / 100;

  // Convert CMYK to RGB
  const red = Math.round(255 * (1 - c) * (1 - k));
  const green = Math.round(255 * (1 - m) * (1 - k));
  const blue = Math.round(255 * (1 - y) * (1 - k));

  // Convert RGB to hex
  const hexColor = `#${((1 << 24) | (red << 16) | (green << 8) | blue)
    .toString(16)
    .slice(1)}`;

  return hexColor.toUpperCase(); // Convert to uppercase for consistency
}

export function cmykToRgb(cmykString: string): string {
  // Extract CMYK values from the input string
  const cmykMatch = cmykString.match(
    /(\d{1,3})%,\s*(\d{1,3})%,\s*(\d{1,3})%,\s*(\d{1,3})%/
  );

  if (!cmykMatch) {
    throw new Error("Invalid CMYK color code format");
  }

  const cyan = Math.min(100, parseInt(cmykMatch[1], 10)) / 100;
  const magenta = Math.min(100, parseInt(cmykMatch[2], 10)) / 100;
  const yellow = Math.min(100, parseInt(cmykMatch[3], 10)) / 100;
  const black = Math.min(100, parseInt(cmykMatch[4], 10)) / 100;

  // Calculate the RGB values
  const red = Math.round((1 - Math.min(1, cyan * (1 - black) + black)) * 255);
  const green = Math.round(
    (1 - Math.min(1, magenta * (1 - black) + black)) * 255
  );
  const blue = Math.round(
    (1 - Math.min(1, yellow * (1 - black) + black)) * 255
  );

  // Return the RGB color as a string
  return `rgb(${red}, ${green}, ${blue})`;
}
