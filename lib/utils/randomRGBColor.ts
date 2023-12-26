export function getRandomRGBColor(existingHexColor: string): string {
  // Convert the hex color to RGB
  const hexToRgb = (hex: string): number[] => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  };

  const [existingR, existingG, existingB] = hexToRgb(existingHexColor);

  // Generate random RGB offsets
  const randomOffset = () => Math.floor(Math.random() * 51) - 25;

  const randomR = existingR + randomOffset();
  const randomG = existingG + randomOffset();
  const randomB = existingB + randomOffset();

  // Ensure the values are within the valid RGB range (0-255)
  const clamp = (value: number) => Math.max(0, Math.min(255, value));

  const finalR = clamp(randomR);
  const finalG = clamp(randomG);
  const finalB = clamp(randomB);

  // Convert the final RGB values to a CSS color string
  const rgbColor = `rgb(${finalR}, ${finalG}, ${finalB})`;

  return rgbColor;
}
