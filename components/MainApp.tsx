"use client";

import { setRandomColor } from "@/lib/redux/action";
import { rgbStringToHex } from "@/lib/utils/rgbToHex";
import React, { useEffect, useState } from "react";
import { IoCopy } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

export default function MainApp() {
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
    if (
      (colors.hex.length === 4 || colors.hex.length === 7) &&
      /^[0-9A-F#]+$/i.test(colors.hex)
    ) {
      dispatch(setRandomColor(colors.hex));
    }
  }, [colors]);

  const handlergbFocus = () => {
    const isValidRGB = (value: string) => {
      const rgbRegex = /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/;

      return rgbRegex.test(value);
    };

    if (isValidRGB(colors.rgb)) {
      const hexColor = rgbStringToHex(colors.rgb);
      dispatch(setRandomColor(hexColor));
    }
  };

  return (
    <main className="w-full h-[80%] flex justify-center items-center bg-transparent lg:px-96 px-5 sm:px-14 md:px-36">
      <div className=" rounded-xl bg-white p-5 shadow-md w-full">
        {/* INPUTS */}
        {/* Hex */}
        <div className="flex flex-col mb-8">
          <label className="text-gray-400 mb-1 text-[0.7rem]">
            HEX eg: #ffffff
          </label>
          <div className="relative flex items-center border-b border-black">
            <input
              type="text"
              name="hex"
              placeholder="Enter value or refresh"
              value={colors.hex}
              onChange={handleChange}
              className=" focus:outline-none py-1 w-full placeholder:tracking-wide placeholder:text-[0.85rem]"
            />
            <button className=" hover:opacity-75">
              <IoCopy size={20} />
            </button>
          </div>
        </div>

        {/* Rgb */}
        <div className="flex flex-col mb-8">
          <label className="text-gray-400 mb-1 text-[0.7rem]">
            RGB eg: rgb(255,255,255)
          </label>
          <div className="relative flex items-center border-b border-black">
            <input
              type="text"
              name="rgb"
              placeholder="Enter value or refresh"
              value={colors.rgb}
              onChange={handleChange}
              onFocus={handlergbFocus}
              className=" focus:outline-none py-1 w-full placeholder:tracking-wide placeholder:text-[0.85rem]"
            />
            <button className=" hover:opacity-75">
              <IoCopy size={20} />
            </button>
          </div>
        </div>

        {/* cmyk */}
        <div className="flex flex-col mb-8">
          <label className="text-gray-400 mb-1 text-[0.7rem]">
            CYMK eg: cmyk(0,0,0,0)
          </label>
          <div className="relative flex items-center border-b border-black">
            <input
              type="text"
              name="cmyk"
              placeholder="Enter value or refresh"
              value={colors.cmyk}
              onChange={handleChange}
              className=" focus:outline-none py-1 w-full placeholder:tracking-wide placeholder:text-[0.85rem]"
            />
            <button className=" hover:opacity-75">
              <IoCopy size={20} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
