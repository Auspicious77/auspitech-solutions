import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowRight, ChevronRight } from 'lucide-react'
import logo from '../assets/Auspitechlogo1.png'

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const footerLinks = {
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Services', path: '/services' },
    { label: 'Our Products', path: '/products' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ],
  Services: [
    { label: 'Brand Identity', path: '/services' },
    { label: 'Graphic Design', path: '/services' },
    { label: 'Web Development', path: '/services' },
    { label: 'Mobile Apps', path: '/services' },
    { label: 'Designer Outsourcing', path: '/services' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy dark:bg-[#060910] text-warm-white">
      {/* CTA Banner */}
      <div className="bg-cobalt diagonal-bottom relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-2">
                Ready to Build Something Great?
              </h2>
              <p className="text-white/70 font-body text-lg">
                Let's transform your vision into a powerful brand or digital product.
              </p>
            </div>
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-colors btn-shimmer whitespace-nowrap text-base font-body flex-shrink-0"
            >
              Let's Talk
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-20 w-32 h-32 bg-white/5 rounded-full translate-y-16" />
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <img src={logo} alt="Auspitech" className="h-10 w-auto" />
            </Link>
            <p className="text-warm-white/50 text-sm font-body leading-relaxed mb-6">
              Empowering brands and engineering solutions for businesses across Africa and beyond. Your growth is our mission.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cobalt transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cobalt transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-bold text-sm uppercase tracking-widest text-warm-white/40 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="flex items-center gap-1.5 text-warm-white/60 hover:text-cobalt text-sm font-body transition-colors group"
                    >
                      <ChevronRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-warm-white/40 mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-cobalt mt-0.5 flex-shrink-0" />
                <span className="text-warm-white/60 text-sm font-body">Lagos, Nigeria</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-cobalt mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@auspitech.com" className="text-warm-white/60 hover:text-cobalt text-sm font-body transition-colors">
                  hello@auspitech.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-cobalt mt-0.5 flex-shrink-0" />
                <a href="tel:+2348000000000" className="text-warm-white/60 hover:text-cobalt text-sm font-body transition-colors">
                  +234 800 000 0000
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-warm-white/60 text-xs font-body mb-3">Subscribe for updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cobalt transition-colors font-body min-w-0"
                />
                <button className="bg-cobalt text-white px-3 py-2 rounded-lg hover:bg-cobalt-light transition-colors flex-shrink-0">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-warm-white/30 text-sm font-body">
            © {year} Auspitech Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-warm-white/30 hover:text-warm-white/60 text-xs font-body transition-colors">Privacy Policy</a>
            <a href="#" className="text-warm-white/30 hover:text-warm-white/60 text-xs font-body transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
