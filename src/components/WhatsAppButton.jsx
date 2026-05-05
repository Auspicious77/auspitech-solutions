import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/2348148645867?text=Hello%20Auspitech%2C%20I%27d%20like%20to%20discuss%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 px-4 py-3 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, transition: { delay: 3, type: 'spring', stiffness: 200 } }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} fill="white" strokeWidth={0} />
      <span className="text-sm font-semibold font-body max-w-0 overflow-hidden group-hover:max-w-[6rem] transition-all duration-300 whitespace-nowrap">
        Let's Chat
      </span>
    </motion.a>
  )
}
