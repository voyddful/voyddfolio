'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'

export default function AuthButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <button
          className="hidden lg:flex content-center btn btn-ghost btn-lg items-center rounded-lg p-2 text-lg "
          onClick={() => signOut()}
        >
          <h1 className="mb-1 flex items-center content-center">
            {session?.user?.name}
          </h1>
          <img
            className=" w-16 h-16 ml-3 rounded-full"
            src={session?.user?.image}
          />
        </button>
      </>
    )
  }
  return (
    <>
      <button
        className="flex content-center items-center rounded-lg p-2 text-lg  hover:bg-gray-200  dark:hover:bg-gray-700"
        onClick={() => signIn()}
      >
        <h1 className="mb-1 flex items-center content-center">
          Employee Sign In
        </h1>
      </button>
    </>
  )
}
