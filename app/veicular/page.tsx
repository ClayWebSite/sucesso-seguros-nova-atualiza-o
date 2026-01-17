"use client"

import { useState } from "react"
import Link from "next/link"
import { SafeImage } from "@/components/safe-image"
import { Button } from "@/components/ui/button"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { PartnersCarousel } from "@/components/partners-carousel"
import { PageStatistics } from "@/components/page-statistics"
import { useWhatsAppModal } from "@/contexts/whatsapp-modal-context"
import {
  Car,
  Shield,
  Wrench,
  AlertTriangle,
  CheckCircle,
  Truck,
  Bike,
  CarFront,
  Flame,
  CloudRain,
  Users,
  ArrowRight,
  Sparkles,
  Star,
  Clock,
  BadgeCheck,
  Phone,
} from "lucide-react"

// Nova seção de Coberturas Essenciais e Adicionais após a Hero
const coberturasEssenciais = [
  {
    icon: Shield,
    title: "Roubo e Furto",
    description: "Indenização integral em caso de roubo ou furto do veículo, incluindo tentativa de roubo com danos.",
    details: ["Indenização de 100% da tabela FIPE", "Cobertura nacional", "Processo simplificado"],
    essential: true,
    highlight: true,
    image: "https://www.minutoseguros.com.br/blog/wp-content/uploads/2022/06/roubo-x-furto-diferenca.jpg",
  },
  {
    icon: Users,
    title: "Danos a Terceiros",
    description: "Cobertura completa para danos materiais e corporais causados a terceiros em acidentes.",
    details: ["Danos materiais até R$100mil", "Danos corporais até R$100mil", "Danos morais inclusos"],
    essential: true,
    highlight: false,
    image: "https://autoplanos.com.br/wp-content/uploads/sites/981/2022/10/terceiros.webp",
  },
  {
    icon: AlertTriangle,
    title: "Colisão Total",
    description: "Proteção completa para danos causados por colisão, capotamento, tombamento e derrapagem.",
    details: ["Reparo em rede credenciada", "Peças originais garantidas", "Carro reserva disponível"],
    essential: true,
    highlight: false,
    image: "https://renovaseguros.com.br/seguros-suhai/wp-content/uploads/2020/09/perda-total-suhai.jpeg",
  },
  {
    icon: Wrench,
    title: "Assistência 24 Horas",
    description: "Socorro mecânico completo a qualquer hora do dia ou da noite, em todo o território nacional.",
    details: ["Reboque ilimitado", "Chaveiro emergencial", "Troca de pneus", "Pane seca"],
    essential: true,
    highlight: true,
    image: "https://grupocare.com.br/wp-content/uploads/2021/07/assistencia-veicular-mob.jpg",
  },
  {
    icon: Sparkles,
    title: "Vidros e Retrovisores",
    description: "Cobertura especializada para vidros, retrovisores, faróis, lanternas e teto solar.",
    details: ["Sem franquia", "Troca ou reparo", "Atendimento express"],
    essential: false,
    highlight: false,
    image: "https://www.poolseg.com.br/blog/wp-content/uploads/2019/05/para-brisa-trincado.jpg",
  },
  {
    icon: CloudRain,
    title: "Fenômenos Naturais",
    description: "Proteção contra enchentes, alagamentos, granizo, raios, vendavais e quedas de árvores.",
    details: ["Enchentes e alagamentos", "Granizo e vendaval", "Queda de objetos"],
    essential: false,
    highlight: false,
    image:
      "https://amvbrasil.com.br/wp-content/uploads/2018/04/protecao-veicular-para-acidentes-de-causas-naturais-saiba-o-que-e-e-como-funciona.jpeg",
  },
]

const tiposVeiculos = [
  {
    icon: CarFront,
    title: "Automóveis",
    description: "Carros de passeio, SUVs e veículos de luxo",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
  },
  {
    icon: Truck,
    title: "Utilitários",
    description: "Vans, pickups e veículos comerciais leves",
    image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800&q=80",
  },
  {
    icon: Bike,
    title: "Motocicletas",
    description: "Motos de todos os tipos e cilindradas",
    image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=800&q=80",
  },
  {
    icon: Car,
    title: "Caminhões",
    description: "Frotas e veículos de carga",
    image: "https://estradao.estadao.com.br/wp-content/uploads/2023/07/Abre-Volvo-FH1-1160x736.jpg",
  },
]

const coberturas = [
  {
    icon: Shield,
    title: "Roubo e Furto",
    description: "Indenização integral em caso de roubo ou furto.",
    image: "https://i0.wp.com/cqcs.com.br/wp-content/uploads/2024/11/contrato-1.jpg?fit=800%2C533&quality=75&ssl=1",
  },
  {
    icon: AlertTriangle,
    title: "Colisão",
    description: "Cobertura para danos causados por colisão.",
    image:
      "https://cdn.prod.website-files.com/63bdbbd2c764e88f730a8673/64e02a511947e3fc56168e18_diferenca-entre-colisao-e-abalroamento%5B1%5D.webp",
  },
  {
    icon: Flame,
    title: "Incêndio",
    description: "Proteção contra incêndio e explosão do veículo.",
    image: "https://www.gifel.com.br/wp-content/uploads/2017/07/safe_image.jpg",
  },
  {
    icon: CloudRain,
    title: "Fenômenos Naturais",
    description: "Cobertura para enchentes, granizo e raios.",
    image: "https://uploads.metroimg.com/wp-content/uploads/2024/12/29210016/granizo-cajamar-1.jpg",
  },
  {
    icon: Users,
    title: "Terceiros",
    description: "Responsabilidade civil por danos a terceiros.",
    image:
      "https://static.wixstatic.com/media/37b0f4_8bd18e4546774e4aa3d159d5c648f579~mv2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/37b0f4_8bd18e4546774e4aa3d159d5c648f579~mv2.jpg",
  },
  {
    icon: Wrench,
    title: "Assistência 24h",
    description: "Socorro mecânico, reboque e chaveiro.",
    image:
      "https://reboquerj.conexaoservico.com.br/wp-content/uploads/2025/12/Google_AI_Studio_2025-12-07T15_16_12.510Z.webp",
  },
]

const depoimentos = [
  {
    stars: 5,
    text: "Quando meu carro foi roubado, fiquei desesperado. Mas o atendimento foi incrível! Em menos de 30 dias recebi a indenização completa.",
    author: "Ricardo Almeida",
    role: "Representante Comercial",
    service: "Seguro Auto Completo",
  },
  {
    stars: 5,
    text: "Precisei do reboque às 3h da manhã em uma estrada. O socorro chegou em 40 minutos! Assistência 24h de verdade.",
    author: "Fernanda Lima",
    role: "Médica",
    service: "Seguro Auto com Assistência",
  },
  {
    stars: 5,
    text: "Bati o carro e estava com medo da burocracia. O consultor me acompanhou em todo o processo. Carro consertado em uma oficina excelente!",
    author: "Marcos Oliveira",
    role: "Advogado",
    service: "Seguro Auto Premium",
  },
]

const estatisticas = [
  { value: "5.000+", label: "Veículos Protegidos" },
  { value: "98%", label: "Satisfação" },
  { value: "24h", label: "Assistência" },
  { value: "30min", label: "Tempo Médio" },
]

const faqItemsVeicular = [
  {
    question: "Qual a diferença entre seguro auto e proteção veicular?",
    answer:
      "O seguro auto é regulamentado pela SUSEP e oferecido por seguradoras. A proteção veicular é oferecida por associações e cooperativas. Trabalhamos apenas com seguradoras regulamentadas para garantir sua segurança.",
  },
  {
    question: "Posso escolher a oficina para reparos?",
    answer:
      "Depende do plano contratado. Alguns seguros oferecem livre escolha de oficina, enquanto outros trabalham com rede referenciada. Explicamos todas as opções na cotação.",
  },
  {
    question: "O que é franquia no seguro auto?",
    answer:
      "Franquia é o valor que você paga em caso de sinistro parcial (quando o veículo é reparado). Quanto maior a franquia escolhida, menor o valor do seguro mensal.",
  },
  {
    question: "O seguro cobre enchentes e alagamentos?",
    answer:
      "Sim, a maioria dos seguros oferece cobertura para eventos da natureza como enchentes, alagamentos, granizo e vendavais. Verificamos isso na sua cotação.",
  },
  {
    question: "Quanto tempo demora para receber a indenização?",
    answer:
      "Em caso de perda total ou roubo, o prazo médio é de 30 dias após a entrega de toda documentação. Ajudamos você em todo o processo.",
  },
]

export default function VeicularPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { openModal } = useWhatsAppModal()

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % depoimentos.length)
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + depoimentos.length) % depoimentos.length)

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
                <span className="block">
                  Proteção{" "}
                  <span className="text-[#009fe3] relative">
                    completa
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                      <path
                        d="M2 10C50 4 150 4 198 10"
                        stroke="#009fe3"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeOpacity="0.3"
                      />
                    </svg>
                  </span>
                </span>
                <span className="block mt-2">para seu veículo.</span>
              </h1>

              <div className="lg:hidden my-8 flex justify-center animate-scale-in">
                <div className="relative">
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 shadow-xl shadow-cyan-500/10 overflow-hidden">
                    <SafeImage
                      src="https://i.imgur.com/0SwsUIq.png"
                      alt="Seguro Veicular"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white p-3 rounded-xl shadow-lg border border-cyan-100 animate-float">
                    <Shield className="h-6 w-6 text-[#009fe3]" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 bg-white p-3 rounded-xl shadow-lg border border-cyan-100 animate-float delay-500">
                    <Wrench className="h-6 w-6 text-[#009fe3]" />
                  </div>
                </div>
              </div>

              <p className="mt-6 text-base lg:text-xl text-gray-600 leading-relaxed animate-fade-in-up delay-200">
                Seguro de automóvel com as melhores coberturas do mercado, processo simples e transparente.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
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

              <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 animate-fade-in-up delay-400">
                {["Regulamentado SUSEP", "Assistência 24h", "Cobertura Nacional"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#009fe3]" />
                    <span>{item}</span>
                  </div>
                ))}
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
                    src="https://i.imgur.com/0SwsUIq.png"
                    alt="Seguro Veicular"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg shadow-cyan-500/10 border border-cyan-100 animate-float">
                  <Shield className="h-8 w-8 text-[#009fe3]" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg shadow-cyan-500/10 border border-cyan-100 animate-float delay-500">
                  <Wrench className="h-8 w-8 text-[#009fe3]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-cyan-200 shadow-sm px-4 py-2 rounded-full mb-6">
              <Car className="h-4 w-4 text-[#009fe3]" />
              <span className="text-sm font-medium text-gray-700">Tipos de Veículos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Protegemos Todos os Tipos</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos seguros personalizados para diferentes tipos de veículos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {tiposVeiculos.map((tipo, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-40 overflow-hidden">
                  <SafeImage
                    src={tipo.image || "/placeholder.svg"}
                    alt={tipo.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                    <tipo.icon className="h-6 w-6 text-[#009fe3]" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{tipo.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tipo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnersCarousel />

      {/* Nova seção: Coberturas Essenciais e Adicionais */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#009fe3]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-100/30 rounded-full blur-[100px]" />
        </div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,159,227,0.08) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-[#009fe3]/20 px-4 py-2 rounded-full mb-6 shadow-sm">
              <Shield className="h-4 w-4 text-[#009fe3]" />
              <span className="text-sm font-semibold text-[#009fe3]">Coberturas Completas</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Proteção sob medida para{" "}
              <span className="text-[#009fe3] relative inline-block">
                seu veículo
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path
                    d="M2 10C50 4 150 4 198 10"
                    stroke="#009fe3"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeOpacity="0.4"
                  />
                </svg>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Monte seu seguro escolhendo as coberturas que fazem sentido para você. Das essenciais às adicionais, temos
              tudo para sua tranquilidade.
            </p>
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
            {[
              { icon: BadgeCheck, value: "100%", label: "Tabela FIPE" },
              { icon: Clock, value: "24h", label: "Assistência" },
              { icon: Star, value: "98%", label: "Satisfação" },
              { icon: Phone, value: "30min", label: "Atendimento" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:border-[#009fe3]/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#009fe3] to-cyan-400 flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Coberturas Grid - Redesigned with larger cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {coberturasEssenciais.map((cobertura, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl overflow-hidden border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  cobertura.highlight
                    ? "border-[#009fe3]/30 shadow-xl shadow-[#009fe3]/10"
                    : "border-gray-100 shadow-lg hover:border-[#009fe3]/20"
                }`}
              >
                {/* Image Container */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <SafeImage
                    src={cobertura.image || "/placeholder.svg"}
                    alt={cobertura.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  {/* Badge */}
                  {cobertura.essential ? (
                    <div className="absolute top-4 right-4 bg-[#009fe3] text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                      <CheckCircle className="h-3.5 w-3.5" />
                      Essencial
                    </div>
                  ) : (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                      Adicional
                    </div>
                  )}

                  {/* Icon on image */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <cobertura.icon className="h-7 w-7 text-[#009fe3]" />
                    </div>
                  </div>

                  {/* Title on image */}
                  <div className="absolute bottom-4 left-24 right-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">{cobertura.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-5">{cobertura.description}</p>

                  {/* Details list */}
                  <ul className="space-y-2.5">
                    {cobertura.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                        <div className="w-5 h-5 rounded-full bg-[#009fe3]/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="h-3 w-3 text-[#009fe3]" />
                        </div>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#009fe3] to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#009fe3] to-cyan-500 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Monte seu seguro personalizado</h3>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Combine as coberturas essenciais com as adicionais que fazem sentido para você. Cotação rápida e sem
                  compromisso!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() =>
                      openModal(
                        "https://wa.me/5561986785640?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20montar%20meu%20seguro%20auto%20personalizado.",
                      )
                    }
                    size="lg"
                    className="bg-white text-[#009fe3] hover:bg-gray-100 shadow-xl text-lg h-14 px-8 rounded-full font-semibold"
                  >
                    Fazer Cotação Agora
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/20 text-lg h-14 px-8 rounded-full bg-transparent"
                  >
                    <Link href="/contato">
                      Falar com Consultor
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={depoimentos} />

      <PageStatistics
        page="veicular"
        title="Proteção Veicular"
        subtitle="Milhares de veículos protegidos com agilidade e confiança"
      />

      {/* FAQ Section */}
      <FAQSection
        items={faqItemsVeicular}
        title="Dúvidas sobre Seguro Veicular"
        subtitle="Tire suas principais dúvidas sobre proteção para seu veículo."
      />
    </div>
  )
}
