'use client'
import { usePathname } from 'next/navigation'
import './globals.css'
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
import { motion } from 'framer-motion'

export let navigation = [
  { name: 'Home', href: '/', current: false, able: true },
  { name: 'About Me', href: '/About_Me', current: false, able: true },
  { name: 'Projects', href: '/Projects', current: false, able: true },
]
/*console.log(navigation)
console.log(navigation[0])
console.log(navigation[0]['current'])*/

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Voyddfolio() {
  return (
    <span className="inline-flex items-baseline">
      <img src="/V-oyddfolio.svg" alt="" className="self-center w-5 h-5 mx-1" />
      <span className="text-gem-400">Voyddfolio</span>
    </span>
  )
}

export default function Navbar() {
  let pathname = usePathname()
  switch (pathname) {
    case '/':
      navigation[1]['current'] = false
      navigation[2]['current'] = false

      navigation[0]['current'] = true
      break
    case '/About_Me':
      navigation[1]['current'] = true
      navigation[2]['current'] = false

      navigation[0]['current'] = false
      break
    case '/Projects':
      navigation[1]['current'] = false
      navigation[2]['current'] = true

      navigation[0]['current'] = false
      break
    //    case '/Products':
    //      navigation[1]['current'] = false
    //     navigation[2]['current'] = false
    //      navigation[3]['current'] = true
    //      navigation[0]['current'] = false
    //      break
  }

  return (
    <Disclosure as="nav" className="bg-jet-300">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl font-lg px-2 sm:px-6 lg:px-4">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                          item.current
                            ? 'bg-jet-400 text-sky-200 hover:text-sky-100'
                            : 'text-jet-100 hover:bg-jet-200 hover:text-sky-100',
                          item.able ? ' ' : 'pointer-events-none',
                          'rounded-md px-3 py-2 lg:text-sm xl:text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : 'undefined'}
                        aria-disabled={item.able ? 'true' : 'false'}
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
                  className="text-jet-200 w-full hover:bg-jet-200 hover:text-sky-100 text-center block rounded-md px-3 py-2 text-base font-medium"
                >
                  <Link
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}

export function Scroller({ children }) {
  return (
    <motion.div
      className="lg:grid my-5 lg:gap-8 lg:grid-cols-3 lg:col-span-3 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  )
}
export function Scrollers({ children }) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      {children}
    </motion.div>
  )
}
export function Button({ children }, link) {
  return (
    <motion.button
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}
      href="deandrerandolph.com"
    >
      {children}
    </motion.button>
  )
}
