'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
export default function TeamSection() {
  return (
    <section className="bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-200">
            Voyddfolio's Team
          </h2>
          <p className="font-light text-white lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the Team that brought Voyddfolio together.
          </p>
        </div>
        <div className="grid gap-6 mb-6 lg:mb-16 md:grid-cols-2">
          {team.map((member) => {
            const { Name, Alias, Mini_Bio, Specialization, Image, Socials } =
              member

            return (
              <Link href={`/About_Me/${Alias}`} className="" key={2}>
                <motion.div
                  key={1}
                  className=" bg-gray-50 rounded-lg h-full shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
                  whileHover={{ scale: 1.05 }}
                  whileTop={{ scale: 0.95 }}
                  transition={{ ease: 'easeInOut', duration: 0.25 }}
                >
                  <img
                    className="lg:h-full lg:min-w-96 rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src={Image}
                    alt={Alias}
                  />

                  <div className="p-5 mb-5">
                    <h3 className="text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">
                        {Name}/{Alias}
                      </a>
                    </h3>

                    <span className="text-gray-500 dark:text-gray-400">
                      Specialized in {Specialization}
                    </span>
                    <p className="mt-10 mb-4  font-light text-gray-500 dark:text-gray-400">
                      {Mini_Bio}
                    </p>
                    <ul className="flex space-x-4 sm:mt-0">
                      {Socials?.map((app) => {
                        return (
                          <li key={1}>
                            <a
                              href={app.Link}
                              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            >
                              <svg
                                className="w-10 h-10"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d={app.Icon}
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
