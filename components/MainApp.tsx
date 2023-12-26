"use client";

import { useContextColor } from "@/lib/context/ColorContext";
import React, { useState } from "react";
import { IoCopy } from "react-icons/io5";

export default function MainApp() {
  const { randomColor } = useContextColor();
  const [colors, setColors] = useState({
    hex: "",
    rgb: "",
    cmyk: "",
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
              value={colors.hex || randomColor}
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
              className=" focus:outline-none py-1 w-full placeholder:tracking-wide placeholder:text-[0.85rem]"
            />
            <button className=" hover:opacity-75">
              <IoCopy size={20} />
            </button>
          </div>
        </div>

        {/* cymk */}
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
