import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center relative overflow-hidden grain-overlay">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cobalt/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/8 rounded-full filter blur-3xl" />

      <div className="relative z-10 max-w-xl mx-auto px-4 text-center">
        {/* 404 display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 150 }}
          className="mb-6"
        >
          <span className="font-display font-bold text-[10rem] leading-none text-cobalt/15 select-none block">
            404
          </span>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-cobalt rounded-2xl rotate-12 flex items-center justify-center">
            <span className="text-white font-display font-bold text-3xl -rotate-12">A</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-3xl lg:text-4xl font-bold text-white mb-4"
        >
          This Page Took a Wrong Turn
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-warm-white/60 font-body text-base leading-relaxed mb-10"
        >
          The page you're looking for doesn't exist — it may have been moved, deleted, or you may have typed the URL incorrectly. Let's get you back on track.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/"
            className="flex items-center gap-2 bg-cobalt text-white px-7 py-3.5 rounded-xl font-semibold font-body text-sm btn-shimmer hover:bg-cobalt-light transition-colors shadow-xl shadow-cobalt/30"
          >
            <Home size={16} />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-white/10 border border-white/15 text-white px-7 py-3.5 rounded-xl font-semibold font-body text-sm hover:bg-white/15 transition-colors"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <p className="text-warm-white/40 text-xs font-body uppercase tracking-widest mb-4">You might be looking for</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Our Services', path: '/services' },
              { label: 'Gallery', path: '/gallery' },
              { label: 'Contact', path: '/contact' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-warm-white/50 hover:text-cobalt text-sm font-body transition-colors underline underline-offset-4 decoration-cobalt/30 hover:decoration-cobalt"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
