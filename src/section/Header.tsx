import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home', sectionId: 'home' },
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Projects', href: '#projects', sectionId: 'projects' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
]

export default function Header() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId)
    if (!target) return

    const headerOffset = 110
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset

    window.scrollTo({ top: targetTop, behavior: 'smooth' })
    setActiveSection(sectionId)
  }

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.sectionId))
        .filter((section): section is HTMLElement => section !== null)

      if (!sections.length) return

      const isNearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2

      if (isNearBottom) {
        setActiveSection(sections[sections.length - 1].id)
        return
      }

      const activationLine = window.scrollY + window.innerHeight * 0.35
      let currentSection = sections[0].id

      for (let index = 0; index < sections.length; index += 1) {
        const section = sections[index]
        const nextSectionTop = sections[index + 1]?.offsetTop ?? Number.POSITIVE_INFINITY

        if (activationLine >= section.offsetTop && activationLine < nextSectionTop) {
          currentSection = section.id
          break
        }
      }

      setActiveSection(currentSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection)
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
  <header className="z-10 fixed w-full flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5 bg-white/5">
    <a href="#home" className='text-center text-xl font-bold text-white/90 sm:text-left sm:text-2xl'>je-an.dev</a>
    <nav className='flex w-full flex-wrap items-center justify-center gap-1 rounded-2xl border border-white/15 bg-white/10 p-1 text-sm text-white/80 backdrop-blur sm:w-auto sm:rounded-full sm:p-0.5'>
      {navItems.map((item) => (
        <a
          key={item.sectionId}
          href={item.href}
          onClick={(event) => {
            event.preventDefault()
            scrollToSection(item.sectionId)
          }}
          className={`nav-item ${activeSection === item.sectionId ? 'bg-white text-gray-900 hover:bg-white/80 hover:text-gray-900' : ''}`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  </header>
  )
}
