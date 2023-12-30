import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const randomColor: string = useSelector(
    (state: any) => state.color.randomColor
  );

  return (
    <header className="w-full h-[5%] py-7 flex items-center justify-between px-5 bg-white md:rounded-md rounded-none">
      <div
        className="font-black md:text-xl text-lg"
        style={{ color: randomColor }}
      >
        COLOR WIZARDRY
      </div>
      <div></div>
    </header>
  );
}
