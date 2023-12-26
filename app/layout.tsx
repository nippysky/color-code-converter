import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ContextColorProvider } from "@/lib/context/ColorContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Color Wizardry – Your Ultimate Color Conversion Hub!",
  description:
    "Unlock the magic of colors with Color Wizardry, your go-to web app for seamless HEX to RGB, CMYK conversions, and vice versa. Our intuitive tool empowers designers, developers, and color enthusiasts to effortlessly translate color codes, ensuring precision and creativity in every project.",
  applicationName: "Color Wizardry",
  creator: "NIPPY The Creator - NIPPYSKY",
  keywords: [
    "color conversion",
    "color code converter",
    "HEX to RGB",
    "RGB to HEX",
    "CMYK to HEX",
    "HEX to CMYK",
    "color translator",
    "color code tool",
    "color coding",
    "design palette",
    "web design colors",
    "graphic design tool",
    "color hex values",
    "RGB color codes",
    "CMYK color conversion",
    "digital color wizard",
    "color hex to RGB",
    "RGB to CMYK converter",
    "web development colors",
    "color code precision",
    "color spectrum",
    "vibrant palettes",
    "creative color coding",
    "designer toolkit",
    "color transformation",
    "color consistency",
    "color conversion online",
    "web app for designers",
    "color hex code wizardry",
    "digital color mastery",
    "effortless color conversion",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <ContextColorProvider>
        <body>{children}</body>
      </ContextColorProvider>
    </html>
  );
}
