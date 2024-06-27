'use client'
import { usePathname } from 'next/navigation'
import "./globals.css";
import Link from 'next/link'
import { Fragment } from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


export let navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'About Me', href: '/About_Me', current: false},
    { name: 'Projects', href: '/Projects', current: false },
    { name: 'Contact Me', href: '#', current: false },
  ]
/*console.log(navigation)
console.log(navigation[0])
console.log(navigation[0]['current'])*/

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Voyddful(){
    return(
        <span className="inline-flex items-baseline">
            <img src="/V-oyddfolio.svg" alt="" className="self-center w-5 h-5 mx-1" />
            <span className="text-gem-400">Voyddful</span>
        </span>
    )
}

export default function Navbar() {
  let pathname = usePathname()
  switch(pathname){
    case "/":
      navigation[1]['current'] = false
      navigation[2]['current'] = false
      navigation[3]['current'] = false
      navigation[0]['current'] = true
      break;
    case "/About_Me":
      navigation[1]['current'] = true
      navigation[2]['current'] = false
      navigation[3]['current'] = false
      navigation[0]['current'] = false
      break;
    case "/Projects":
        navigation[1]['current'] = false
        navigation[2]['current'] = true
        navigation[3]['current'] = false
        navigation[0]['current'] = false
  }
  

  
  
  
  return (
    <Disclosure as="nav" className=" sticky top-0 bg-gradient-to-r from-jet-300 from-25% to-jet-200">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl font-lg px-2 sm:px-6 lg:px-4">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <img
                      className="h-8 w-auto"
                      src="/V-oyddfolio.svg"
                      alt="Voyddfolio"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-jet-400 text-sky-200 hover:text-sky-100' : 'text-jet-100 hover:bg-jet-200 hover:text-sky-100',
                          'rounded-md px-3 py-2 lg:text-sm xl:text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : 'undefined'}
                      >
                        
                        {item.name}
                        
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className='text-jet-200 hover:bg-jet-200 hover:text-sky-100 text-center block rounded-md px-3 py-2 text-base font-medium'
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
