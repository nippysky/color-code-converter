"use client";

import { setRandomColor } from "@/lib/redux/action";
import {
  cmykToHex,
  cmykToRgb,
  hexToCmyk,
  hexToRgb,
  isRGBColorCode,
  isValidCmykColorCode,
  rgbStringToHex,
  rgbToCmyk,
} from "@/lib/utils/colorConversion";
import { handleCopy } from "@/lib/utils/copyToClipboard";
import React, { useEffect, useState } from "react";
import { IoCopy, IoCheckmarkDone } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

export default function MainApp() {
  const [iconClicked, setIconClicked] = useState([false, false, false]);

  const dispatch = useDispatch();
  // @ts-ignore
  const randomColor: string = useSelector((state) => state.color.randomColor);
  //@ts-ignore
  const rgbColor: string = useSelector((state) => state.color.rgbColor);
  //@ts-ignore
  const cmykColor: string = useSelector((state) => state.color.cmykColor);

  const [colors, setColors] = useState({
    hex: randomColor,
    rgb: rgbColor,
    cmyk: cmykColor,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setColors((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (colors.hex.length === 7 && /^[0-9A-F#]+$/i.test(colors.hex)) {
      const rgbColor = hexToRgb(colors.hex);
      const cmykColor = hexToCmyk(colors.hex);
      setColors({ ...colors, rgb: rgbColor!, cmyk: cmykColor! });
      dispatch(setRandomColor(colors.hex));
    }
  }, [colors.hex]);

  useEffect(() => {
    if (isRGBColorCode(colors.rgb)) {
      const hexColor = rgbStringToHex(colors.rgb);
      const cmykColor = rgbToCmyk(colors.rgb);
      setColors({ ...colors, hex: hexColor!, cmyk: cmykColor! });
      dispatch(setRandomColor(hexColor));
    }
  }, [colors.rgb]);

  useEffect(() => {
    if (isValidCmykColorCode(colors.cmyk)) {
      const hexColor = cmykToHex(colors.cmyk);
      const rgbColor = cmykToRgb(colors.cmyk);
      setColors({ ...colors, hex: hexColor!, rgb: rgbColor! });
      dispatch(setRandomColor(hexColor));
    }
  }, [colors.cmyk]);

  const handleIconClick = (index: number) => {
    // Create a copy of the current state array
    const updatedIconClicked = [...iconClicked];

    // Set the clicked state to true for the specific button
    updatedIconClicked[index] = true;

    // Update the state with the new array
    setIconClicked(updatedIconClicked);

    // Use setTimeout to reset the clicked state after 2000 milliseconds (2 seconds)
    setTimeout(() => {
      // Create another copy of the array to avoid mutating state directly
      const resetIconClicked = [...updatedIconClicked];

      // Reset the clicked state to false for the specific button
      resetIconClicked[index] = false;

      // Update the state with the new array
      setIconClicked(resetIconClicked);
    }, 1000);
  };

  return (
    <main className="w-full h-[90%] flex justify-center items-center bg-transparent lg:px-96 px-5 sm:px-14 md:px-36">
      <div className=" rounded-xl bg-white p-5 shadow-md w-full">
        {/* INPUTS */}
        {/* Hex */}
        <div className="flex flex-col mb-8">
          <label className="text-gray-400 mb-1 text-[0.7rem]">
            HEX eg: #ffffff
          </label>
          <div
            className={`relative flex items-center`}
            style={{
              borderBottom: `1px solid ${
                randomColor === "#FFFFFF" ? "#000" : randomColor
              }`,
            }}
          >
            <input
              type="text"
              name="hex"
              placeholder="Enter value or refresh"
              value={colors.hex}
              onChange={handleChange}
              // onFocus={() => setColors({ ...colors, hex: "" })}
              className=" focus:outline-none py-1 w-full placeholder:tracking-wide placeholder:text-[0.85rem]"
            />
            <button
              className=" hover:opacity-75"
              onClick={() => {
                handleCopy(colors.hex);
                handleIconClick(0);
              }}
            >
              {iconClicked[0] ? (
                <IoCheckmarkDone
                  size={20}
                  color={randomColor === "#FFFFFF" ? "#000" : randomColor}
                />
              ) : (
                <IoCopy
                  size={20}
                  color={randomColor === "#FFFFFF" ? "#000" : randomColor}
                />
              )}
            </button>
          </div>
        </div>

        {/* Rgb */}
        <div className="flex flex-col mb-8">
          <label className="text-gray-400 mb-1 text-[0.7rem]">
            RGB eg: rgb(255,255,255)
          </label>
          <div
            className={`relative flex items-center`}
            style={{
              borderBottom: `1px solid ${
                randomColor === "#FFFFFF" ? "#000" : randomColor
              }`,
            }}
          >
            <input
              type="text"
              name="rgb"
              placeholder="Enter value or refresh"
              value={colors.rgb}
              onChange={handleChange}
              // onFocus={() => setColors({ ...colors, rgb: "" })}
              className=" focus:outline-none py-1 w-full placeholder:tracking-wide placeholder:text-[0.85rem]"
            />
            <button
              className=" hover:opacity-75"
              onClick={() => {
                handleCopy(colors.rgb);
                handleIconClick(1);
              }}
            >
              {iconClicked[1] ? (
                <IoCheckmarkDone
                  size={20}
                  color={randomColor === "#FFFFFF" ? "#000" : randomColor}
                />
              ) : (
                <IoCopy
                  size={20}
                  color={randomColor === "#FFFFFF" ? "#000" : randomColor}
                />
              )}
            </button>
          </div>
        </div>

        {/* cmyk */}
        <div className="flex flex-col mb-8">
          <label className="text-gray-400 mb-1 text-[0.7rem]">
            CMYK eg: cmyk(0%,0%,0%,0%)
          </label>
          <div
            className={`relative flex items-center`}
            style={{
              borderBottom: `1px solid ${
                randomColor === "#FFFFFF" ? "#000" : randomColor
              }`,
            }}
          >
            <input
              type="text"
              name="cmyk"
              placeholder="Enter value or refresh"
              value={colors.cmyk}
              onChange={handleChange}
              // onFocus={() => setColors({ ...colors, cmyk: "" })}
              className=" focus:outline-none py-1 w-full placeholder:tracking-wide placeholder:text-[0.85rem]"
            />
            <button
              className=" hover:opacity-75"
              onClick={() => {
                handleCopy(colors.cmyk);
                handleIconClick(2);
              }}
            >
              {iconClicked[2] ? (
                <IoCheckmarkDone
                  size={20}
                  color={randomColor === "#FFFFFF" ? "#000" : randomColor}
                />
              ) : (
                <IoCopy
                  size={20}
                  color={randomColor === "#FFFFFF" ? "#000" : randomColor}
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
