import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl p-7 border transition-all duration-300 overflow-hidden cursor-pointer
        bg-white dark:bg-dark-card border-navy/10 dark:border-white/10
        hover:bg-cobalt hover:border-cobalt active:bg-cobalt active:border-cobalt"
    >
      {/* Subtle glow before hover kicks in */}
      <div className="absolute inset-0 bg-gradient-to-br from-cobalt/5 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300 rounded-2xl" />

      <div className="inline-flex p-3 rounded-xl mb-5 bg-cobalt/10 group-hover:bg-white/20 transition-colors duration-300">
        <Icon size={22} className="text-cobalt group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
      </div>

      <h3 className="font-display font-bold text-lg mb-3 text-navy dark:text-warm-white group-hover:text-white transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm font-body leading-relaxed mb-5 text-navy/60 dark:text-warm-white/60 group-hover:text-white/80 transition-colors duration-300">
        {description}
      </p>

      <Link
        to="/services"
        className="flex items-center gap-1.5 text-sm font-semibold font-body transition-colors text-cobalt group-hover:text-gold"
      >
        Learn more
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  )
}
