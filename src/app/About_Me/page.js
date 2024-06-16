'use client'
import { usePathname } from 'next/navigation'
export default function aboutme() {
    let pathname = usePathname()
    return(
        <h3>{pathname}</h3>
    )
}