import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/courses', label: 'CE Courses' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Only the Home hero photo is light enough for dark header text.
  // Every other page's top section is dark (dim hero overlay or plain
  // dark background), so light text is correct there even before scrolling.
  const overLightBg = pathname === '/' && !scrolled

  const textColor = overLightBg ? 'text-ink' : 'text-paper'
  const textDimColor = overLightBg ? 'text-ink/70' : 'text-paper-dim'
  const hoverColor = overLightBg ? 'hover:text-ink' : 'hover:text-paper'
  // Teal accent can't reliably hit 4.5:1 at small (12px) nav text size even
  // with a scrim behind a photo, so the active/accent nav state falls back to
  // solid ink (bold, for a visual cue) over the light hero. The logo mark is
  // large enough (24px) that amber-dim still clears 3:1 there, so it keeps
  // its color for brand consistency.
  const accentColor = overLightBg ? 'text-ink font-semibold' : 'text-amber'
  const logoAccentColor = overLightBg ? 'text-amber-dim' : 'text-amber'
  const barColor = overLightBg ? 'bg-ink' : 'bg-paper'

  return (
    <header
      className={`fixed top-9 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-ink/95 backdrop-blur-sm shadow-lg shadow-black/30 py-3' : 'bg-transparent py-6'
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <NavLink to="/" className={`font-display text-2xl tracking-tight transition-colors duration-300 ${textColor}`}>
          Docu<span className={`transition-colors duration-300 ${logoAccentColor}`}>Course</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative pb-1 transition-colors duration-300 ${isActive ? accentColor : `${textDimColor} ${hoverColor}`}`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-amber"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <NavLink
            to="/courses"
            className="rounded-full bg-amber px-5 py-2 text-ink font-mono text-xs uppercase tracking-widest hover:bg-amber-dim transition-colors"
          >
            Get Access
          </NavLink>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`block h-0.5 w-6 transition-all duration-300 ${barColor} ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 transition-all duration-300 ${barColor} ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 transition-all duration-300 ${barColor} ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-ink-soft"
          >
            <div className="flex flex-col gap-1 px-6 py-4 font-mono text-sm uppercase tracking-widest">
              {LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `py-3 border-b border-white/10 ${isActive ? 'text-amber' : 'text-paper-dim'}`}
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
