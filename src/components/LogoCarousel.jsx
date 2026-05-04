import { useState } from 'react'
import BrandModal from './BrandModal'

const brands = [
  {
    id: 1,
    name: 'Marvericks',
    industry: 'Fashion & Lifestyle',
    color: '#1E5CFF',
    description: 'We crafted a bold, youthful brand identity for Marvericks — a Lagos-based fashion brand targeting young professionals. The project included logo design, brand guidelines, social media templates, and a complete visual identity system.',
    deliverables: ['Logo Design', 'Brand Guidelines', 'Social Media Kit', 'Packaging Design'],
  },
  {
    id: 2,
    name: 'Hidden Facts',
    industry: 'Media & Content',
    color: '#F0A500',
    description: 'Hidden Facts is a content and investigative media platform. We built them a distinctive editorial brand identity with a strong typographic presence, dark aesthetic, and strategic visual language that communicates authority and depth.',
    deliverables: ['Brand Identity', 'Typography System', 'Digital Templates', 'Motion Assets'],
  },
  {
    id: 3,
    name: 'Coconot Co.',
    industry: 'Food & Beverage',
    color: '#10B981',
    description: 'A refreshing rebrand for Coconot Co., a natural coconut product company. We developed warm, tropical-inspired visuals, product packaging design, and a cohesive identity that communicates health, freshness, and Nigerian heritage.',
    deliverables: ['Rebranding', 'Packaging Design', 'Product Photography', 'Brand Collateral'],
  },
  {
    id: 4,
    name: 'Molyes Solutions',
    industry: 'Engineering & Consulting',
    color: '#7C3AED',
    description: 'Molyes Solutions Limited needed a corporate identity that conveyed technical expertise and trust. We delivered a professional brand system — clean, structured, and authoritative — that positions them as a premium engineering consultancy.',
    deliverables: ['Corporate Identity', 'Stationery Design', 'Website UI', 'Presentation Templates'],
  },
  {
    id: 5,
    name: 'Beenjso Engineering',
    industry: 'Engineering Services',
    color: '#EF4444',
    description: 'Beenjso Engineering Service required a robust brand presence for their B2B clientele. We built a strong visual identity with technical precision — bold geometry, industrial tones, and a logo mark that speaks to reliability and scale.',
    deliverables: ['Logo & Wordmark', 'Brand Manual', 'Vehicle Branding', 'Marketing Materials'],
  },
  {
    id: 6,
    name: 'Golden Autos',
    industry: 'Automotive',
    color: '#F0A500',
    description: 'Golden Autos is a premium car dealership brand. We designed a luxury brand identity with gold and dark tones, a sophisticated logo, showroom signage concepts, and digital marketing assets that position them at the top tier of the Nigerian auto market.',
    deliverables: ['Luxury Brand Identity', 'Signage Design', 'Digital Ads', 'Social Media Templates'],
  },
  {
    id: 7,
    name: 'Seeger Decor',
    industry: 'Interior Design',
    color: '#0A0F2C',
    description: 'For Seeger Interior and Exterior Decor, we created an elegant, sophisticated brand identity that reflects their craftsmanship and eye for detail. The project covered brand strategy, logo design, portfolio presentation templates, and a digital presence guide.',
    deliverables: ['Brand Strategy', 'Identity Design', 'Portfolio Templates', 'Moodboard Systems'],
  },
]

function BrandCard({ brand, onClick }) {
  return (
    <button
      onClick={() => onClick(brand)}
      className="flex-shrink-0 mx-4 cursor-pointer group focus:outline-none"
      aria-label={`View ${brand.name} details`}
    >
      <div
        className="w-40 h-20 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-cobalt/40 group-hover:scale-105 transition-all duration-300 px-4"
        style={{ background: `${brand.color}15` }}
      >
        <span
          className="font-display font-bold text-base text-center leading-tight"
          style={{ color: brand.color }}
        >
          {brand.name}
        </span>
      </div>
    </button>
  )
}

export default function LogoCarousel() {
  const [selectedBrand, setSelectedBrand] = useState(null)

  return (
    <>
      <div className="overflow-hidden py-4">
        <div className="logo-carousel-track">
          {[...brands, ...brands].map((brand, i) => (
            <BrandCard key={`${brand.id}-${i}`} brand={brand} onClick={setSelectedBrand} />
          ))}
        </div>
      </div>
      <BrandModal brand={selectedBrand} onClose={() => setSelectedBrand(null)} />
    </>
  )
}
