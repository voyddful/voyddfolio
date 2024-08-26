'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import Link from 'next/link'

export default function AdminSync() {
  const { data: session } = useSession()
  if (session?.user?.name == "De'Andre Randolph") {
    return (
      <Link
        className={
          'text-jet-100 mx-2 hover:bg-jet-200 hover:text-sky-100 rounded-md px-3 btn btn-ghost py-2 lg:text-sm xl:text-base font-medium'
        }
        href="/Admin"
      >
        Admin Dashboard
      </Link>
    )
  }
  return <></>
}
