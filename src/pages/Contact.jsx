import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare } from 'lucide-react'

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
const FacebookIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const XIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
const TikTokIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
  </svg>
)

const services = [
  'Brand Identity & Strategy',
  'Graphic Design',
  'Designer Outsourcing (Retainer)',
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Multiple Services',
  'Other / Not Sure Yet',
]

function FormField({ label, error, children }) {
  return (
    <div>
      <label className="block text-sm font-medium font-body text-navy/70 dark:text-warm-white/70 mb-1.5">
        {label}
      </label>
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 text-red-500 text-xs font-body"
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}

const inputClass = "w-full bg-warm-white dark:bg-dark-card border border-navy/15 dark:border-white/10 rounded-xl px-4 py-3 text-navy dark:text-warm-white placeholder-navy/35 dark:placeholder-warm-white/30 focus:outline-none focus:border-cobalt transition-colors font-body text-sm"

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Your name is required.'
    if (!form.email.trim()) e.email = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.'
    if (!form.service) e.service = 'Please select a service.'
    if (!form.message.trim()) e.message = 'Tell us a bit about your project.'
    else if (form.message.trim().length < 20) e.message = 'Please provide a bit more detail (at least 20 characters).'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1800)
  }

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
    if (errors[field]) setErrors({ ...errors, [field]: undefined })
  }

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative py-32 lg:py-40 bg-navy overflow-hidden grain-overlay">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cobalt/10 rounded-full filter blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-cobalt font-body text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
          >
            Let's Build Something <span className="text-cobalt">Together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-warm-white/60 font-body text-lg max-w-xl mx-auto"
          >
            Whether you have a fully formed brief or just an early idea — we'd love to hear from you. Let's explore what's possible.
          </motion.p>
        </div>
      </section>

      {/* ── FORM + INFO ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-warm-white dark:bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Form — 3 columns */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-16"
                >
                  <div className="w-20 h-20 bg-green-500/15 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={36} className="text-green-500" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-navy dark:text-warm-white mb-3">
                    Message Received!
                  </h2>
                  <p className="text-navy/60 dark:text-warm-white/60 font-body max-w-sm leading-relaxed">
                    Thank you for reaching out. A member of our team will review your project and get back to you within 24 hours.
                  </p>
                  <div className="mt-8 flex items-center gap-2 bg-cobalt/10 border border-cobalt/20 rounded-xl px-4 py-3">
                    <Clock size={16} className="text-cobalt" />
                    <span className="text-cobalt text-sm font-body font-medium">Expected response: within 24 hours</span>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField label="Full Name *" error={errors.name}>
                      <input
                        type="text"
                        value={form.name}
                        onChange={handleChange('name')}
                        placeholder="e.g. Chukwuemeka Bello"
                        className={`${inputClass} ${errors.name ? 'border-red-400' : ''}`}
                      />
                    </FormField>
                    <FormField label="Email Address *" error={errors.email}>
                      <input
                        type="email"
                        value={form.email}
                        onChange={handleChange('email')}
                        placeholder="you@example.com"
                        className={`${inputClass} ${errors.email ? 'border-red-400' : ''}`}
                      />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField label="Phone Number (Optional)">
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={handleChange('phone')}
                        placeholder="+234 800 000 0000"
                        className={inputClass}
                      />
                    </FormField>
                    <FormField label="Service Interested In *" error={errors.service}>
                      <select
                        value={form.service}
                        onChange={handleChange('service')}
                        className={`${inputClass} ${errors.service ? 'border-red-400' : ''}`}
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </FormField>
                  </div>

                  <FormField label="Tell Us About Your Project *" error={errors.message}>
                    <textarea
                      value={form.message}
                      onChange={handleChange('message')}
                      rows={6}
                      placeholder="Give us a brief overview of what you're looking to build or achieve. The more context, the better we can help you."
                      className={`${inputClass} resize-none ${errors.message ? 'border-red-400' : ''}`}
                    />
                    <p className="text-right text-xs text-navy/30 dark:text-warm-white/30 mt-1 font-body">
                      {form.message.length} characters
                    </p>
                  </FormField>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 bg-cobalt text-white py-4 rounded-xl font-semibold font-body btn-shimmer hover:bg-cobalt-light transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending your message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-navy/40 dark:text-warm-white/40 font-body">
                    We respond within 24 hours. Your information is kept private.
                  </p>
                </form>
              )}
            </div>

            {/* Info sidebar — 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Response promise */}
              <div className="flex items-start gap-4 p-5 bg-cobalt/10 border border-cobalt/20 rounded-2xl">
                <div className="p-2.5 bg-cobalt rounded-xl flex-shrink-0">
                  <Clock size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-display font-bold text-navy dark:text-warm-white text-sm mb-1">Fast Response</p>
                  <p className="text-navy/60 dark:text-warm-white/60 text-xs font-body">We review every inquiry personally and respond within 24 hours — often much sooner.</p>
                </div>
              </div>

              {/* Contact details */}
              <div className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-navy/10 dark:border-white/10 space-y-5">
                <h3 className="font-display font-bold text-navy dark:text-warm-white mb-4">Reach Us Directly</h3>

                <a href="mailto:hello@auspitech.com" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-cobalt/10 rounded-xl flex items-center justify-center group-hover:bg-cobalt transition-colors">
                    <Mail size={16} className="text-cobalt group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-navy/40 dark:text-warm-white/40 font-body">Email</p>
                    <p className="text-navy dark:text-warm-white text-sm font-body font-medium">hello@auspitech.com</p>
                  </div>
                </a>

                <a href="tel:+2348148645867" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-cobalt/10 rounded-xl flex items-center justify-center group-hover:bg-cobalt transition-colors">
                    <Phone size={16} className="text-cobalt group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-navy/40 dark:text-warm-white/40 font-body">Phone</p>
                    <p className="text-navy dark:text-warm-white text-sm font-body font-medium">+234 814 864 5867</p>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cobalt/10 rounded-xl flex items-center justify-center">
                    <MapPin size={16} className="text-cobalt" />
                  </div>
                  <div>
                    <p className="text-xs text-navy/40 dark:text-warm-white/40 font-body">Location</p>
                    <p className="text-navy dark:text-warm-white text-sm font-body font-medium">Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-navy/10 dark:border-white/10 grid grid-cols-3 gap-2">
                  <a href="https://instagram.com/auspitech_solution" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 border border-navy/15 dark:border-white/15 rounded-xl py-2.5 text-navy/60 dark:text-warm-white/60 hover:border-cobalt/40 hover:text-cobalt transition-all text-xs font-body" aria-label="Instagram">
                    <InstagramIcon size={14} />
                    Instagram
                  </a>
                  <a href="https://www.facebook.com/AuspitechSolutions" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 border border-navy/15 dark:border-white/15 rounded-xl py-2.5 text-navy/60 dark:text-warm-white/60 hover:border-cobalt/40 hover:text-cobalt transition-all text-xs font-body" aria-label="Facebook">
                    <FacebookIcon size={14} />
                    Facebook
                  </a>
                  <a href="https://x.com/AuspitechSolution" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 border border-navy/15 dark:border-white/15 rounded-xl py-2.5 text-navy/60 dark:text-warm-white/60 hover:border-cobalt/40 hover:text-cobalt transition-all text-xs font-body" aria-label="Twitter / X">
                    <XIcon size={14} />
                    Twitter / X
                  </a>
                  <a href="https://tiktok.com/@auspitechsolution" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 border border-navy/15 dark:border-white/15 rounded-xl py-2.5 text-navy/60 dark:text-warm-white/60 hover:border-cobalt/40 hover:text-cobalt transition-all text-xs font-body" aria-label="TikTok">
                    <TikTokIcon size={14} />
                    TikTok
                  </a>
                  <a href="https://www.linkedin.com/company/auspitech-solution/about/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 border border-navy/15 dark:border-white/15 rounded-xl py-2.5 text-navy/60 dark:text-warm-white/60 hover:border-cobalt/40 hover:text-cobalt transition-all text-xs font-body" aria-label="LinkedIn">
                    <LinkedinIcon size={14} />
                    LinkedIn
                  </a>
                  <a href="https://wa.me/2348148645867" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 border border-navy/15 dark:border-white/15 rounded-xl py-2.5 text-navy/60 dark:text-warm-white/60 hover:border-[#25D366]/40 hover:text-[#25D366] transition-all text-xs font-body" aria-label="WhatsApp">
                    <MessageSquare size={14} />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden h-52 bg-dark-card relative border border-navy/10 dark:border-white/10">
                <iframe
                  title="Auspitech Location — Lagos, Nigeria"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.4!2d3.3792057!3d6.5243793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
                  className="w-full h-full border-0 opacity-80"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
