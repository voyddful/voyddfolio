import Link from 'next/link'
import Scroller from '../components/Scroller'
import projects from './projects.json'

export const metadata = {
  title: 'Projects',
  description: 'Websites made by Voyddfolio',
}

export default function Projects() {
  return (
    <main className=" font-serif">
      <section className="bg-gray-800">
        {/*each projest thing */}

        <div className=" p-10 text-lemon-100 md:grid md:gap-8  md:grid-cols-3">
          <div className="-mx-10 md:col-span-3 text-center py-10 bg-black/40  content-center  text-5xl">
            My Projects
          </div>

          {projects.map((project) => {
            const { Name, Descript, link, Img } = project
            return (
              <Scroller key={1}>
                <div className="min-h-72 rounded-t-2xl lg:rounded-2xl bg-black/40">
                  <img
                    className="rounded-t-2xl lg:rounded-2xl "
                    width={'100%'}
                    src={Img}
                  />
                </div>
                <div className="min-h-72 p-10 lg:col-span-2 rounded-b-2xl lg:rounded-2xl bg-black/40">
                  <h1 className=" mb-5 text-4xl">{Name}</h1>
                  <p className="text-xl mb-5">{Descript}</p>

                  <Link
                    href={link}
                    className="btn transition hover:scale-105  lg:btn-wide btn-lg btn-success text-white"
                  >
                    Visit {Name}
                  </Link>
                </div>
              </Scroller>
            )
          })}
        </div>
      </section>
    </main>
  )
}
