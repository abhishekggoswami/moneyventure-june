"use client"

import { Plus } from "lucide-react"
import { ReactNode, useState } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative w-full bg-white/90 backdrop-blur-sm p-5 sm:p-7 lg:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-white/60 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden"
      style={{ borderRadius: '24px 8px 24px 24px' }}
    >
      {/* + button */}
      <button className="absolute top-3 right-3 w-9 h-9 bg-[#1B4332] rounded-full flex items-center justify-center text-[#C5D82D] hover:scale-110 transition-transform duration-200 shadow-lg z-10">
        <Plus className="w-5 h-5" strokeWidth={2.5} />
      </button>

      {/* Icon Sphere - hover triggers only icon rotation */}
      <div 
        className="w-[68px] h-[68px] bg-finora-green rounded-full flex items-center justify-center mb-5 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ perspective: '600px' }}
      >
        {/* Only the icon rotates, not the sphere - FASTER animation */}
        <div 
          className="transition-transform duration-300 ease-out"
          style={{
            transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-finora-green mb-3">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
