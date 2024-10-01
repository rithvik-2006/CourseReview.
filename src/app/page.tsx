"use client";
import { BackgroundLinesDemo } from "@/components/Background";
import { useState } from "react";

import { SunIcon, MoonIcon } from "lucide-react";
import Navbar from "@/components/navbar";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`dark h-screen bg-black text-white`}>
      <Navbar/>
      <BackgroundLinesDemo />
      
    </div>
  );
}
