import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Globe, Award, Heart, Lightbulb, Zap, Coffee, Monitor, Smile } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function CounterCard({ value, label, suffix = '+' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <div ref={ref} className="text-center p-8 bg-white/5 border border-white/10 rounded-2xl">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
        className="font-display text-5xl font-bold text-cobalt mb-2"
      >
        {value}{suffix}
      </motion.div>
      <p className="text-warm-white/60 font-body text-sm">{label}</p>
    </div>
  )
}

const culture = [
  { icon: Monitor, label: 'Remote-Friendly', desc: 'We hire talent from across Africa. Great work knows no postal code.' },
  { icon: Lightbulb, label: 'Creative-First', desc: 'Every brief is a blank canvas. We lead with ideas before tools.' },
  { icon: Coffee, label: 'Always Learning', desc: 'We invest in our team\'s growth — books, courses, conferences.' },
  { icon: Users, label: 'Collaborative Spirit', desc: 'We build together, fail fast together, and celebrate louder together.' },
  { icon: Smile, label: 'Human-Centered', desc: 'We believe great brands and products start with empathy for people.' },
  { icon: Zap, label: 'Delivery-Obsessed', desc: 'Timelines are sacred. We deliver what we promise, when we promise it.' },
]

const teamValues = [
  { icon: Globe, title: 'Built for the World', desc: 'Auspitech was founded with a clear conviction: African businesses deserve world-class creative and technology partners that truly understand them.' },
  { icon: Heart, title: 'We Care Deeply', desc: 'Every logo, every line of code, every campaign brief is treated with the same care and intention — because your business matters.' },
  { icon: Award, title: 'Excellence Is Non-Negotiable', desc: 'We hold ourselves to a higher standard. Our work should make you proud, impress your clients, and outlast trends.' },
]

export default function About() {
  const storyRef = useRef(null)
  const statsRef = useRef(null)
  const storyInView = useInView(storyRef, { once: true, margin: '-80px' })
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' })

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[480px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=800&fit=crop"
          alt="Modern workspace"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-cobalt font-body text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Who We Are
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 max-w-2xl"
          >
            We Are <span className="text-cobalt">Auspitech</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-warm-white/70 font-body text-lg max-w-xl leading-relaxed"
          >
            A team of brand strategists, designers, and engineers building the future of African business — one brand at a time.
          </motion.p>
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────────────── */}
      <section ref={storyRef} className="py-24 lg:py-32 bg-warm-white dark:bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={storyInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.65 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=500&fit=crop"
                alt="Team at work"
                className="rounded-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 bg-cobalt rounded-2xl p-6 hidden md:block shadow-2xl shadow-cobalt/30">
                <p className="text-white font-display font-bold text-3xl">2026</p>
                <p className="text-white/70 text-xs font-body">Year Founded</p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-cobalt font-body text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy dark:text-warm-white mb-6 leading-tight">
                Built to Close the Gap Between Great Ideas and Great Execution
              </h2>
              <div className="space-y-4 text-navy/65 dark:text-warm-white/65 font-body leading-relaxed">
                <p>
                  Auspitech Solutions was born in Lagos in 2026 from a simple but powerful frustration: too many talented Nigerian entrepreneurs and businesses were held back not by lack of ambition, but by lack of access to professional branding and technology services that truly understood the African market.
                </p>
                <p>
                  Our founders — a designer, a developer, and a brand strategist — came together with a shared conviction: that world-class creative and digital services shouldn't be reserved for multinational corporations with enormous budgets. Small businesses, startups, and independent entrepreneurs deserve the same quality, the same strategic depth, the same commitment to excellence.
                </p>
                <p>
                  Since then, we've grown into a multidisciplinary team delivering brand identities, graphic design, web applications, and mobile products for clients across Nigeria and beyond. Every project we take on carries the same weight as our first — we show up fully, we execute with precision, and we celebrate our clients' wins as our own.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-cobalt text-white px-6 py-3.5 rounded-xl font-semibold font-body text-sm btn-shimmer hover:bg-cobalt-light transition-colors"
                >
                  What We Do
                  <ArrowRight size={15} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-cobalt text-cobalt dark:text-cobalt px-6 py-3.5 rounded-xl font-semibold font-body text-sm hover:bg-cobalt hover:text-white transition-colors"
                >
                  Work With Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── NUMBERS ──────────────────────────────────────────── */}
      <section ref={statsRef} className="py-20 bg-navy relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white">
              By the <span className="gold-gradient">Numbers</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <CounterCard value="4" label="Industries Served" />
            <CounterCard value="20" label="Projects Delivered" />
            <CounterCard value="100" label="Client Satisfaction" suffix="%" />
            <CounterCard value="15" label="Brands Built" />
          </div>
        </div>
      </section>

      {/* ── TEAM CULTURE ─────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-warm-white dark:bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-cobalt font-body text-sm font-semibold uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy dark:text-warm-white mb-4">
              Our Team Culture
            </h2>
            <p className="text-navy/60 dark:text-warm-white/60 font-body max-w-xl mx-auto">
              We've built a culture where creativity thrives, quality is expected, and people genuinely love what they do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {culture.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 p-6 bg-white dark:bg-dark-card rounded-2xl border border-navy/10 dark:border-white/10 hover:border-cobalt/30 transition-all group"
              >
                <div className="w-10 h-10 bg-cobalt/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-cobalt transition-colors">
                  <item.icon size={18} className="text-cobalt group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy dark:text-warm-white mb-1 text-sm">{item.label}</h3>
                  <p className="text-navy/55 dark:text-warm-white/55 text-sm font-body">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team values */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {teamValues.map((tv, i) => (
              <motion.div
                key={tv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative overflow-hidden rounded-2xl"
              >
                <img
                  src={`https://images.unsplash.com/photo-${['1552664730-d307ca884978', '1600880292203-757bb62b4baf', '1522071820081-009f0129c71c'][i]}?w=500&h=300&fit=crop`}
                  alt={tv.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-6 bg-white dark:bg-dark-card border-x border-b border-navy/10 dark:border-white/10 rounded-b-2xl">
                  <div className="inline-flex p-2 bg-cobalt/10 rounded-lg mb-3">
                    <tv.icon size={16} className="text-cobalt" />
                  </div>
                  <h3 className="font-display font-bold text-navy dark:text-warm-white mb-2">{tv.title}</h3>
                  <p className="text-navy/60 dark:text-warm-white/60 text-sm font-body leading-relaxed">{tv.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE BLOCK ──────────────────────────────────────── */}
      <section className="py-20 bg-cobalt relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/30 font-display text-8xl leading-none mb-4">"</p>
          <blockquote className="font-display text-2xl lg:text-3xl font-bold text-white leading-relaxed mb-6">
            We don't just build brands and software. We build the confidence businesses need to show up boldly in the world.
          </blockquote>
          <p className="text-white/60 font-body text-sm">— Auspitech Solutions, Lagos</p>
        </div>
      </section>
    </div>
  )
}
