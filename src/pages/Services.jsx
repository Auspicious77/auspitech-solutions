import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Palette, Layers, Code2, Smartphone, ArrowRight,
  CheckCircle2, ChevronRight, Search, Lightbulb, Wrench, Rocket
} from 'lucide-react'

function ServiceSection({ id, title, subtitle, description, icon: Icon, deliverables, image, reversed, accent, cta = 'Get a Quote' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id={id}
      ref={ref}
      className={`py-24 lg:py-32 relative overflow-hidden ${accent ? 'bg-navy' : 'bg-warm-white dark:bg-navy'}`}
    >
      {accent && (
        <>
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl" />
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reversed ? 'lg:[&>:first-child]:order-2' : ''}`}>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? 30 : -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className={`inline-flex p-3 rounded-xl mb-5 ${accent ? 'bg-gold/20' : 'bg-cobalt/10'}`}>
              <Icon size={26} className={accent ? 'text-gold' : 'text-cobalt'} strokeWidth={1.6} />
            </div>

            <p className={`font-body text-xs font-semibold uppercase tracking-widest mb-3 ${accent ? 'text-gold' : 'text-cobalt'}`}>
              {subtitle}
            </p>
            <h2 className={`font-display text-4xl lg:text-5xl font-bold mb-5 leading-tight ${accent ? 'text-white' : 'text-navy dark:text-warm-white'}`}>
              {title}
            </h2>
            <p className={`font-body text-base leading-relaxed mb-8 ${accent ? 'text-warm-white/65' : 'text-navy/60 dark:text-warm-white/60'}`}>
              {description}
            </p>

            <ul className="space-y-3 mb-10">
              {deliverables.map((d) => (
                <li key={d} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className={accent ? 'text-gold flex-shrink-0' : 'text-cobalt flex-shrink-0'} />
                  <span className={`font-body text-sm ${accent ? 'text-warm-white/80' : 'text-navy/70 dark:text-warm-white/70'}`}>{d}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold font-body text-sm btn-shimmer transition-colors ${
                accent
                  ? 'bg-gold text-navy hover:bg-yellow-400'
                  : 'bg-cobalt text-white hover:bg-cobalt-light'
              }`}
            >
              {cta}
              <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className={`absolute inset-0 ${accent ? 'bg-gradient-to-tl from-navy/60 to-transparent' : 'bg-gradient-to-tl from-navy/40 to-transparent'}`} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const steps = [
  { num: '01', icon: Search, title: 'Discovery', desc: 'We dive deep into your business, your market, your audience, and your goals. No assumptions — just research and real conversations.' },
  { num: '02', icon: Lightbulb, title: 'Strategy', desc: 'Armed with insights, we build a clear strategic roadmap. Every design decision and technical choice is rooted in purpose.' },
  { num: '03', icon: Wrench, title: 'Execution', desc: 'Our team goes to work with precision and care — crafting, building, and refining until every element is right.' },
  { num: '04', icon: Rocket, title: 'Delivery', desc: 'We launch with confidence, provide handover documentation, and stay available to support your continued growth.' },
]

export default function Services() {
  const processRef = useRef(null)
  const processInView = useInView(processRef, { once: true, margin: '-80px' })

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative py-32 lg:py-40 bg-navy overflow-hidden grain-overlay">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-cobalt/15 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gold/8 rounded-full filter blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-cobalt font-body text-sm font-semibold uppercase tracking-widest mb-4"
          >
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl lg:text-6xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight"
          >
            Services Built for <span className="text-cobalt">Real Business</span> Growth
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-warm-white/65 font-body text-lg max-w-2xl mx-auto mb-10"
          >
            From brand identity to launch-ready digital products — every service we offer is designed to move your business forward, not just look good.
          </motion.p>

          {/* Quick nav */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {['Branding', 'Graphic Design', 'Web Development', 'Mobile Apps'].map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase().replace(' ', '-')}`}
                className="flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/80 hover:text-white hover:bg-white/15 px-4 py-2 rounded-full text-sm font-body transition-all"
              >
                <ChevronRight size={14} />
                {s}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ─────────────────────────────────── */}
      <ServiceSection
        id="branding"
        title="Brand Identity & Strategy"
        subtitle="Branding"
        description="Your brand is more than a logo — it's a promise, a personality, and a competitive advantage. We build brand identities that are bold, meaningful, and built to last. From first impression to lasting loyalty, we help you show up consistently and powerfully across every touchpoint."
        icon={Palette}
        accent
        deliverables={[
          'Logo design & wordmark creation',
          'Full brand identity system',
          'Brand strategy & positioning',
          'Brand guidelines document',
          'Color palette & typography system',
          'Business card & stationery design',
          'Brand voice & messaging framework',
        ]}
        image="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&h=500&fit=crop"
      />

      <ServiceSection
        id="graphic-design"
        title="Graphic Design & Designer Outsourcing"
        subtitle="Design"
        description="World-class design shouldn't require a full-time hire. We offer both project-based design work and dedicated designer outsourcing — giving you flexible access to talented creatives who understand business communication. From social content to print campaigns, our designers deliver quality that performs."
        icon={Layers}
        reversed
        deliverables={[
          'Social media graphics & templates',
          'Poster & flyer design',
          'UI/UX design assets',
          'Print-ready marketing materials',
          'Presentation & pitch deck design',
          'Dedicated designer on retainer',
          'Same-day turnaround options available',
        ]}
        image="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=700&h=500&fit=crop"
      />

      <ServiceSection
        id="web-development"
        title="Web Application Development"
        subtitle="Software"
        description="We build websites and web applications that don't just look great — they work hard for your business. Whether it's a marketing website, an e-commerce platform, a SaaS product, or an internal dashboard, we combine clean code with thoughtful UX to deliver digital experiences that convert and scale."
        icon={Code2}
        accent
        deliverables={[
          'Corporate & portfolio websites',
          'E-commerce platforms (Shopify, custom)',
          'SaaS products & web dashboards',
          'RESTful APIs & backend systems',
          'CMS integration (Sanity, Strapi, WordPress)',
          'Performance optimization & SEO',
          'Ongoing maintenance & support plans',
        ]}
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&h=500&fit=crop"
      />

      <ServiceSection
        id="mobile-apps"
        title="Mobile App Development"
        subtitle="Mobile"
        description="Your customers live on their phones. We build iOS and Android applications with React Native and Flutter that are fast, intuitive, and genuinely delightful to use. From consumer apps to enterprise tools, we bring your mobile idea to life with the same engineering rigor you'd expect from a top-tier product studio."
        icon={Smartphone}
        reversed
        deliverables={[
          'iOS & Android app development',
          'React Native & Flutter builds',
          'UI/UX design for mobile',
          'App Store & Play Store submission',
          'Push notifications & real-time features',
          'Backend API integration',
          'App maintenance & update plans',
        ]}
        image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&h=500&fit=crop"
      />

      {/* ── OUR PROCESS ──────────────────────────────────────── */}
      <section ref={processRef} className="py-24 lg:py-32 bg-warm-white dark:bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-cobalt font-body text-sm font-semibold uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy dark:text-warm-white mb-4">
              Our Process
            </h2>
            <p className="text-navy/60 dark:text-warm-white/60 font-body max-w-xl mx-auto">
              A clear, collaborative process so you always know where your project stands — and what comes next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector line — desktop */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-cobalt/30 via-cobalt to-cobalt/30" />

            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative text-center"
              >
                <div className="relative inline-flex flex-col items-center mb-6">
                  <div className="w-20 h-20 bg-cobalt rounded-2xl flex flex-col items-center justify-center shadow-lg shadow-cobalt/25 relative z-10">
                    <step.icon size={22} className="text-white mb-1" strokeWidth={1.6} />
                    <span className="text-white/60 text-xs font-body">{step.num}</span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-navy dark:text-warm-white text-xl mb-3">{step.title}</h3>
                <p className="text-navy/60 dark:text-warm-white/55 text-sm font-body leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center mt-14"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-cobalt text-white px-8 py-4 rounded-xl font-semibold font-body btn-shimmer hover:bg-cobalt-light transition-colors shadow-xl shadow-cobalt/25"
            >
              Start Your Project
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
