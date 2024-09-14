import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import AuthButton from './Authbutton'
import AdminSync from '../components/AdminSync'

export let navigation = [
  { name: 'Home', href: '/', current: false, able: true },
  { name: 'About Me', href: '/About_Me', current: false, able: true },
  { name: 'Projects', href: '/Projects', current: false, able: true },
  { name: 'Products', href: '/Products', current: false, able: true },
]

export default function Navbar() {
  let session = getServerSession()
  return (
    <div className="navbar font-space bg-neutral">
      <div className="flex-1">
        <div className="lg:hidden dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navigation.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/"
          className="flex btn btn-ghost flex-shrink-0 items-center"
        >
          <img
            className="h-8 inline-block mx-2 w-auto"
            src="/V-oyddfolio.svg"
            alt="Voyddfolio"
          />
          <span className=" font-bold  text-2xl">Voyddfolio</span>
        </Link>
        <ul className=" hidden lg:block menu menu-horizontal px-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={
                'text-jet-100 mx-2 hover:bg-jet-200 hover:text-sky-100 rounded-md px-3 btn btn-ghost py-2 lg:text-sm xl:text-base font-medium'
              }
              aria-current={item.current ? 'page' : 'undefined'}
              aria-disabled={item.able ? 'true' : 'false'}
            >
              {item.name}
            </Link>
          ))}
          <div className="hidden">
            <AdminSync />
          </div>
        </ul>
      </div>
      <div className="flex-none">
        <div className="hidden lg:block">
          <AuthButton />
        </div>
      </div>
    </div>
  )
}
