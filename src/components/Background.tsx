"use client"
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { MoonIcon, SunIcon, StarIcon } from "@heroicons/react/24/solid"



import { useState } from "react"
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "./button";

export function BackgroundLinesDemo() {
    
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        
      
        <motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="text-center mb-16"
>
  <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
    Unleash the Power of Honest Course Reviews
  </h2>
  <p className="text-xl mb-8 text-gray-300">
    Make informed decisions about your academic journey
  </p>
  <Link href="/MainPage">
  <Button name="Get Started"/>
  </Link>
  
  
</motion.section>

        
    </BackgroundLines>
  );
}
