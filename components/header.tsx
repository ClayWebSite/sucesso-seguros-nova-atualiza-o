"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef, useCallback } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronRight, ChevronDown, Users, BookOpen, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWhatsAppModal } from "@/contexts/whatsapp-modal-context"

const pageLogos: { [key: string]: string } = {
  "/saude": "/images/logo-saude.png",
  "/veicular": "/images/logo-veicular.png",
  "/vida": "/images/logo-vida.png",
  "/empresarial": "/images/logo-empresarial.png",
}

const navItems = [
  { label: "Home", href: "/", description: "Página Inicial" },
  { label: "Saúde", href: "/saude", description: "Planos de Saúde" },
  { label: "Veicular", href: "/veicular", description: "Seguro Auto" },
  { label: "Vida", href: "/vida", description: "Seguro de Vida" },
  { label: "Empresarial", href: "/empresarial", description: "Patrimonial" },
  {
    label: "Institucional",
    href: "#",
    children: [
      { href: "/quem-somos", label: "Quem Somos" },
      { href: "/contato", label: "Contato" },
    ],
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { openModal } = useWhatsAppModal()

  const currentLogo = pageLogos[pathname] || "/images/logo.png"
  const currentLogoAlt =
    pathname in pageLogos
      ? `Sucesso ${pathname.replace("/", "").charAt(0).toUpperCase() + pathname.slice(2)}`
      : "Sucesso Seguros"

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])

  useEffect(() => {
    setIsOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setOpenDropdown(null)
    }
  }, [])

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [handleClickOutside])

  const isItemActive = (item: (typeof navItems)[0]) => {
    if (item.children) return item.children.some((child) => pathname === child.href)
    return pathname === item.href
  }

  return (
    <header
      className={`w-full z-[9999] fixed top-0 left-0 right-0 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-white shadow-md border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto flex h-20 sm:h-24 md:h-28 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center transition-all duration-300 hover:opacity-80 hover:scale-105">
          <Image
            src={currentLogo || "/placeholder.svg"}
            alt={currentLogoAlt}
            width={500}
            height={150}
            className="h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto"
            priority
            sizes="(max-width: 640px) 200px, (max-width: 1024px) 350px, 500px"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 relative" ref={dropdownRef}>
          {navItems.map((item) => {
            const isActive = isItemActive(item)

            if (item.children) {
              return (
                <div key={item.label} className="relative z-[9999]">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className={`relative px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-xl group flex items-center gap-1.5 ${
                      isActive
                        ? "text-[#009fe3] bg-[#009fe3]/8"
                        : "text-gray-600 hover:text-[#009fe3] hover:bg-[#009fe3]/5"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    className={`absolute top-full right-0 mt-2 bg-white rounded-xl overflow-hidden transition-all duration-200 w-56 z-[9999] ${
                      openDropdown === item.label
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible pointer-events-none"
                    }`}
                    style={{
                      boxShadow: "0 10px 40px -10px rgba(0, 159, 227, 0.3), 0 0 0 1px rgba(0, 159, 227, 0.1)",
                    }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#009fe3] to-transparent" />

                    <div className="relative p-2">
                      {item.children.map((child, index) => {
                        const isChildActive = pathname === child.href
                        const icons = [Users, BookOpen, Mail]
                        const IconComponent = icons[index] || Users

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                              isChildActive
                                ? "bg-[#009fe3]/10 text-[#009fe3]"
                                : "text-gray-600 hover:bg-[#009fe3]/5 hover:text-[#009fe3]"
                            }`}
                            onClick={() => setOpenDropdown(null)}
                          >
                            <div
                              className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 ${
                                isChildActive
                                  ? "bg-[#009fe3] shadow-md shadow-[#009fe3]/30"
                                  : "bg-[#009fe3]/10 group-hover:bg-[#009fe3]/20"
                              }`}
                            >
                              <IconComponent className={`h-4 w-4 ${isChildActive ? "text-white" : "text-[#009fe3]"}`} />
                            </div>
                            <span className="text-sm font-medium">{child.label}</span>
                            <ChevronRight
                              className={`h-3.5 w-3.5 ml-auto transition-all duration-200 ${
                                isChildActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                              }`}
                            />
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-xl group ${
                  isActive ? "text-[#009fe3] bg-[#009fe3]/8" : "text-gray-600 hover:text-[#009fe3] hover:bg-[#009fe3]/5"
                }`}
              >
                <span className="flex flex-col items-center">
                  <span>{item.label}</span>
                  {item.description && (
                    <span className="text-[10px] text-gray-400 font-normal -mt-0.5">{item.description}</span>
                  )}
                </span>
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            onClick={openModal}
            size="sm"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg shadow-[#25D366]/30 rounded-full min-h-[44px] transition-all duration-300 hover:scale-105 px-5 group"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 mr-2 flex-shrink-0" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>WhatsApp</span>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-[#009fe3] hover:bg-[#0086c7] text-white shadow-lg shadow-[#009fe3]/30 rounded-full min-h-[44px] transition-all duration-300 hover:scale-105 px-5 group"
          >
            <Link href="/contato" className="flex items-center">
              <span>Solicitar Cotação</span>
              <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2.5 rounded-xl hover:bg-[#009fe3]/5 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="container mx-auto px-4 py-2 bg-gradient-to-b from-white to-gray-50/80 border-t border-gray-100/80">
          <div className="grid grid-cols-3 gap-1.5 mb-2">
            {navItems
              .filter((item) => !item.children)
              .map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-xs font-medium py-2 px-2 rounded-lg transition-all duration-200 text-center ${
                      isActive
                        ? "text-white bg-[#009fe3] shadow-sm"
                        : "text-gray-600 bg-white hover:bg-[#009fe3]/10 hover:text-[#009fe3] border border-gray-100"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              })}
          </div>

          {navItems
            .filter((item) => item.children)
            .map((item) => {
              const isActive = isItemActive(item)
              return (
                <div key={item.label} className="mb-2">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className={`w-full text-xs font-medium py-2 px-3 rounded-lg transition-all duration-200 flex items-center justify-between ${
                      isActive || openDropdown === item.label
                        ? "text-[#009fe3] bg-[#009fe3]/10"
                        : "text-gray-600 bg-white border border-gray-100 hover:border-[#009fe3]/30"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3 w-3 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${openDropdown === item.label ? "max-h-40 mt-1" : "max-h-0"}`}
                  >
                    <div className="flex gap-1.5">
                      {item.children?.map((child, index) => {
                        const isChildActive = pathname === child.href
                        const icons = [Users, Mail]
                        const IconComponent = icons[index] || Users
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                              isChildActive
                                ? "bg-[#009fe3] text-white shadow-sm"
                                : "bg-white text-gray-600 border border-gray-100 hover:border-[#009fe3]/30 hover:text-[#009fe3]"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <IconComponent className="h-3 w-3" />
                            {child.label}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}

          <div className="flex gap-2 pt-2 border-t border-gray-100/80">
            <Button
              onClick={() => {
                setIsOpen(false)
                openModal()
              }}
              size="sm"
              className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-md shadow-[#25D366]/20 rounded-full h-10 text-xs font-medium"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5 mr-1.5 flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp</span>
            </Button>
            <Button
              asChild
              size="sm"
              className="flex-1 bg-[#009fe3] hover:bg-[#0086c7] text-white shadow-md shadow-[#009fe3]/20 rounded-full h-10 text-xs font-medium"
            >
              <Link href="/contato" className="flex items-center justify-center">
                <span>Solicitar Cotação</span>
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
