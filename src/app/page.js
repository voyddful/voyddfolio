'use client'
import './globals.css'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Voyddfolio } from './components.js'
import { motion } from 'framer-motion'

export default function Home() {
  let pathname = usePathname()
  return (
    <div className="font-cormorant">
      <div
        className=" bg-gradient-to-b from-sky-300 to-gem-400" /*items-center rounded-2xl mx-auto px-2 container max-w-7xl sm:px-6 lg:px-8*/
      >
        <div className=" flex justify-center h-screen py-10 rounded-2xl items-center">
          <div className="my-5 w-[75%] bg-gradient-to-t from-gem-200 to-lemon-100 p-5 rounded-2xl content-center lg:my-0 mx-5">
            <h1 className="lg:text-7xl text-4xl text-center mb-10 text-gem-200 font-bold">
              From Nothing Emerges Something
            </h1>
            <h1
              className="lg:text-4xl text-xl text-amber-950 content-center text-wrap text-center" /*bg-gradient-to-bl from-sky-100 to-gem-300 p-5 content-center text-wrap text-center"*/
            >
              <Voyddfolio /> is a Web Development Agency, focused on improving
              the online presence of businesses and individuals through website
              production, advertising and marketing, and brand advancement.
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
