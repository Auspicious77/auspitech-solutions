import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, ChevronRight } from 'lucide-react'
import logo from '../assets/Auspitechlogo1.png'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Services', path: '/services' },
  { label: 'Our Products', path: '/products' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '/contact' },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-warm-white/90 dark:bg-navy/90 backdrop-blur-md shadow-lg border-b border-cobalt/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img
                src={logo}
                alt="Auspitech"
                className={`h-10 w-auto transition-all duration-300 ${scrolled && !darkMode ? 'brightness-0' : 'brightness-100'}`}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium font-body transition-all duration-200 relative group ${
                      isActive
                        ? 'text-cobalt'
                        : scrolled
                        ? 'text-navy/70 dark:text-warm-white/70 hover:text-cobalt dark:hover:text-cobalt'
                        : 'text-white/80 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute bottom-0 left-4 right-4 h-0.5 bg-cobalt rounded-full"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${
                  scrolled
                    ? 'text-navy/60 dark:text-warm-white/60 hover:bg-cobalt/10'
                    : 'text-white/60 hover:text-white'
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <Link
                to="/contact"
                className="hidden lg:flex items-center gap-1.5 bg-cobalt text-white px-5 py-2.5 rounded-xl text-sm font-semibold font-body btn-shimmer hover:bg-cobalt-light transition-colors shadow-lg shadow-cobalt/25"
              >
                Get Started
                <ChevronRight size={15} />
              </Link>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  scrolled
                    ? 'text-navy dark:text-warm-white'
                    : 'text-white'
                }`}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 35 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-navy dark:bg-dark-card shadow-2xl lg:hidden flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <Link to="/">
                  <img src={logo} alt="Auspitech" className="h-9 w-auto" />
                </Link>
                <button onClick={() => setMenuOpen(false)} className="text-white/60 hover:text-white p-1">
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium font-body transition-all ${
                          isActive
                            ? 'bg-cobalt text-white'
                            : 'text-white/70 hover:bg-white/10 hover:text-white'
                        }`
                      }
                    >
                      {link.label}
                      <ChevronRight size={15} className="opacity-40" />
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer */}
              <div className="p-6 border-t border-white/10 space-y-3">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-cobalt text-white py-3 rounded-xl text-sm font-semibold font-body btn-shimmer"
                >
                  Get Started
                  <ChevronRight size={15} />
                </Link>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex items-center justify-center gap-2 w-full text-white/60 hover:text-white text-sm py-2 transition-colors"
                >
                  {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
