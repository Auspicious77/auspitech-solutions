import { useState } from 'react'
import { motion } from 'framer-motion'
import { Bell, Cpu, Zap, ArrowRight, Check } from 'lucide-react'

function CountdownTimer({ targetDate }) {
  const [time] = useState(() => {
    const now = new Date()
    const target = new Date(targetDate)
    const diff = Math.max(0, target - now)
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)
    return { days, hours, minutes, seconds }
  })

  return (
    <div className="flex items-center justify-center gap-3 my-6">
      {[
        { value: time.days, label: 'Days' },
        { value: time.hours, label: 'Hrs' },
        { value: time.minutes, label: 'Min' },
        { value: time.seconds, label: 'Sec' },
      ].map(({ value, label }, i) => (
        <div key={label} className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center border border-white/15">
              <span className="font-display font-bold text-xl text-white">
                {String(value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-warm-white/40 text-[10px] font-body mt-1">{label}</span>
          </div>
          {i < 3 && <span className="text-warm-white/30 font-bold text-lg mb-4">:</span>}
        </div>
      ))}
    </div>
  )
}

function EmailCapture({ placeholder = 'Enter your email address' }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.includes('@')) setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 px-5 py-3 rounded-xl text-sm font-body"
      >
        <Check size={16} />
        You're on the list! We'll notify you at launch.
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        required
        className="flex-1 bg-white/10 border border-white/15 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-cobalt transition-colors min-w-0"
      />
      <button
        type="submit"
        className="bg-cobalt text-white px-4 py-3 rounded-xl flex-shrink-0 hover:bg-cobalt-light transition-colors"
        aria-label="Notify me"
      >
        <Bell size={16} />
      </button>
    </form>
  )
}

const gadgetFeatures = [
  'Laptops directly imported from China & the UK',
  'Competitive prices — no middlemen, no markups',
  'Available online and in physical stores',
  'Global distribution with fast local delivery',
]

const aveztFeatures = [
  'Invest in palm oil, maize, cocoa, livestock & more',
  'Minimum 2-month investment cycles, up to 1 year',
  '20% commission-based ROI model',
  'Real-time price tracking & automated payouts',
  'KYC-verified, secure wallet management',
]

export default function Products() {
  return (
    <div className="bg-navy min-h-screen">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 overflow-hidden grain-overlay">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cobalt/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/10 rounded-full filter blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-cobalt font-body text-sm font-semibold uppercase tracking-widest mb-4"
          >
            In The Pipeline
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl lg:text-6xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight"
          >
            What We're <span className="gold-gradient">Building</span> Next
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-warm-white/60 font-body text-lg max-w-xl mx-auto"
          >
            Beyond services, we're building our own products. Two launches are imminent — sign up to be first in line.
          </motion.p>
        </div>
      </section>

      {/* ── PRODUCTS ─────────────────────────────────────────── */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">

          {/* Auspitech Gadgets */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-dark-card"
          >
            {/* Badge */}
            <div className="absolute top-6 right-6 z-10">
              <span className="badge-pulse inline-flex items-center gap-1.5 bg-gold/20 border border-gold/40 text-gold text-xs font-semibold font-body px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                Coming Soon
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 lg:h-auto min-h-[280px] overflow-hidden rounded-tl-3xl rounded-tr-3xl lg:rounded-tl-3xl lg:rounded-bl-3xl lg:rounded-tr-none">
                <img
                  src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=700&h=500&fit=crop"
                  alt="Auspitech Gadgets"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-card/0 to-dark-card/60 lg:bg-gradient-to-r lg:from-dark-card/0 lg:to-dark-card/80" />
                {/* Floating icon */}
                <div className="absolute bottom-6 left-6 w-12 h-12 bg-cobalt rounded-xl flex items-center justify-center shadow-lg shadow-cobalt/30">
                  <Cpu size={22} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h2 className="font-display text-3xl font-bold text-white mb-1">Auspitech Gadgets</h2>
                    <p className="text-cobalt font-body text-sm font-medium">Electronics & Laptops</p>
                  </div>
                </div>

                <p className="text-warm-white/65 font-body leading-relaxed mb-6">
                  Auspitech Gadgets is a premier electronics retail business offering high-quality laptops and gadgets at highly competitive prices. We import directly from manufacturers in China and the UK — cutting out the middlemen — and distribute globally through both physical stores and an online platform.
                </p>

                <ul className="space-y-2 mb-6">
                  {gadgetFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-warm-white/70 font-body">
                      <span className="w-1.5 h-1.5 bg-cobalt rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <CountdownTimer targetDate="2026-09-01" />

                <div>
                  <p className="text-warm-white/50 text-xs font-body mb-3">Get notified at launch</p>
                  <EmailCapture placeholder="Your email address" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Avezt */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative overflow-hidden rounded-3xl border border-gold/20 bg-dark-card"
            style={{ background: 'linear-gradient(135deg, #0F1535 0%, #141836 50%, #1a1028 100%)' }}
          >
            {/* Badge */}
            <div className="absolute top-6 right-6 z-10">
              <span className="badge-pulse inline-flex items-center gap-1.5 bg-gold/20 border border-gold/40 text-gold text-xs font-semibold font-body px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                Coming Soon
              </span>
            </div>

            {/* Decorative orb */}
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full filter blur-3xl opacity-20"
              style={{ background: 'radial-gradient(circle, #F0A500, transparent 70%)' }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Content first on desktop for reversed layout */}
              <div className="p-8 lg:p-10 flex flex-col justify-center order-2 lg:order-1">
                <div className="mb-3">
                  <h2 className="font-display text-3xl font-bold text-white mb-1">Avezt</h2>
                  <p className="text-gold font-body text-sm font-medium">Digital Agriculture Investment Platform</p>
                </div>

                <p className="text-warm-white/65 font-body leading-relaxed mb-6">
                  Avezt democratizes agricultural investment by connecting retail investors with Nigerian agricultural commodities — palm oil, palm kernel oil, yam, maize, cocoa, livestock, and poultry — through a mobile application. With low entry barriers, real-time performance tracking, secure wallet management, and automated payouts at maturity, Avezt makes agriculture accessible, transparent, and profitable for everyone.
                </p>

                <ul className="space-y-2 mb-6">
                  {aveztFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-warm-white/70 font-body">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <CountdownTimer targetDate="2026-12-01" />

                <div>
                  <p className="text-warm-white/50 text-xs font-body mb-3">Join the early access waitlist</p>
                  <EmailCapture placeholder="Your email address" />
                </div>
              </div>

              {/* Image */}
              <div className="relative h-64 lg:h-auto min-h-[280px] overflow-hidden order-1 lg:order-2 rounded-tr-3xl rounded-tl-3xl lg:rounded-tr-3xl lg:rounded-br-3xl lg:rounded-tl-none">
                <img
                  src="https://images.unsplash.com/photo-1693672843238-737e13d6b86f?w=700&h=500&fit=crop"
                  alt="Maize field"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-card/60 lg:bg-gradient-to-l lg:from-transparent lg:to-dark-card/70" />
                <div className="absolute bottom-6 right-6 w-12 h-12 bg-gold rounded-xl flex items-center justify-center shadow-lg shadow-gold/30">
                  <Zap size={22} className="text-navy" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────── */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-display text-3xl font-bold text-white mb-4">
            Want to Be Part of What We Build?
          </h3>
          <p className="text-warm-white/60 font-body mb-8">
            If you're an investor, partner, or creative who wants to contribute to what we're building, we'd love to hear from you.
          </p>
          <a
            href="#/contact"
            className="inline-flex items-center gap-2 bg-cobalt text-white px-8 py-4 rounded-xl font-semibold font-body text-sm btn-shimmer hover:bg-cobalt-light transition-colors"
          >
            Get In Touch
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  )
}
