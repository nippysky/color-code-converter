"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainApp from "@/components/MainApp";
import { setRandomColor } from "@/lib/redux/action";
import { getRandomHexColor } from "@/lib/utils/colorConversion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  //@ts-ignore
  const randomColor = useSelector((state) => state.color.randomColor);
  //@ts-ignore
  const isColorSet = useSelector((state) => state.color.isColorSet);

  useEffect(() => {
    const color = getRandomHexColor();

    // Dispatch action to set the random color in Redux
    dispatch(setRandomColor(color));
  }, [dispatch]);

  return isColorSet ? (
    <section
      className="w-full h-screen"
      style={{ backgroundColor: randomColor }}
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col gap-10 justify-between">
        {/* Header */}
        <Header />

        {/* Main App */}
        <MainApp />

        {/* Footer */}
        <Footer />
      </div>
    </section>
  ) : null;
}
