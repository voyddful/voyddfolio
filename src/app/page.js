'use client'
import "./globals.css"
import navigation from './navbar.js'
import { usePathname } from 'next/navigation'

export default function Home() {
  let pathname = usePathname()
  return (
    <main className="font-space container mx-auto text-amber-900">
      <div className="m-12 py-12 rounded-2xl bg-sky-200" /*items-center rounded-2xl mx-auto px-2 container max-w-7xl sm:px-6 lg:px-8*/ >
        <div className=" m-3 columns-lg flex justify-evenly rounded-2xl items-center">
          <h1 className="m-5 text-2xl rounded-2xl bg-gem-100 p-5 content-center text-wrap text-center">heyyyyy</h1>
          <h1 className="m-5 text-2xl rounded-2xl bg-gem-200 p-5 content-center text-wrap text-center">heyyyyy</h1>
          <h1 className="m-5 text-2xl rounded-2xl bg-gem-300 p-5 content-center text-wrap text-center">heyyyyy</h1>
          <h1 className="m-5 text-2xl rounded-2xl bg-gem-400 p-5 content-center text-wrap text-center">heyyyyy</h1>
          <h1 className="m-5 text-2xl rounded-2xl bg-gem-500 p-5 content-center text-wrap text-center">heyyyyy</h1>
          {/*<img
          alt="logo"
          className="m-5 rounded-2xl bg-gem-400 p-5 content-center"
          src="/webdev.png"

          />*/}
        </div>
        
      </div>
    </main>
  );
}
