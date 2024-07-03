'use client'
import "./globals.css"
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Voyddful } from './components.js'
import { motion } from 'framer-motion'

export default function Home() {
  let pathname = usePathname()
  return (
    <div className="font-space text-amber-900">
      <div className=" bg-gradient-to-b from-sky-300 to-gem-400" /*items-center rounded-2xl mx-auto px-2 container max-w-7xl sm:px-6 lg:px-8*/ >
        
          
          
            <motion.div className=" lg:grid lg:grid-cols-2 py-10 rounded-2xl items-center" initial="hidden" animate="visible" variants={{
              hidden: {
                scale: .4,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0
                }
              },
            }}>
              <div className="my-5 bg-gradient-to-t from-gem-200 to-lemon-100 p-5 rounded-2xl bg-opacity-100 content-center lg:my-0 mx-5">
                <h1 className="text-5xl text-center mb-10 text-gem-200 font-bold"><code>From Nothing Emerges Something</code></h1>
                <h1 className="text-2xl content-center text-wrap text-center" /*bg-gradient-to-bl from-sky-100 to-gem-300 p-5 content-center text-wrap text-center"*/>
                <Voyddful/> is a Website Developer
                </h1>
              </div>
              <div className="justify-center flex">
                <img
            
                alt="logo"
                className=" rounded-2xl bg-gradient-to-t from-gem-200 to-lemon-100 p-5"
                src="/webdev.png"
                width="80%"
                height="80%"
              
                />
              </div>
            </motion.div>
             
             
          
          

          
        
      </div>
      <div className=" bg-jet-100 h-10"></div>
      <div className=" bg-gem-400"> stuff</div>
    </div>
   
  );
}
