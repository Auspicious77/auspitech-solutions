import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

const galleryItems = [
  { id: 1, category: 'Branding', title: 'Marvericks Brand Identity', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop', tall: false },
  { id: 2, category: 'Design', title: 'Social Media Campaign', img: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=800&fit=crop', tall: true },
  { id: 3, category: 'Software', title: 'SaaS Dashboard UI', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop', tall: false },
  { id: 4, category: 'Branding', title: 'Coconot Co. Packaging', img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=600&fit=crop', tall: false },
  { id: 5, category: 'Software', title: 'Mobile App Interface', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=800&fit=crop', tall: true },
  { id: 6, category: 'Design', title: 'Golden Autos Campaign', img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&h=400&fit=crop', tall: false },
  { id: 7, category: 'Branding', title: 'Hidden Facts Editorial', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=500&fit=crop', tall: false },
  { id: 8, category: 'Software', title: 'E-commerce Platform', img: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&h=700&fit=crop', tall: true },
  { id: 9, category: 'Design', title: 'Print Collateral Suite', img: 'https://images.unsplash.com/photo-1536925155833-f8e19ab25fc8?w=600&h=400&fit=crop', tall: false },
  { id: 10, category: 'Branding', title: 'Seeger Decor Identity', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=500&fit=crop', tall: false },
  { id: 11, category: 'Design', title: 'Product Photography Direction', img: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&h=700&fit=crop', tall: true },
  { id: 12, category: 'Software', title: 'Molyes Solutions Website', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop', tall: false },
]

const categories = ['All', 'Branding', 'Design', 'Software']

function Lightbox({ items, currentIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onPrev, onNext])

  const item = items[currentIndex]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-colors z-10"
        aria-label="Close"
      >
        <X size={20} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft size={20} />
      </button>

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.img.replace(/w=\d+&h=\d+/, 'w=1200&h=800')}
          alt={item.title}
          className="w-full max-h-[75vh] object-contain rounded-2xl"
        />
        <div className="mt-4 text-center">
          <p className="text-white font-display font-bold text-lg">{item.title}</p>
          <span className="text-cobalt font-body text-sm">{item.category}</span>
        </div>
      </motion.div>

      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-colors"
        aria-label="Next"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
        {items.map((_, i) => (
          <div key={i} className={`rounded-full transition-all ${i === currentIndex ? 'w-5 h-2 bg-cobalt' : 'w-2 h-2 bg-white/30'}`} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  const openLightbox = (index) => {
    setLightboxIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
    document.body.style.overflow = ''
  }, [])

  const prevImage = useCallback(() => {
    setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length)
  }, [filtered.length])

  const nextImage = useCallback(() => {
    setLightboxIndex((i) => (i + 1) % filtered.length)
  }, [filtered.length])

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative py-32 lg:py-40 bg-navy overflow-hidden grain-overlay">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cobalt/10 rounded-full filter blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-cobalt font-body text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl lg:text-6xl font-bold text-white mb-5"
          >
            The <span className="gold-gradient">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-warm-white/60 font-body text-lg max-w-xl mx-auto"
          >
            A curated selection of our finest work across branding, design, and software. Every project tells a story.
          </motion.p>
        </div>
      </section>

      {/* ── FILTER + GRID ─────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-warm-white dark:bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold font-body transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-cobalt text-white shadow-lg shadow-cobalt/25'
                    : 'bg-white dark:bg-dark-card text-navy/60 dark:text-warm-white/60 border border-navy/10 dark:border-white/10 hover:border-cobalt/30'
                }`}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="ml-2 text-xs opacity-60">
                    ({galleryItems.filter((i) => i.category === cat).length})
                  </span>
                )}
              </motion.button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="masonry-grid">
            <AnimatePresence>
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="masonry-item"
                >
                  <div
                    className="relative group cursor-pointer rounded-2xl overflow-hidden"
                    onClick={() => openLightbox(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
                    aria-label={`View ${item.title}`}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ aspectRatio: item.tall ? '3/4' : '4/3' }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                      <div className="flex justify-end">
                        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                          <ZoomIn size={16} className="text-white" />
                        </div>
                      </div>
                      <div>
                        <span className="text-cobalt text-xs font-body font-semibold uppercase tracking-wider">{item.category}</span>
                        <p className="text-white font-display font-bold text-sm mt-1">{item.title}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-navy/40 dark:text-warm-white/40 font-body">No items in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
