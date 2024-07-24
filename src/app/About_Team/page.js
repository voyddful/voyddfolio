'use client'
import { usePathname } from 'next/navigation'
import { Voyddfolio } from '../components.js'
import { Scrollers, Button } from '../components.js'
import team from './team.json'
import TeamSection from '../components/TeamSection.jsx'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function aboutme() {
  let pathname = usePathname()
  return (
    <main className="font-cormorant">
      <TeamSection />
    </main>
  )
}
