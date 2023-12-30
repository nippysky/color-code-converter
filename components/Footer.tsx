import React from "react";
import { useSelector } from "react-redux";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const randomColor: string = useSelector(
    (state: any) => state.color.randomColor
  );

  return (
    <footer className="w-full h-[5%] py-7 flex flex-col md:flex-row items-center justify-center md:justify-between px-5 bg-white md:rounded-md rounded-none">
      <div className="text-[0.8rem]">
        Developed by{" "}
        <span style={{ color: randomColor }} className="font-black">
          Chukwudubem Osegbe
        </span>
      </div>

      <div className="text-[0.8rem]">
        Property Of{" "}
        <span style={{ color: randomColor }} className="font-black">
          NIPPYSKY
        </span>{" "}
        © {currentYear}
      </div>
    </footer>
  );
}
