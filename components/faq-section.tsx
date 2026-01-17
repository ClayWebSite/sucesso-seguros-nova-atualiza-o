"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  items: FAQItem[]
  title?: string
  subtitle?: string
}

export function FAQSection({
  items,
  title = "Perguntas Frequentes (FAQ)",
  subtitle = "Encontre respostas para as principais dúvidas sobre nossos serviços.",
}: FAQSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section className="py-12 md:py-20 lg:py-28 section-bg relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#009fe3]/8 rounded-full blur-[100px]" />
      <div className="absolute inset-0 bg-pattern-dots opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#009fe3]/20 px-3 py-1.5 rounded-full mb-4 shadow-sm">
            <HelpCircle className="h-3.5 w-3.5 text-[#009fe3]" />
            <span className="text-xs font-medium text-[#009fe3]">Tire suas dúvidas</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">{title}</h2>
          <p className="text-sm md:text-base text-gray-600">{subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl border border-[#009fe3]/10 shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#009fe3]/20"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[#009fe3]/5 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-[#009fe3] transition-transform duration-300 flex-shrink-0 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 pb-5 text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
