"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainApp from "@/components/MainApp";
import { useContextColor } from "@/lib/context/ColorContext";

export default function Home() {
  const { randomColor } = useContextColor();
  return (
    <section
      className="w-full h-screen"
      style={{ backgroundColor: randomColor }}
    >
      <div className="max-w-7xl mx-auto p-2 h-full flex flex-col gap-10 justify-between">
        {/* Header */}
        <Header />

        {/* Main App */}
        <MainApp />

        {/* Footer */}
        <Footer />
      </div>
    </section>
  );
}
