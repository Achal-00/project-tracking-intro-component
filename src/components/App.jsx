import React from "react";
import Navbar from "./Navbar/Navbar";
import HeroImage from "./HeroImage/HeroImage";
import Content from "./Content/Content";

export default function App() {
  return (
    <div className="min-h-[100dvh] grid grid-cols-2 grid-rows-[0.1fr_0.8fr_1fr] text-custom-font relative landscape:grid-rows-[0.1fr_0.9fr]">
      <Navbar />
      <div className="absolute top-0 right-0 w-[50dvw] h-[50dvh] bg-light-greyish-blue rounded-bl-[5em] z-0"></div>
      <HeroImage />
      <Content />
    </div>
  );
}
