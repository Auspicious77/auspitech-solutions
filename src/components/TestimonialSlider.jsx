import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Adaeze Okonkwo',
    role: 'CEO, Coconot Co.',
    quote: "Auspitech didn't just design our brand — they built our identity. From the very first call to the final delivery, the process was seamless, professional, and genuinely exciting. Our customers immediately noticed the new look and we've seen a 40% increase in packaging inquiries since the rebrand.",
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&crop=face',
    stars: 5,
  },
  {
    id: 2,
    name: 'Chukwuemeka Bello',
    role: 'Founder, Molyes Solutions Limited',
    quote: "Working with Auspitech was a game-changer for our consulting firm. They took our vision seriously and translated it into a brand that commands respect in boardrooms. The attention to detail in our corporate identity was exceptional — every element told our story exactly the way we wanted.",
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face',
    stars: 5,
  },
  {
    id: 3,
    name: 'Fatima Al-Hassan',
    role: 'Director, Golden Autos',
    quote: "I was skeptical about the timeline, but Auspitech delivered everything ahead of schedule and beyond expectation. The luxury brand identity they created for Golden Autos is exactly what we needed to compete at the premium level. The digital ad templates alone have transformed our marketing ROI.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
    stars: 5,
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }
  const prev = () => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }
  const next = () => {
    setDirection(1)
    setCurrent((c) => (c + 1) % testimonials.length)
  }

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0, transition: { duration: 0.3 } }),
  }

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="overflow-hidden rounded-2xl bg-dark-card dark:bg-[#060910] border border-white/10 p-8 md:p-12 min-h-[260px] flex flex-col justify-between">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {/* Quote mark */}
            <div className="text-cobalt font-display text-6xl leading-none mb-4 opacity-40">"</div>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                <Star key={i} size={16} fill="#F0A500" className="text-gold" />
              ))}
            </div>

            <p className="text-warm-white/85 font-body text-base lg:text-lg leading-relaxed mb-6">
              {testimonials[current].quote}
            </p>

            <div className="flex items-center gap-4">
              <img
                src={testimonials[current].avatar}
                alt={testimonials[current].name}
                className="w-12 h-12 rounded-full object-cover border-2 border-cobalt/40"
              />
              <div>
                <p className="text-white font-display font-bold text-sm">{testimonials[current].name}</p>
                <p className="text-warm-white/50 text-xs font-body">{testimonials[current].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-8 h-2 bg-cobalt' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="p-2 bg-white/10 rounded-lg hover:bg-cobalt transition-colors text-warm-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="p-2 bg-white/10 rounded-lg hover:bg-cobalt transition-colors text-warm-white"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
