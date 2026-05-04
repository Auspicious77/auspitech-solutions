import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie } from 'lucide-react'

export default function CookieToast() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('auspitech-cookies')
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 3500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('auspitech-cookies', 'true')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-20 left-4 right-4 md:left-auto md:right-6 md:w-[420px] z-50 bg-navy dark:bg-dark-card border border-cobalt/20 rounded-2xl p-4 shadow-2xl"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 bg-gold/10 rounded-lg mt-0.5 flex-shrink-0">
              <Cookie size={18} className="text-gold" />
            </div>
            <div className="flex-1">
              <p className="text-warm-white text-sm font-semibold font-body mb-1">We use cookies</p>
              <p className="text-warm-white/60 text-xs font-body leading-relaxed">
                We use cookies to enhance your experience, analyze traffic, and personalize content. By continuing, you agree to our use of cookies.
              </p>
              <div className="flex gap-3 mt-3">
                <button
                  onClick={accept}
                  className="bg-cobalt text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-cobalt-light transition-colors"
                >
                  Accept All
                </button>
                <button
                  onClick={() => setVisible(false)}
                  className="text-warm-white/60 text-xs hover:text-warm-white transition-colors"
                >
                  Dismiss
                </button>
              </div>
            </div>
            <button
              onClick={() => setVisible(false)}
              className="text-warm-white/40 hover:text-warm-white transition-colors flex-shrink-0"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
