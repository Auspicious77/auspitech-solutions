import { motion, AnimatePresence } from 'framer-motion'
import { X, Tag, ExternalLink } from 'lucide-react'
import { useEffect } from 'react'

export default function BrandModal({ brand, onClose }) {
  useEffect(() => {
    if (brand) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [brand])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {brand && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 35 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-navy dark:bg-dark-card shadow-2xl overflow-y-auto"
          >
            {/* Header */}
            <div
              className="h-48 flex items-end p-6 relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${brand.color}30, ${brand.color}10)` }}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{ background: `radial-gradient(circle at 80% 20%, ${brand.color}, transparent 60%)` }}
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-black/30 rounded-lg text-white hover:bg-black/50 transition-colors"
                aria-label="Close panel"
              >
                <X size={18} />
              </button>
              <div className="relative z-10">
                <div
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full mb-3 font-body font-medium"
                  style={{ background: `${brand.color}30`, color: brand.color }}
                >
                  <Tag size={12} />
                  {brand.industry}
                </div>
                <h3 className="font-display text-3xl font-bold text-white">{brand.name}</h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-display text-sm uppercase tracking-widest text-warm-white/40 mb-3">
                  About the Project
                </h4>
                <p className="text-warm-white/80 text-sm font-body leading-relaxed">
                  {brand.description}
                </p>
              </div>

              <div>
                <h4 className="font-display text-sm uppercase tracking-widest text-warm-white/40 mb-3">
                  What We Delivered
                </h4>
                <div className="flex flex-wrap gap-2">
                  {brand.deliverables.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-body px-3 py-1.5 rounded-lg bg-white/10 text-warm-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 bg-cobalt text-white py-3.5 rounded-xl font-semibold font-body text-sm hover:bg-cobalt-light transition-colors"
              >
                <ExternalLink size={16} />
                View Gallery
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
