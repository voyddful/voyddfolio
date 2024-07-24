'use client'
import team from '../team.json'
import { useParams } from 'next/navigation'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function personPage() {
  const params = useParams()
  const beam = team.find((name) => name.Alias == params['name'])
  return (
    <section className=" min-h-screen">
      <div
        key={1}
        className="p-10 text-lemon-100 md:grid text-center md:gap-8  md:grid-cols-2"
      >
        <div className="-mx-10 md:col-span-2 py-10 bg-gray-500/40 order-first  content-center  text-5xl">
          Enter:{beam.Alias}
        </div>
        <div className="bg-gray-500/40 min-h-96 rounded-lg">
          <div className="my-5 p-5 text-lemon-1 text-3xl">
            <p className="text-3xl">{beam.Name}</p>
            <p className="text-xl">{beam.Biography}</p>
          </div>
        </div>
        <div
          className={classNames(
            beam.orientation ? 'order-first' : 'order-none',
            'bg-gray-500/40 p-5 min-h-96 md:row-span-2 rounded-lg md:grid justify-center'
          )}
        >
          <img
            className="mb-5 rounded-xl hover:ring-2 hover:ring-gem-200/60 hover:ring-offset-4 hover:ring-offset-lemon-100/40"
            src={beam.Image}
          />
        </div>
        <div className="bg-gray-500/40 min-h-96  rounded-lg">
          <div className="my-5 text-lemon-1  text-5xl">About Me</div>
          <ul>
            <li className="text-2xl">
              Qualifications To Support Web Development:
              <ul className="text-lg my-2">
                <li>CIW Site Development Associate Certification</li>
                <li>Extensive Portfolio</li>
                <li></li>
              </ul>
            </li>
            <li>
              Honors:
              <ul className="text-bast my-2"></ul>
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
