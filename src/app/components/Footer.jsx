import Link from 'next/link'
import { getServerSession } from 'next-auth'
export default async function Footer() {
  let session = await getServerSession()
  return (
    <footer className="footer bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
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
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link className="btn btn-ghost" href="/About_Me">
          About Me
        </Link>
        <Link className="btn btn-ghost" href="/Projects">
          Projects
        </Link>
        <Link className="btn btn-ghost" href="/Products">
          Products
        </Link>

        <Link
          className="hidden lg:block btn btn-ghost"
          href="https://x.com/Voyddfolio"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
          </svg>
        </Link>
        <Link
          className="hidden lg:block btn btn-ghost"
          href="mailto:voyddfolio@gmail.com"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
          </svg>
        </Link>
      </nav>
    </footer>
  )
}
