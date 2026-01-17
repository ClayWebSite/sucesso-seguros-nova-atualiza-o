"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { SafeImage } from "@/components/safe-image"
import { Button } from "@/components/ui/button"
import { useWhatsAppModal } from "@/contexts/whatsapp-modal-context"
import {
  Users,
  Shield,
  CheckCircle,
  Heart,
  Wallet,
  GraduationCap,
  ArrowRight,
  Baby,
  Briefcase,
  Home,
  HeartHandshake,
  FileCheck,
  Umbrella,
  Stethoscope,
} from "lucide-react"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { PartnersCarousel } from "@/components/partners-carousel"
import { PageStatistics } from "@/components/page-statistics"

const estatisticas = [
  { value: "500+", label: "Famílias Protegidas" },
  { value: "R$50M+", label: "Em Indenizações" },
  { value: "15+", label: "Anos de Experiência" },
  { value: "98%", label: "Satisfação" },
]

const tiposSeguro = [
  {
    icon: Users,
    title: "Vida Individual",
    description: "Proteção personalizada para você e sua família com coberturas flexíveis.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
  },
  {
    icon: Baby,
    title: "Vida Familiar",
    description: "Cobertura completa para toda a família em uma única apólice.",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80",
  },
  {
    icon: Briefcase,
    title: "Vida Empresarial",
    description: "Proteja seus colaboradores e garanta a continuidade dos negócios.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
  },
  {
    icon: HeartHandshake,
    title: "Vida Sênior",
    description: "Coberturas especiais para quem tem mais de 60 anos.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQf-YTd3CYMZ4Ol8TgzBKLWqu8igTCmJLPpA&s",
  },
]

const coberturas = [
  {
    icon: Heart,
    title: "Morte Natural ou Acidental",
    description: "Indenização integral para seus beneficiários.",
    image: "https://martinhagoadv.com.br/uploads/Morte%20Natural.jpg",
  },
  {
    icon: Shield,
    title: "Invalidez Permanente",
    description: "Proteção financeira em caso de invalidez.",
    image:
      "https://genteseguradora.com.br/wp-content/uploads/2019/05/1-cadeirante-invalidez-FotoFreepik-1200x800-1.jpg",
  },
  {
    icon: Stethoscope,
    title: "Doenças Graves",
    description: "Cobertura para diagnóstico de doenças graves.",
    image: "https://andrebeschizza.com.br/wp-content/uploads/2023/11/doencasgraves.jpeg",
  },
  {
    icon: Umbrella,
    title: "Assistência Funeral",
    description: "Cobertura completa para despesas funerárias.",
    image: "https://blog.assist.org.br/wp-content/uploads/2022/09/assistencia-funeral.jpg",
  },
  {
    icon: Home,
    title: "Diárias de Internação",
    description: "Receba diárias em caso de internação hospitalar.",
    image:
      "https://st3.depositphotos.com/1258191/35339/i/450/depositphotos_353395764-stock-photo-lonely-senior-man-sitting-next.jpg",
  },
  {
    icon: GraduationCap,
    title: "Educação dos Filhos",
    description: "Garanta a continuidade dos estudos dos seus filhos.",
    image: "https://excelsior.com.br/wp-content/uploads/2021/10/papel-dos-pais-na-educacao-dos-filhos-1-scaled-1.jpg",
  },
]

const depoimentos = [
  {
    stars: 5,
    text: "O seguro de vida me dá tranquilidade sabendo que minha família estará protegida. A equipe foi excepcional na orientação.",
    author: "Roberto Almeida",
    role: "Empresário",
    service: "Seguro de Vida Individual",
  },
  {
    stars: 5,
    text: "Contratei para toda a família. O processo foi simples e as coberturas são excelentes. Recomendo a todos.",
    author: "Fernanda Costa",
    role: "Médica",
    service: "Seguro de Vida Familiar",
  },
  {
    stars: 5,
    text: "Como empresário, sei da importância de proteger meus colaboradores. O seguro empresarial foi a melhor decisão.",
    author: "Carlos Eduardo",
    role: "Diretor Financeiro",
    service: "Seguro de Vida Empresarial",
  },
]

const linksUteis = [
  {
    href: "https://www.gov.br/susep",
    label: "SUSEP",
    desc: "Superintendência de Seguros Privados",
    icon: Shield,
  },
  {
    href: "https://www.susep.gov.br/menu/servicos/consulta-de-corretores",
    label: "Consulta de Corretor",
    desc: "Verifique nosso registro oficial",
    icon: FileCheck,
  },
  {
    href: "https://www.consumidor.gov.br",
    label: "Consumidor.gov",
    desc: "Portal do consumidor",
    icon: Users,
  },
  {
    href: "https://www.bcb.gov.br",
    label: "Banco Central",
    desc: "Informações financeiras oficiais",
    icon: Wallet,
  },
]

const faqItemsVida = [
  {
    question: "Qual a diferença entre seguro de vida individual e familiar?",
    answer:
      "O seguro individual cobre apenas o titular. O familiar pode incluir cônjuge e filhos, oferecendo proteção para toda a família com um único contrato e valor mais acessível.",
  },
  {
    question: "O seguro de vida cobre doenças graves?",
    answer:
      "Sim, muitos planos oferecem cobertura para doenças graves como câncer, infarto e AVC. Essa cobertura pode antecipar parte do capital segurado para tratamento.",
  },
  {
    question: "Posso resgatar o valor do seguro de vida?",
    answer:
      "Alguns tipos de seguro de vida, como o VGBL, permitem resgate. Já o seguro de vida tradicional não tem resgate, mas oferece prêmios mais acessíveis.",
  },
  {
    question: "Quem pode ser beneficiário do seguro?",
    answer:
      "Você pode indicar qualquer pessoa como beneficiário, não precisa ser parente. O valor é pago diretamente aos beneficiários, sem necessidade de inventário.",
  },
  {
    question: "O seguro de vida tem carência?",
    answer:
      "Para morte natural, geralmente há carência de 24 meses. Para morte acidental, a cobertura é imediata. Doenças graves podem ter carências específicas.",
  },
]

export default function VidaPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const { openModal } = useWhatsAppModal()

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % depoimentos.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + depoimentos.length) % depoimentos.length)
  }

  const handleDragStart = (clientX: number) => {
    setIsDragging(true)
    setStartX(clientX)
  }

  const handleDragEnd = (clientX: number) => {
    if (!isDragging) return
    setIsDragging(false)
    const diff = startX - clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextTestimonial()
      } else {
        prevTestimonial()
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-cyan relative py-8 md:py-12 lg:py-16 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/60 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#009fe3]/20 rounded-full blur-3xl animate-glow-pulse delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/40 rounded-full blur-3xl" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(0,159,227,0.15) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
            <div className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none mx-auto lg:mx-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight animate-fade-in-up">
                <span className="block">Proteja quem você</span>
                <span className="text-[#009fe3] block mt-2">mais ama</span>
              </h1>

              <div className="lg:hidden my-8 flex justify-center animate-scale-in">
                <div className="relative">
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 shadow-xl shadow-cyan-500/10 overflow-hidden">
                    <SafeImage
                      src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80"
                      alt="Família protegida"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white p-3 rounded-xl shadow-lg border border-cyan-100 animate-float">
                    <Heart className="h-6 w-6 text-[#009fe3]" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 bg-white p-3 rounded-xl shadow-lg border border-cyan-100 animate-float delay-500">
                    <Shield className="h-6 w-6 text-[#009fe3]" />
                  </div>
                </div>
              </div>

              <p className="mt-6 text-base lg:text-xl text-gray-600 leading-relaxed animate-fade-in-up delay-200">
                Garanta segurança financeira e tranquilidade para sua família. Porque cuidar de quem amamos é o maior
                ato de amor.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 animate-fade-in-up delay-300">
                {["Sem burocracia", "Regulado SUSEP", "Isento de IR"].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-gray-500 text-sm">
                    <CheckCircle className="h-4 w-4 text-[#009fe3]" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-400">
                <Button
                  onClick={openModal}
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg shadow-[#25D366]/30 text-base md:text-lg h-14 px-8 rounded-full group btn-glow-green"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 mr-2" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Falar com Especialista
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#009fe3] text-[#009fe3] hover:bg-cyan-50 text-base md:text-lg h-14 px-8 rounded-full bg-secondary btn-glow-cyan"
                >
                  <Link href="/contato">
                    Solicitar Cotação
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="hidden lg:flex flex-1 items-center justify-center lg:justify-end w-full max-w-lg lg:max-w-none mx-auto animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 -m-8">
                  <div
                    className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-200/50 animate-spin"
                    style={{ animationDuration: "30s" }}
                  />
                </div>
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 shadow-2xl shadow-cyan-500/10 overflow-hidden">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80"
                    alt="Família protegida"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg shadow-cyan-500/10 border border-cyan-100 animate-float">
                  <Heart className="h-8 w-8 text-[#009fe3]" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg shadow-cyan-500/10 border border-cyan-100 animate-float delay-500">
                  <Shield className="h-8 w-8 text-[#009fe3]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Seguro Section */}
      <section className="section-bg-alt relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#009fe3]/8 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-pattern-dots opacity-30" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Proteção para{" "}
              <span className="text-[#009fe3] relative">
                cada fase
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path
                    d="M2 10C50 4 150 4 198 10"
                    stroke="#009fe3"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeOpacity="0.3"
                  />
                </svg>
              </span>{" "}
              da vida
            </h2>
            <p className="text-lg text-gray-600">Soluções personalizadas para cada momento da sua jornada</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiposSeguro.map((tipo, index) => (
              <div
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-cyan-100 shadow-xl shadow-cyan-500/10 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-3"
              >
                <div className="relative h-52 overflow-hidden">
                  <SafeImage
                    src={tipo.image || "/placeholder.svg"}
                    alt={tipo.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl group-hover:bg-[#009fe3] transition-all duration-300 group-hover:scale-110">
                      <tipo.icon className="h-7 w-7 text-[#009fe3] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-xs font-semibold text-[#009fe3]">Ver mais</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#009fe3] transition-colors">
                    {tipo.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{tipo.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              onClick={openModal}
              size="lg"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg shadow-[#25D366]/30 h-14 px-8 rounded-full btn-glow-green"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 mr-2" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      <PartnersCarousel />

      {/* Coberturas Section */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Coberturas</h2>
            <p className="mt-2 text-gray-600">Conheça as principais coberturas do nosso seguro de vida</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coberturas.map((cobertura, index) => (
              <div
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-cyan-100 shadow-xl shadow-cyan-500/10 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-3"
              >
                <div className="relative h-52 overflow-hidden">
                  <SafeImage
                    src={cobertura.image}
                    alt={cobertura.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl group-hover:bg-[#009fe3] transition-all duration-300 group-hover:scale-110">
                      <cobertura.icon className="h-7 w-7 text-[#009fe3] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#009fe3] transition-colors">
                    {cobertura.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{cobertura.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={depoimentos} />

      <PageStatistics page="vida" title="Seguro de Vida" subtitle="Protegendo famílias e garantindo tranquilidade" />

      <FAQSection
        items={faqItemsVida}
        title="Dúvidas sobre Seguro de Vida"
        subtitle="Tire suas principais dúvidas sobre proteção para você e sua família."
      />

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-[#009fe3] to-[#0086c7]">
        <div className="absolute inset-0 bg-pattern-dots opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full mb-6">
                <Heart className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">Proteja Quem Você Ama</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Pronto para proteger
                <span className="block mt-2 relative inline-block">
                  sua família?
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path
                      d="M2 10C50 4 150 4 198 10"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Solicite uma cotação gratuita e garanta a segurança financeira de quem você mais ama.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={openModal}
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white shadow-xl shadow-black/20 h-14 px-8 rounded-full text-lg font-semibold btn-glow-green"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 mr-2" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Falar pelo WhatsApp
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 bg-transparent h-14 px-8 rounded-full text-lg"
                >
                  <Link href="/contato">
                    Solicitar Cotação Gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8 text-sm text-white/70">
                {["Regulamentado SUSEP", "Sem Burocracia", "Isento de IR"].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-cyan-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
