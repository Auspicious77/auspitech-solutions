import { motion } from 'framer-motion'
import logo from '../assets/Auspitechlogo1.png'

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.5, ease: 'easeInOut' } }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { duration: 0.5 } }}
        className="flex flex-col items-center gap-8"
      >
        {/* Logo */}
        <motion.img
          src={logo}
          alt="Auspitech"
          className="h-24 w-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Loading bar */}
        <motion.div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cobalt to-gold rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
