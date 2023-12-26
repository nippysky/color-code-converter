export const getRandomHexColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";

  // Generate a random hex color code with 6 characters
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};
