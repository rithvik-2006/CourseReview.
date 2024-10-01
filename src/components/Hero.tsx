"use client"

import { useState } from "react"
import { MoonIcon, SunIcon, StarIcon } from "@heroicons/react/24/solid"
import Button from "./button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const reviews = [
    { id: 1, course: "Introduction to Computer Science", rating: 4.5, review: "Excellent course for beginners. Challenging but rewarding." },
    { id: 2, course: "Advanced Mathematics", rating: 4.2, review: "Deep dive into complex topics. Professor is very knowledgeable." },
    { id: 3, course: "Modern Literature", rating: 4.8, review: "Engaging discussions and thought-provoking assignments." },
  ]

  return (
    
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black text-gray-100' : 'bg-gray-100 text-black'}`}>
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Course Reviews</h1>
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'} transition-colors duration-200`}
          >
            {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
          </button>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800 hover:bg-gray-750'
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <h2 className="text-xl font-semibold mb-2">{review.course}</h2>
              <div className="flex items-center mb-2">
                <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
                <span className="font-medium">{review.rating.toFixed(1)}</span>
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{review.review}</p>
            </div>
          ))}
        </div>
      </div>
      <motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="text-center mb-16"
>
  
  <Link href="/">
  <Button name="Home Page"/>
  </Link>
  
  
</motion.section>
    </div>
  )
}