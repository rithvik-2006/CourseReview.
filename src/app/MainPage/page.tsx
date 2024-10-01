"use client"

import Hero from "@/components/Hero"
import Navbar from "@/components/navbar"

export default function MainPage() {
    return (
        <div className="dark h-screen bg-black text-white">
           <Navbar/>
           <Hero/>
        </div>
    )
}