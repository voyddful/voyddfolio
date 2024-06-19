'use client'
import "./globals.css"
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Home() {
  let pathname = usePathname()
  return (
    <div className="font-space text-amber-900">
      <div className=" bg-gradient-to-bl from-sky-300 to-gem-400" /*items-center rounded-2xl mx-auto px-2 container max-w-7xl sm:px-6 lg:px-8*/ >
        <div className=" lg:grid lg:grid-cols-2 py-10 rounded-2xl items-center">
          <div className="my-5 bg-gradient-to-tl from-gem-400 to-lemon p-5 rounded-2xl bg-opacity-100 content-center lg:my-0 mx-5">
            <h1 className="text-2xl rounded-2xl content-center text-wrap text-center" /*bg-gradient-to-bl from-sky-100 to-gem-300 p-5 content-center text-wrap text-center"*/>
            The Enigmatic Library: In the heart of a forgotten forest, there stands an ancient library. Its walls, adorned with ivy and secrets, seem to whisper to those who approach. The librarian, an ageless figure with silver hair and eyes like forgotten constellations, guards the knowledge within. Visitors arrive seeking answers to questions they haven’t yet formed—their footsteps echoing through the hallowed halls. Each book holds a universe, and the pages breathe with stories of lost civilizations, forbidden spells, and the taste of stardust.

            </h1>
          </div> 
          <div className="justify-center flex">
            <img
         
            alt="logo"
            className=" rounded-2xl bg-gradient-to-br from-lemon to-gem-400 p-5"
            src="/webdev.png"
            width="80%"
            height="80%"
          
            />
          </div>

          
        </div>
        <div className="p-10 bg-jet-100 backdrop-blur-lg"></div>
        
      </div>
    </div>
  );
}
