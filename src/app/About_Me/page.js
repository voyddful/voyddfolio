'use client'
import { usePathname } from 'next/navigation'
import { Voyddful } from '../components.js'
export default function aboutme() {
    let pathname = usePathname()
    return(
        <main className='font-cormorant '>
            <section className=''>
                <div className='p-10 text-lemon-100 md:grid text-center md:gap-8  md:grid-cols-2'>
                    <div className='-mx-10 md:col-span-2 py-10 bg-black/40  content-center  text-5xl'>The Face Behind The Name</div>
                    <div className='bg-black/40 min-h-96 rounded-lg'>
                        <div className='my-5 p-5 text-lemon-1 text-3xl'>Hello, I'm De'Andre Randolph, an ambitious Website Developer interested in creating websites for those who need them (for affordable prices)</div>
                        <ul>
                            <li className='text-xl'>I've Received Admission Into: <ul className='text-base my-2'>
                                <li>NHS</li>
                                <li>Beta Club</li>
                                <li>NSHSS</li>
                                </ul></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className='bg-black/40 p-5 min-h-96 md:row-span-2 rounded-lg md:grid justify-center'>
                        <div className='mb-5 text-lemon-1 text-5xl'>A Photo Of Me</div>
                        <img className='mb-5 rounded-xl hover:ring-2 hover:ring-gem-200/60 hover:ring-offset-4 hover:ring-offset-lemon-100/40' src="/suited_randolph.jpg"/>
                    </div>
                    <div className='bg-black/40 min-h-96 rounded-lg'>
                        <div className='my-5 text-lemon-1  text-5xl'>About Me</div>
                        <ul>
                            <li className='text-2xl'>Qualifications To Support Web Development: 
                                <ul className='text-lg my-2'>
                                    <li>CIW Site Development Associate Certification</li>
                                    <li>Extensive Portfolio</li>
                                    <li></li>
                                </ul>
                            </li>
                            <li>Honors:
                                <ul className='text-bast my-2'></ul>
                            </li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
            <div className='p-10 text-lemon-100 md:grid text-center md:gap-8 md:grid-cols-2'>
                    <div className='-mx-10 md:col-span-2 py-10 bg-black/40  content-center text-5xl'>The Face Behind The Name</div>
                    <div className='bg-black/40 min-h-96 rounded-lg'>
                        <div className='my-5 text-lemon-1  text-5xl'>Acheivements</div>
                        <ul>
                            <li className='text-xl'>I've Received Admission Into: <ul className='text-base my-2'>
                                <li>NHS</li>
                                <li>Beta Club</li>
                                <li>NSHSS</li>
                                </ul></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className='bg-black/40 min-h-96 rounded-lg'>
                        <div className='my-5 text-lemon-1  text-5xl'>Honors</div>
                        <ul>
                            <li className='text-xl'>Honors That I've Received: <ul className='text-base my-2'>
                                <li>inclusion in the International Baccalaureate</li>
                                <li></li>
                                <li>NSHSS</li>
                                </ul></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className='bg-black/40 min-h-96 rounded-lg'>
                        <div className='my-5 text-lemon-1  text-5xl'>Qualifications</div>
                        <ul>
                            <li className='text-xl'>Qualifications To Support Web Development: <ul className='text-base my-2'>
                                <li>CIW Site Development Associate Certification</li>
                                <li></li>
                                <li>NSHSS</li>
                                </ul></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}