"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Building2, FileCheck, Star, Heart, Car, Clock, Award } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Statistic {
  icon: LucideIcon
  value: number
  label: string
  suffix?: string
}

const pageTitles: Record<string, { title: string; subtitle: string }> = {
  home: { title: "Nossos Números", subtitle: "Resultados que comprovam nossa excelência e dedicação" },
  saude: { title: "Saúde em Números", subtitle: "Cuidando de milhares de vidas com excelência" },
  veicular: { title: "Proteção Veicular", subtitle: "Segurança e confiança para seu veículo" },
  vida: { title: "Proteção Familiar", subtitle: "Garantindo o futuro da sua família" },
  empresarial: { title: "Soluções Empresariais", subtitle: "Parceiro estratégico das melhores empresas" },
  quemsomos: { title: "Nossa Trajetória", subtitle: "Anos de dedicação, compromisso e resultados" },
}

const pageStatistics: Record<string, Statistic[]> = {
  home: [
    { icon: Users, value: 1250, label: "Clientes Ativos", suffix: "+" },
    { icon: Building2, value: 320, label: "Empresas Parceiras", suffix: "+" },
    { icon: FileCheck, value: 2840, label: "Apólices Ativas", suffix: "+" },
    { icon: Star, value: 98, label: "Satisfação", suffix: "%" },
  ],
  saude: [
    { icon: Heart, value: 10000, label: "Vidas Protegidas", suffix: "+" },
    { icon: Building2, value: 500, label: "Hospitais Credenciados", suffix: "+" },
    { icon: Clock, value: 24, label: "Atendimento", suffix: "h" },
    { icon: Star, value: 99, label: "Satisfação", suffix: "%" },
  ],
  veicular: [
    { icon: Car, value: 5000, label: "Veículos Segurados", suffix: "+" },
    { icon: Clock, value: 24, label: "Assistência", suffix: "h" },
    { icon: Award, value: 15, label: "Anos de Mercado", suffix: "+" },
    { icon: Star, value: 98, label: "Satisfação", suffix: "%" },
  ],
  vida: [
    { icon: Users, value: 500, label: "Famílias Protegidas", suffix: "+" },
    { icon: Award, value: 15, label: "Anos de Experiência", suffix: "+" },
    { icon: FileCheck, value: 850, label: "Apólices Ativas", suffix: "+" },
    { icon: Star, value: 98, label: "Satisfação", suffix: "%" },
  ],
  empresarial: [
    { icon: Building2, value: 320, label: "Empresas Atendidas", suffix: "+" },
    { icon: Users, value: 15000, label: "Colaboradores", suffix: "+" },
    { icon: FileCheck, value: 850, label: "Apólices Ativas", suffix: "+" },
    { icon: Star, value: 97, label: "Taxa de Renovação", suffix: "%" },
  ],
  quemsomos: [
    { icon: Users, value: 10000, label: "Clientes Satisfeitos", suffix: "+" },
    { icon: Building2, value: 50, label: "Parceiros", suffix: "+" },
    { icon: Award, value: 15, label: "Anos de História", suffix: "+" },
    { icon: Star, value: 100, label: "Compromisso", suffix: "%" },
  ],
}

interface PageStatisticsProps {
  page: "home" | "saude" | "veicular" | "vida" | "empresarial" | "quemsomos"
}

export function PageStatistics({ page }: PageStatisticsProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const statistics = pageStatistics[page] || pageStatistics.home
  const titles = pageTitles[page] || pageTitles.home

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-8 md:py-12 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-sky-50" />

      <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-sky-200/15 rounded-full blur-3xl" />

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgb(6, 182, 212) 1px, transparent 1px), linear-gradient(90deg, rgb(6, 182, 212) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-6 md:mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
            {titles.title}
            <span className="block w-16 h-1 bg-gradient-to-r from-cyan-500 to-sky-600 mx-auto mt-3 rounded-full" />
          </h1>
          <p className="text-sm md:text-base text-slate-600 font-light max-w-xl mx-auto">{titles.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
          {statistics.map((stat, index) => (
            <CounterCard key={index} stat={stat} isVisible={isVisible} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface CounterCardProps {
  stat: Statistic
  isVisible: boolean
  index: number
}

function CounterCard({ stat, isVisible, index }: CounterCardProps) {
  const [count, setCount] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isVisible) return

    const duration = 3000
    let startTime: number | null = null
    const delay = index * 200

    const timer = setTimeout(() => {
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const elapsed = timestamp - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easeOut = 1 - Math.pow(1 - progress, 5)
        setCount(Math.floor(stat.value * easeOut))
        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate)
        } else {
          setCount(stat.value)
        }
      }
      animationRef.current = requestAnimationFrame(animate)
    }, delay)

    return () => {
      clearTimeout(timer)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [isVisible, stat.value, index])

  const Icon = stat.icon

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-xl p-4 md:p-5 text-center transition-all duration-700 cursor-default overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
        transform: isHovered ? "translateY(-4px)" : undefined,
      }}
    >
      <div className="absolute inset-0 bg-white rounded-xl border border-slate-200 shadow-sm" />

      <div
        className={`absolute inset-0 bg-gradient-to-br from-cyan-50 to-sky-50 rounded-xl transition-opacity duration-500 shadow-xl ${isHovered ? "opacity-100" : "opacity-0"}`}
      />

      <div
        className={`absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
      />

      <div className="relative z-10">
        <div
          className={`inline-flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-lg mb-3 transition-all duration-500 ${
            isHovered
              ? "bg-gradient-to-br from-cyan-500 to-sky-600 shadow-md shadow-cyan-500/30"
              : "bg-cyan-100 border border-cyan-200"
          }`}
        >
          <Icon
            className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-500 ${isHovered ? "text-white" : "text-cyan-600"}`}
            strokeWidth={2}
          />
        </div>

        <div className="text-2xl md:text-3xl font-bold mb-1 tracking-tight tabular-nums text-slate-900">
          {count.toLocaleString("pt-BR")}
          <span className="text-lg md:text-xl font-semibold ml-0.5 text-cyan-600">{stat.suffix}</span>
        </div>

        <p className="text-xs md:text-sm font-medium text-slate-600">{stat.label}</p>
      </div>
    </div>
  )
}
