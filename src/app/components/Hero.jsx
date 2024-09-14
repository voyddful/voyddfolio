import Link from 'next/link'
export default function Hero() {
  return (
    <div className="hero backdrop-blur-lg min-h-screen">
      <div className="hero-content backdrop-blur-none container min-w-[90%] text-center flex-col lg:flex-row">
        <Link
          href="/Products"
          className="w-[80%] transition-all hover:scale-105 lg:w-[60%] rounded-lg shadow-2xl"
        >
          <img
            src="/voyddfolio.png"
            alt="Voyddfolio Logo"
            className="rounded-2xl w-full"
          />
        </Link>

        <div>
          <h1 className="text-2xl md:text-5xl font-bold">
            Voyddfolio is now providing Portfolio Website Development!
          </h1>
          <p className="py-6">
            Order a Website by going to the{' '}
            <Link href="/Products" className="text-sky-100">
              Product
            </Link>{' '}
            page, and get connected with our Website Developer{' '}
            <span className="font-bold">De'Andre Randolph</span>
          </p>
          <Link
            href="/Products"
            className="btn-wide shadow-2xl transition hover:-translate-y-2 hover:scale-105 btn btn-lg btn-primary"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}
