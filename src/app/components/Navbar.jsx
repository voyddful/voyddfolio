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
        <ul className="menu menu-horizontal px-1">
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
          <AdminSync />
        </ul>
      </div>
      <div className="flex-none">
        <AuthButton />
      </div>
    </div>
  )
}
