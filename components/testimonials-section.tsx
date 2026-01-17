"use client"

import { useState, useEffect, useCallback } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export interface Testimonial {
  stars: number
  text: string
  author: string
  role: string
  service?: string
  plan?: string
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
  autoRotateInterval?: number
}

export function TestimonialsSection({ testimonials, autoRotateInterval = 5000 }: TestimonialsSectionProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial()
    }, autoRotateInterval)
    return () => clearInterval(timer)
  }, [autoRotateInterval, nextTestimonial])

  const currentDep = testimonials[currentTestimonial]
  const serviceText = currentDep.service || currentDep.plan || ""

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#e8f4fa] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(0,159,227,0.08) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-white border border-[#009fe3]/20 px-4 py-2 rounded-full mb-6 shadow-sm">
            <Star className="h-4 w-4 text-[#009fe3] fill-[#009fe3]" />
            <span className="text-sm font-medium text-[#009fe3]">Depoimentos</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">O que nossos clientes dizem</h2>
          <p className="text-base md:text-lg text-gray-600">Histórias reais de quem confia na Sucesso Seguros.</p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div
            className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-14 shadow-xl border border-gray-100 transition-all duration-500"
            style={{
              transform: "translateY(0)",
              animation: "fadeInUp 0.5s ease-out",
            }}
          >
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(currentDep.stars)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 md:h-7 md:w-7 text-yellow-400 fill-yellow-400 transition-transform duration-300 hover:scale-110"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-700 text-center mb-8 leading-relaxed font-medium">
              "{currentDep.text}"
            </blockquote>

            {/* Author */}
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-[#009fe3] flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg transition-transform duration-300 hover:scale-105">
                {currentDep.author.charAt(0)}
              </div>
              <p className="font-bold text-gray-900 text-lg md:text-xl">{currentDep.author}</p>
              <p className="text-gray-500 text-sm md:text-base">{currentDep.role}</p>
              {serviceText && <p className="text-[#009fe3] text-sm mt-1 font-medium">{serviceText}</p>}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#009fe3] hover:text-white hover:border-[#009fe3] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? "w-8 bg-[#009fe3]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#009fe3] hover:text-white hover:border-[#009fe3] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
