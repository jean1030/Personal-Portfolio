import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home', sectionId: 'home' },
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Projects', href: '#projects', sectionId: 'projects' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
]

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className="fixed z-10 w-full">
      <div className="mx-auto flex items-center justify-between border border-white/10 bg-white/10 px-5 py-3 backdrop-blur">

        <a
          href="#home"
          className="text-xl font-bold text-white/90"
        >
          je-an.dev
        </a>

        <nav className="hidden sm:flex items-center gap-1 rounded-full border border-white/15 bg-white/10 p-0.5">
          {navItems.map((item) => (
            <a
              key={item.sectionId}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.sectionId)
              }}
              className={`nav-item ${
                activeSection === item.sectionId
                  ? "bg-white text-gray-900 hover:bg-white/80 hover:text-gray-900"
                  : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white sm:hidden"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="mt-3 rounded-2xl border border-white/10 bg-white/10 backdrop-blur sm:hidden ">
          {navItems.map((item) => (
            <a
              key={item.sectionId}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.sectionId)
                setMenuOpen(false)
              }}
              className={`block px-5 py-4 rounded-xl text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300 ${
                activeSection === item.sectionId
                  ? "bg-white text-gray-900 hover:bg-white/80 hover:text-gray-900"
                  : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
