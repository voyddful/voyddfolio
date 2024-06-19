'use client'
import { usePathname } from 'next/navigation'
export default function aboutme() {
    let pathname = usePathname()
    return(
        <div className='text-center bg-sky-100 rounded-2xl'><h3>{pathname}</h3></div>
    )
}