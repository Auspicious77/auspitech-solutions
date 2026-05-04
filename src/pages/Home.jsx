import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import {
  Palette, Layers, Code2, Smartphone, ArrowRight, Star,
  Zap, ShieldCheck, Users, TrendingUp, Lightbulb, Heart,
  Award, Handshake, Globe
} from 'lucide-react'
import LogoCarousel from '../components/LogoCarousel'
import TestimonialSlider from '../components/TestimonialSlider'
import ServiceCard from '../components/ServiceCard'

// Animated counter
function Counter({ end, label, suffix = '+' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px' })
  const [count, setCount] = useState(0)
  const target = parseInt(end, 10)

  useEffect(() => {
    if (!inView) return
    const steps = 40
    const interval = 1200 / steps
    let step = 0
    const timer = setInterval(() => {
      step++
      setCount(Math.round((step / steps) * target))
      if (step >= steps) clearInterval(timer)
    }, interval)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl lg:text-5xl font-bold text-white mb-1">
        {count}{suffix}
      </div>
      <p className="text-white/70 text-sm font-body">{label}</p>
    </div>
  )
}

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'We craft memorable brand identities — from logo design and visual systems to full brand guidelines that grow with your business.',
  },
  {
    icon: Layers,
    title: 'Graphic Design & Outsourcing',
    description: 'Need a talented designer without the full-time cost? We offer skilled graphic designers on a project or retainer basis.',
  },
  {
    icon: Code2,
    title: 'Web Development',
    description: 'From marketing sites to SaaS dashboards, we build fast, scalable, and beautiful web applications tailored to your business goals.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'iOS and Android apps built with React Native and Flutter. We turn ideas into mobile products that people actually love to use.',
  },
]

const values = [
  { icon: Lightbulb, label: 'Innovation', desc: 'We push creative and technical boundaries on every project.' },
  { icon: ShieldCheck, label: 'Integrity', desc: 'Transparent process, honest pricing, no surprises.' },
  { icon: Award, label: 'Excellence', desc: 'Average is not in our vocabulary. We deliver premium, always.' },
  { icon: Handshake, label: 'Collaboration', desc: 'Your team + our team = unstoppable results.' },
  { icon: Globe, label: 'Impact', desc: 'We measure success by the growth we drive for your business.' },
  { icon: Heart, label: 'Creativity', desc: 'Imaginative thinking infused into every brief, every pixel.' },
]

const whyUs = [
  {
    icon: Users,
    title: 'Experienced Team',
    desc: 'Our multidisciplinary team brings years of hands-on expertise in branding, design, and software engineering — not theory, real execution.',
  },
  {
    icon: Zap,
    title: 'End-to-End Solutions',
    desc: 'From brand strategy to launch-ready digital products, we handle the full journey — one partner, zero gaps, total accountability.',
  },
  {
    icon: Heart,
    title: 'Client-Centered Approach',
    desc: 'We invest time to understand your business, your customers, and your goals. Then we build something that actually works for you.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    desc: 'Our portfolio speaks for itself. Brands we\'ve built are winning market share, attracting clients, and growing faster.',
  },
]

export default function Home() {
  const missionRef = useRef(null)
  const whyRef = useRef(null)
  const valuesRef = useRef(null)
  const missionInView = useInView(missionRef, { once: true, margin: '-80px' })
  const whyInView = useInView(whyRef, { once: true, margin: '-80px' })
  const valuesInView = useInView(valuesRef, { once: true, margin: '-80px' })

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy grain-overlay">
        {/* Grid */}
        <div className="absolute inset-0 grid-bg opacity-60" />

        {/* Floating shapes */}
        <div className="absolute top-24 right-10 w-72 h-72 bg-cobalt/20 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-56 h-56 bg-gold/10 rounded-full filter blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cobalt/5 shape-blob filter blur-2xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 xl:gap-14 items-center">

            {/* ── LEFT: Text ── */}
            <div>
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-cobalt/20 border border-cobalt/30 rounded-full px-4 py-1.5 mb-8"
              >
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse-slow" />
                <span className="text-warm-white/80 text-xs font-body font-medium tracking-wide uppercase">
                  Branding · Design · Software
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-6"
              >
                <span className="block pb-4 whitespace-nowrap">
                  We craft{' '}
                  <span className="relative inline-block">
                    <span className="text-cobalt">brands,</span>
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cobalt/40 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    />
                  </span>
                </span>
                <span className="block whitespace-nowrap">
                  We Build{' '}
                  <span className="gold-gradient">Solutions.</span>
                </span>
              </motion.h1>

              {/* Sub */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-warm-white/65 text-lg font-body leading-relaxed mb-10"
              >
                Auspitech Solutions helps businesses of all sizes grow through strategic branding,
                world-class design, and powerful software. From a bold idea to a market-ready product —
                we bridge the gap between vision and execution.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/services"
                  className="flex items-center gap-2 bg-cobalt text-white px-7 py-4 rounded-xl font-semibold font-body text-sm btn-shimmer hover:bg-cobalt-light transition-colors shadow-xl shadow-cobalt/30"
                >
                  Our Services
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/gallery"
                  className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-7 py-4 rounded-xl font-semibold font-body text-sm hover:bg-white/15 transition-colors backdrop-blur-sm"
                >
                  See Our Work
                </Link>
              </motion.div>

              {/* Trust strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-wrap items-center gap-6 mt-14 pt-8 border-t border-white/10"
              >
                <div className="flex items-center -space-x-3">
                  {['photo-1531123897727-8f129e1688ce', 'photo-1506794778202-cad84cf45f1d', 'photo-1494790108377-be9c29b29330'].map((id, i) => (
                    <img
                      key={i}
                      src={`https://images.unsplash.com/${id}?w=40&h=40&fit=crop&crop=face`}
                      alt="client"
                      className="w-9 h-9 rounded-full border-2 border-navy object-cover"
                    />
                  ))}
                  <div className="w-9 h-9 rounded-full border-2 border-navy bg-cobalt flex items-center justify-center text-white text-xs font-bold font-body">
                    +7
                  </div>
                </div>
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#F0A500" className="text-gold" />)}
                  </div>
                  <p className="text-warm-white/50 text-xs font-body">Trusted by 10+ businesses across Nigeria</p>
                </div>
              </motion.div>
            </div>

            {/* ── RIGHT: Image ── */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-cobalt/20 rounded-3xl filter blur-2xl" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cobalt/20">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=680&h=780&fit=crop"
                  alt="Business strategy and planning"
                  className="w-full h-[400px] xl:h-[460px] object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
              </div>

              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="absolute -bottom-5 -left-6 glass-card rounded-2xl px-5 py-4 shadow-xl"
              >
                <p className="text-white/60 text-xs font-body mb-1">Client Satisfaction</p>
                <p className="text-white font-display font-bold text-2xl">100% <span className="text-gold text-sm font-body font-normal">rate</span></p>
              </motion.div>

              {/* Floating badge top-right */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-3 shadow-xl"
              >
                <p className="text-white/60 text-xs font-body mb-0.5">Projects delivered</p>
                <p className="text-cobalt font-display font-bold text-xl">5+</p>
              </motion.div>
            </motion.div>

          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-cobalt/50" />
          <div className="w-4 h-4 rounded-full border border-cobalt/40 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-cobalt" />
          </div>
        </motion.div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────── */}
      <section className="bg-cobalt py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Counter end="5" label="Projects Delivered" />
          <Counter end="10" label="Happy Clients" />
          <Counter end="17" label="Industries Served" />
          <Counter end="100" label="Client Satisfaction" suffix="%" />
        </div>
      </section>

      {/* ── WHAT WE DO ────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-warm-white dark:bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-cobalt font-body text-sm font-semibold uppercase tracking-widest mb-3"
            >
              Our Arms
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl lg:text-5xl font-bold text-navy dark:text-warm-white mb-4"
            >
              Built for Growth.{' '}
              <span className="cobalt-gradient">Designed to Last.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-navy/60 dark:text-warm-white/60 text-lg font-body max-w-2xl mx-auto"
            >
              Four core disciplines. One unified vision. Whether you need a brand, a design, or a digital product — we've got the expertise.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ─────────────────────────────────── */}
      <section ref={missionRef} className="py-24 bg-navy relative overflow-hidden grain-overlay diagonal-both">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-cobalt/10 rounded-full filter blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-cobalt/10 border border-cobalt/20 rounded-2xl p-8 lg:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-cobalt rounded-lg flex items-center justify-center">
                  <Globe size={18} className="text-white" />
                </div>
                <span className="font-display text-sm uppercase tracking-widest text-cobalt font-bold">Our Vision</span>
              </div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                Africa's Most Trusted Brand & Technology Partner.
              </h3>
              <p className="text-warm-white/60 font-body leading-relaxed">
                We envision a future where every African business — from the ambitious Lagos startup to the established enterprise — has access to world-class branding and technology that enables them to compete on a global stage.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-gold/10 border border-gold/20 rounded-2xl p-8 lg:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                  <Zap size={18} className="text-navy" />
                </div>
                <span className="font-display text-sm uppercase tracking-widest text-gold font-bold">Our Mission</span>
              </div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                Empowering Businesses to Thrive in the Digital Economy.
              </h3>
              <p className="text-warm-white/60 font-body leading-relaxed">
                To deliver innovative branding and software solutions that empower individuals and businesses to thrive. We close the gap between great ideas and great execution — with craft, strategy, and relentless commitment to our clients' success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────────────────── */}
      <section ref={valuesRef} className="py-24 lg:py-32 bg-warm-white dark:bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={valuesInView ? { opacity: 1 } : {}}
              className="text-cobalt font-body text-sm font-semibold uppercase tracking-widest mb-3"
            >
              What Drives Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              className="font-display text-4xl lg:text-5xl font-bold text-navy dark:text-warm-white"
            >
              Our Core Values
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 25 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white dark:bg-dark-card rounded-2xl p-6 border border-navy/10 dark:border-white/10 hover:border-cobalt/30 dark:hover:border-cobalt/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex p-3 bg-cobalt/10 rounded-xl mb-4 group-hover:bg-cobalt group-hover:scale-110 transition-all duration-300">
                  <v.icon size={20} className="text-cobalt group-hover:text-white transition-colors" strokeWidth={1.8} />
                </div>
                <h3 className="font-display font-bold text-navy dark:text-warm-white text-lg mb-2">{v.label}</h3>
                <p className="text-navy/60 dark:text-warm-white/60 text-sm font-body">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY AUSPITECH ────────────────────────────────────── */}
      <section ref={whyRef} className="py-24 lg:py-32 bg-navy relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-cobalt/10 rounded-full filter blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={whyInView ? { opacity: 1 } : {}}
                className="text-cobalt font-body text-sm font-semibold uppercase tracking-widest mb-3"
              >
                Why Choose Us
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={whyInView ? { opacity: 1, y: 0 } : {}}
                className="font-display text-4xl lg:text-5xl font-bold text-white mb-5"
              >
                The Auspitech <span className="gold-gradient">Advantage</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={whyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="text-warm-white/60 font-body text-lg leading-relaxed mb-10"
              >
                We're not just a service provider — we're a growth partner. Our approach combines strategic thinking with flawless execution, and we're committed to your success long after the project is delivered.
              </motion.p>

              <div className="space-y-6">
                {whyUs.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={whyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 bg-cobalt/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon size={18} className="text-cobalt" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-warm-white/55 text-sm font-body leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={whyInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="mt-10"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-cobalt text-white px-7 py-4 rounded-xl font-semibold font-body text-sm btn-shimmer hover:bg-cobalt-light transition-colors"
                >
                  Start a Project
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>

            {/* Right: visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={whyInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/70 via-transparent to-cobalt/20" />

                {/* Float card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="absolute bottom-6 left-6 right-6 glass-card rounded-xl p-4"
                >
                  <p className="text-white font-display font-bold text-sm mb-1">Projects delivered in 2024</p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {['photo-1531123897727-8f129e1688ce', 'photo-1506794778202-cad84cf45f1d', 'photo-1494790108377-be9c29b29330'].map((id, i) => (
                        <img key={i} src={`https://images.unsplash.com/${id}?w=32&h=32&fit=crop&crop=face`} alt="" className="w-8 h-8 rounded-full border-2 border-navy/50" />
                      ))}
                    </div>
                    <span className="text-gold font-display font-bold text-2xl">5+</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── LOGO CAROUSEL ────────────────────────────────────── */}
      <section className="py-20 bg-warm-white dark:bg-navy border-t border-navy/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
          <p className="text-cobalt font-body text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy dark:text-warm-white mb-3">
            Trusted by Growing Businesses
          </h2>
          <p className="text-navy/55 dark:text-warm-white/55 font-body max-w-xl mx-auto">
            We've helped these brands find their voice, own their space, and grow their business. Click a brand to see what we built together.
          </p>
        </div>
        <LogoCarousel />
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-cobalt font-body text-sm font-semibold uppercase tracking-widest mb-3">Client Stories</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              What Our Clients Say
            </h2>
          </div>
          <TestimonialSlider />
        </div>
      </section>
    </div>
  )
}
