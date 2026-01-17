"use client"
import { useRef, useState, useCallback, memo } from "react"
import type React from "react"

import Image from "next/image"

const partners = [
  { name: "AIG Seguradora", logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/aig-seguradora-2.png" },
  { name: "Akad Seguradora", logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/Akad-seguradora-1.png" },
  { name: "Allseg", logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/Logo-Allseg.png" },
  { name: "Amil", logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/Amil.png" },
  { name: "Avla", logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/Avla-Logo-2.png" },
  { name: "Azos Seguros", logo: "https://redelojacorr.com.br/wp-content/uploads/2024/05/Azos-Seguros.png" },
  { name: "AXA Seguradora", logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/AXA-seguradora-3.png" },
  {
    name: "Berkley Seguradora",
    logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/Berkley-seguradora-2.png",
  },
  {
    name: "Bradesco Seguradora",
    logo: "https://redelojacorr.com.br/wp-content/uploads/2022/08/bradesco-seguradora-1.png",
  },
  {
    name: "BTG Pactual Seguradora",
    logo: "https://redelojacorr.com.br/wp-content/uploads/2023/11/BTG-Pactual-seguradora.png",
  },
  {
    name: "Centauro Seguradora",
    logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/Centauro-Seguradora.png",
  },
  { name: "Chubb Seguradora", logo: "https://redelojacorr.com.br/wp-content/uploads/2022/08/chubb-seguradora.png" },
  { name: "Denta Assistência", logo: "https://redelojacorr.com.br/wp-content/uploads/2023/11/denta-assistencia.png" },
  { name: "Essor Seguradora", logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/Essor-seguradora-1.png" },
  {
    name: "Excelsior Seguradora",
    logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/excelsior-seguradora.png",
  },
  {
    name: "Extramed Seguradora",
    logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/Extramed-seguradora.png",
  },
  { name: "Ezze Seguros", logo: "https://redelojacorr.com.br/wp-content/uploads/2024/04/logo-ezze-2025-2.png" },
  { name: "Fairfax", logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/Fairfax-nova-logo.png" },
  { name: "HDI Seguradora", logo: "https://redelojacorr.com.br/wp-content/uploads/2022/08/HDI-seguradora.png" },
  { name: "Icatu Seguradora", logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/icatu-seguradora.png" },
  { name: "Ituran Seguradora", logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/Ituran-seguradora-1.png" },
  { name: "Junto Seguradora", logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/Junto-seguradora-1.png" },
  {
    name: "Justos Seguros",
    logo: "https://static.wixstatic.com/media/4a5930_dadf84fbab3441c593fbcecad367c559~mv2.png/v1/fill/w_1323,h_409,al_c/justos.png",
  },
  { name: "Kovr Seguradora", logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/Kovr-seguradora-1.png" },
  { name: "Mag Seguradora", logo: "https://redelojacorr.com.br/wp-content/uploads/2022/08/Mag-Seguradora-1.png" },
  {
    name: "Maxpar Assistências",
    logo: "https://redelojacorr.com.br/wp-content/uploads/2023/11/maxpar-assistencias.png",
  },
  {
    name: "Metlife Seguradora",
    logo: "https://redelojacorr.com.br/wp-content/uploads/2022/08/Metlife-Seguradora-2.png",
  },
  {
    name: "Pottencial Seguradora",
    logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/Pottencial-seguradora-2.png",
  },
  {
    name: "Previsul Seguradora",
    logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/Previsul-seguradora-1.png",
  },
  {
    name: "Prudential Seguradora",
    logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/Prudential-seguradora.png",
  },
  { name: "Quali Corp", logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/Quali-Corp.png" },
  { name: "Sancor Seguradora", logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/Sancor-seguradora-1.png" },
  { name: "Suhai", logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/Suhai-Nova-2.png" },
  { name: "Sura Seguradora", logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/Sura-seguradora-1.png" },
  {
    name: "Swiss Re Seguradora",
    logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/swiss-re-seguradora.png",
  },
  { name: "Too Seguradora", logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/too-seguradora.png" },
  {
    name: "Universal Assistance",
    logo: "https://redelojacorr.com.br/wp-content/uploads/2023/11/Universal-Assistance.png",
  },
  {
    name: "Vital Card Seguradora",
    logo: "https://redelojacorr.com.br/wp-content/uploads/2023/03/Vital-Card-seguradora-2.png",
  },
]

const PartnerLogo = memo(({ partner, keyPrefix }: { partner: (typeof partners)[0]; keyPrefix: string }) => {
  const isJustos = partner.name === "Justos Seguros"

  return (
    <div
      key={keyPrefix}
      className={`flex items-center justify-center shrink-0 ${isJustos ? "h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48" : "h-20 md:h-24 lg:h-28 w-32 md:w-40 lg:w-48"}`}
    >
      <Image
        src={partner.logo || "/placeholder.svg"}
        alt={partner.name}
        width={180}
        height={80}
        className={`object-contain w-auto hover:scale-105 transition-transform duration-300 pointer-events-none select-none ${isJustos ? "max-h-8 md:max-h-10 lg:max-h-12" : "max-h-16 md:max-h-20 lg:max-h-24"}`}
        quality={100}
        unoptimized
        draggable={false}
      />
    </div>
  )
})
PartnerLogo.displayName = "PartnerLogo"

export function PartnersCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setIsPaused(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !containerRef.current) return
      e.preventDefault()
      const x = e.pageX - containerRef.current.offsetLeft
      const walk = (x - startX) * 2
      containerRef.current.scrollLeft = scrollLeft - walk
    },
    [isDragging, startX, scrollLeft],
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    setIsPaused(false)
  }, [])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setIsPaused(true)
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
  }, [])

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging || !containerRef.current) return
      const x = e.touches[0].pageX - containerRef.current.offsetLeft
      const walk = (x - startX) * 2
      containerRef.current.scrollLeft = scrollLeft - walk
    },
    [isDragging, startX, scrollLeft],
  )

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
    setIsPaused(false)
  }, [])

  const renderLogos = (keyPrefix: string) => (
    <div className="flex items-center gap-12 md:gap-16 lg:gap-20 shrink-0">
      {partners.map((partner, index) => (
        <PartnerLogo key={`${keyPrefix}-${index}`} partner={partner} keyPrefix={`${keyPrefix}-${index}`} />
      ))}
    </div>
  )

  return (
    <section className="py-10 md:py-14 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-6 md:mb-8">
        <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8 flex-wrap">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight"
            style={{
              background: "linear-gradient(135deg, #0077b6 0%, #00b4d8 25%, #90e0ef 50%, #00b4d8 75%, #0077b6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 2px 10px rgba(0, 159, 227, 0.2)",
            }}
          >
            Empresas Parceiras
          </h2>
          <Image
            src="https://raichu-uploads.s3.amazonaws.com/logo_rede-lojacorr_DAHW5P.png"
            alt="Lojacorr"
            width={400}
            height={120}
            className="object-contain h-16 md:h-20 lg:h-24 w-auto xl:h-36"
            quality={100}
            unoptimized
          />
        </div>
      </div>

      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-12 md:w-20 lg:w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, white 0%, transparent 100%)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-12 md:w-20 lg:w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, white 0%, transparent 100%)" }}
        />

        <div
          ref={containerRef}
          className="flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            if (!isDragging) setIsPaused(false)
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex"
            style={{
              animation: "scroll-infinite 80s linear infinite",
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {renderLogos("first")}
            <div className="w-16 md:w-20 lg:w-24 shrink-0" />
            {renderLogos("second")}
            <div className="w-16 md:w-20 lg:w-24 shrink-0" />
            {renderLogos("third")}
            <div className="w-16 md:w-20 lg:w-24 shrink-0" />
            {renderLogos("fourth")}
            <div className="w-16 md:w-20 lg:w-24 shrink-0" />
          </div>
        </div>
      </div>
    </section>
  )
}
