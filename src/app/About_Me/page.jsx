import { Voyddfolio } from '../components'

export const metadata = {
  title: 'About Voyddful',
  description: "About voyddfolio's creator, voyddful",
}
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function personPage() {
  return (
    <section className=" min-h-screen">
      <div className="p-10 text-lemon-100 grid grid-cols-1 text-center gap-8  md:grid-cols-2">
        <div className="-mx-10 md:col-span-2  py-10 px-5 bg-gray-500/40 order-first  content-center  text-5xl">
          Enter Voyddful
        </div>
        <div className="bg-gray-500/40 min-h-96 rounded-lg">
          <div className="my-5 p-5 text-3xl">
            <p className="text-3xl">Deandre Randolph</p>
            <p className="text-xl text-lemon-400 mb-5">
              The Creator Of Voyddfolio
            </p>
            <p className="text-xl">
              I'm Deandre, a web developer, designer, and owner of{' '}
              <Voyddfolio />, a business based around advancing individuals and
              businesses web presence. I've been programming since the middle
              school, and rapidly increased my productivity and focused on a
              specific niche, Website Development. I am a highschool senior,
              planning on attended college for Computer Science and Software
              Engineering.
            </p>
          </div>
        </div>
        <div
          className={classNames(
            'bg-gray-500/40 p-5 order-first min-h-96 md:row-span-2 rounded-lg md:grid justify-center'
          )}
        >
          <img className="mb-5 rounded-xl" src="/suited_randolph.jpg" />
        </div>
        <div className="bg-gray-500/40 min-h-96  rounded-lg">
          <div className="my-5 p-5 text-lemon-100 text-4xl">
            <h1 className="text-4xl mb-5">More About Me:</h1>
            <p className="text-xl">
              I've been part of the National Honor Society, aswell as Beta Club
              and NSHSS. I have also been admitted to the African American
              Recognition Program by College Board and an applicant for the
              First Generation Recognition Program, also by College Board.{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
