"use client"

import { useState } from "react"


export default function Navbar() {
    return (
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tighter">
            <span className="text-blue-600">Course</span>Pulse
          </h1>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Courses</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Professors</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Login</a>
            {/* <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'} transition-colors duration-200`}
            >
              {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button> */}
          </div>
        </div>
      );
}