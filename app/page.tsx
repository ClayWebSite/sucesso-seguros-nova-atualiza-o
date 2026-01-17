"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { SafeImage } from "@/components/safe-image"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Heart,
  Car,
  Users,
  Building2,
  MessageCircle,
  CheckCircle,
  Headphones,
  Handshake,
  Star,
  ArrowRight,
  FileCheck,
  Clock,
  Award,
} from "lucide-react"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { PartnersCarousel } from "@/components/partners-carousel"
import { PageStatistics } from "@/components/page-statistics"
import Image from "next/image"
import { SpecialistButton } from "@/components/specialist-button"

const seguros = [
  {
    icon: Heart,
    title: "Planos de Saúde",
    description:
      "Planos individuais, familiares, PME e empresariais. Orientação completa para escolher a melhor opção.",
    href: "/saude",
    cta: "Conhecer Planos",
    image: "https://i.imgur.com/Jsm2Cdj.png",
  },
  {
    icon: Car,
    title: "Seguro Auto",
    description: "Proteção completa para seu veículo, com agilidade, transparência e suporte quando você mais precisa.",
    href: "/veicular",
    cta: "Proteger Veículo",
    image: "https://i.imgur.com/qwEEidW.png",
  },
  {
    icon: Users,
    title: "Seguro de Vida",
    description: "Segurança financeira para quem você ama, com soluções claras e planejamento responsável.",
    href: "/vida",
    cta: "Proteger Família",
    image: "https://i.imgur.com/UfXTiLX.png",
  },
  {
    icon: Building2,
    title: "Seguros Empresariais",
    description: "Proteja sua empresa, patrimônio e responsabilidades com soluções sob medida para o seu negócio.",
    href: "/empresarial",
    cta: "Proteger Empresa",
    image: "https://i.imgur.com/wNZ3szc.png",
  },
]

const diferenciais = [
  {
    icon: Headphones,
    title: "Atendimento Humano e Consultivo",
    description: "Nada de robôs. Você fala direto com especialistas que entendem suas necessidades reais.",
    stat: "100%",
    statLabel: "Atendimento Personalizado",
    bgImage: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=400",
  },
  {
    icon: FileCheck,
    title: "Conformidade Total",
    description: "Atuação rigorosa conforme normas da SUSEP e ANS. Segurança jurídica em todas as operações.",
    stat: "SUSEP",
    statLabel: "Regulamentado",
    bgImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400",
  },
  {
    icon: Shield,
    title: "Soluções Sob Medida",
    description: "Cada cliente é único. Analisamos seu perfil para oferecer a proteção ideal, sem excessos.",
    stat: "4+",
    statLabel: "Tipos de Seguros",
    bgImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400",
  },
  {
    icon: Handshake,
    title: "Parceria Contínua",
    description: "Não desaparecemos após a venda. Suporte completo antes, durante e após a contratação.",
    stat: "365",
    statLabel: "Dias de Suporte",
    bgImage:
      "https://img.freepik.com/fotos-premium/geschaeftsleute-die-erfolgreichen-teamleiter-und-geschaeftstreffen-des-handpartners-ruetteln_34936-698.jpg",
  },
  {
    icon: Clock,
    title: "Agilidade nos Processos",
    description: "Cotações rápidas, documentação simplificada e resposta em tempo recorde.",
    stat: "24h",
    statLabel: "Tempo de Resposta",
    bgImage: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=400",
  },
  {
    icon: Award,
    title: "Experiência Comprovada",
    description: "Anos de mercado ajudando famílias e empresas a protegerem o que mais importa.",
    stat: "10+",
    statLabel: "Anos de Mercado",
    bgImage: "https://sintibrefdf.org.br/wp-content/uploads/2024/05/contrato-experiencia-df.jpg",
  },
]

const porqueSucesso = [
  {
    icon: Headphones,
    title: "Atendimento Consultivo",
    description: "Especialistas que ouvem suas necessidades e orientam a melhor escolha para você.",
  },
  {
    icon: FileCheck,
    title: "Conforme SUSEP e ANS",
    description: "Atuação 100% regulamentada, garantindo segurança jurídica em todas as operações.",
  },
  {
    icon: Handshake,
    title: "Confiança e Clareza",
    description: "Transparência total em cada etapa, sem letras miúdas ou surpresas desagradáveis.",
  },
]

const faqItems = [
  {
    question: "Quanto tempo leva para receber minha cotação?",
    answer: "Nosso time responde em até 24 horas úteis com uma cotação personalizada para o seu perfil e necessidades.",
  },
  {
    question: "A cotação é gratuita e sem compromisso?",
    answer:
      "Sim! Todas as nossas cotações são 100% gratuitas e você não tem nenhuma obrigação de contratar após recebê-la.",
  },
  {
    question: "Como funciona o processo de contratação?",
    answer:
      "Após escolher o plano ideal, nossos especialistas cuidam de toda a burocracia. Você só precisa enviar os documentos necessários e pronto!",
  },
  {
    question: "Vocês trabalham com quais seguradoras?",
    answer:
      "Trabalhamos com as principais seguradoras do mercado brasileiro, como SulAmérica, Bradesco, Allianz, Tokio Marine, Mapfre, entre outras.",
  },
  {
    question: "Posso alterar meu plano depois de contratar?",
    answer:
      "Sim, é possível fazer alterações no seu plano conforme suas necessidades mudam. Entre em contato conosco para avaliarmos as opções disponíveis.",
  },
]

const etapas = [
  {
    number: "01",
    title: "Conte sua necessidade",
    description: "Analisamos seu perfil e entendemos o que precisa ser protegido.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Receba as melhores opções",
    description: "Selecionamos soluções seguras e adequadas ao seu perfil.",
    icon: FileCheck,
  },
  {
    number: "03",
    title: "Escolha com segurança",
    description: "Sem pressão, sem letras miúdas. Transparência total.",
    icon: Shield,
  },
  {
    number: "04",
    title: "Conte conosco sempre",
    description: "Acompanhamento contínuo e suporte quando precisar.",
    icon: Handshake,
  },
]

const depoimentos = [
  {
    stars: 5,
    text: "Fui muito bem orientado desde o primeiro contato. O corretor explicou tudo com clareza e me ajudou a escolher o plano ideal para minha família.",
    author: "Carlos Alberto Silva",
    role: "Empresário",
    service: "Plano de Saúde Familiar",
  },
  {
    stars: 5,
    text: "Atendimento rápido e profissional. Renovei meu seguro auto sem dor de cabeça e com excelente custo-benefício.",
    author: "Mariana Santos",
    role: "Advogada",
    service: "Seguro Auto",
  },
  {
    stars: 5,
    text: "Gostei da transparência e da atenção. Me senti seguro em contratar sabendo que estavam preocupados em entender minha real necessidade.",
    author: "Rafael Mendes",
    role: "Médico",
    service: "Seguro de Vida",
  },
  {
    stars: 5,
    text: "A equipe da Sucesso Seguros foi essencial na transição do plano de saúde da minha empresa. Conseguimos uma cobertura melhor pagando menos.",
    author: "Fernanda Costa",
    role: "CEO - Tech Solutions",
    service: "Plano Empresarial",
  },
  {
    stars: 5,
    text: "Depois de anos com seguradoras que só apareciam na hora de cobrar, finalmente encontrei um atendimento humano de verdade.",
    author: "João Pedro Oliveira",
    role: "Engenheiro Civil",
    service: "Seguro Residencial",
  },
  {
    stars: 5,
    text: "Minha mãe de 72 anos conseguiu um plano de saúde adequado graças à consultoria impecável. Explicaram todas as carências com muita paciência.",
    author: "Ana Paula Rodrigues",
    role: "Professora",
    service: "Plano de Saúde Sênior",
  },
]

export default function HomePage() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % etapas.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-cyan relative py-8 md:py-12 lg:py-16 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#009fe3]/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-pattern-dots opacity-40" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none mx-auto lg:mx-0 order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight lg:leading-[1.15] animate-fade-in-up tracking-tight text-center lg:text-left">
                <span className="block text-4xl sm:text-5xl lg:text-6xl">
                  Protegemos o que{" "}
                  <span className="text-[#009fe3] relative glow-text text-4xl sm:text-5xl lg:text-5xl">
                    realmente importa,
                    <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                      <path
                        d="M2 6C50 2 150 2 198 6"
                        stroke="#009fe3"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeOpacity="0.5"
                      />
                    </svg>
                  </span>
                </span>
                <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl text-gray-800 lg:text-6xl">
                  sua família e seu patrimônio.
                </span>
              </h1>

              <div className="lg:hidden flex justify-center my-6 animate-fade-in">
                <div className="inline-flex items-center gap-2.5 bg-white border-2 border-[#009fe3] shadow-xl shadow-[#009fe3]/20 px-5 py-2.5 rounded-full">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZ7CtZxNG6teqBVpk_fxtYHl0CNm7DVOPnA&s"
                    alt="Lojacorr"
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain flex-shrink-0"
                    unoptimized
                  />
                  <span className="text-base font-bold text-gray-900">Corretora Parceira Lojacorr</span>
                </div>
              </div>

              <div className="lg:hidden flex justify-center my-8 animate-scale-in">
                <div className="relative">
                  <div className="absolute -top-1 -right-1 bg-white/90 backdrop-blur-sm p-2.5 rounded-xl shadow-lg border border-[#009fe3]/20 animate-float glow-cyan z-10">
                    <Shield className="h-5 w-5 text-[#009fe3]" />
                  </div>
                  <div className="absolute -bottom-1 -left-1 bg-white/90 backdrop-blur-sm p-2.5 rounded-xl shadow-lg border border-[#009fe3]/20 animate-float delay-500 glow-cyan z-10">
                    <Heart className="h-5 w-5 text-[#009fe3]" />
                  </div>
                  <div className="absolute inset-0 -m-4">
                    <div
                      className="absolute inset-0 rounded-full border-2 border-dashed border-[#009fe3]/30 animate-spin glow-cyan"
                      style={{ animationDuration: "30s" }}
                    />
                  </div>
                  <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-white to-cyan-50 border border-[#009fe3]/20 shadow-2xl overflow-hidden glow-cyan-strong">
                    <SafeImage
                      src="/images/unnamed-20-282-29.jpg"
                      alt="Sucesso Seguros - Proteção"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed animate-fade-in-up delay-200 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
                Soluções completas em seguros, com atendimento humano, transparente e personalizado para você, sua
                família e seu patrimônio.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#009fe3] hover:bg-[#0086c7] text-white shadow-lg shadow-[#009fe3]/30 text-base md:text-lg rounded-full group btn-glow-cyan px-8 h-14 w-auto"
                >
                  <Link href="/contato">
                    Solicitar Cotação
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <SpecialistButton className="bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg shadow-[#25D366]/30 text-base rounded-full group btn-glow-green px-8 h-14 w-auto md:text-base flex items-center justify-center font-medium">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 mr-2 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Falar com Especialista</span>
                </SpecialistButton>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start text-gray-600 animate-fade-in-up delay-400 gap-4 sm:gap-6 mt-10 text-xs flex-row">
                {["Atendimento consultivo", "Conforme SUSEP e ANS", "Confiança e clareza"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center bg-white/50 backdrop-blur-sm rounded-full mx-0 gap-px px-0.5 py-0.5"
                  >
                    <CheckCircle className="h-5 w-5 text-[#009fe3]" />
                    <span className="py-0 px-0">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex flex-1 items-center justify-center lg:justify-end w-full max-w-lg lg:max-w-none mx-auto order-1 lg:order-2 animate-scale-in">
              <div className="relative">
                {/* Badge centralizado em cima da imagem */}

                {/* Ícones próximos à imagem */}
                <div className="absolute -top-2 -right-2 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-[#009fe3]/20 animate-float glow-cyan z-10">
                  <Shield className="h-8 w-8 text-[#009fe3]" />
                </div>
                <div className="absolute -bottom-2 -left-2 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-[#009fe3]/20 animate-float delay-500 glow-cyan z-10">
                  <Heart className="h-8 w-8 text-[#009fe3]" />
                </div>

                {/* Imagem circular */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-br from-white to-cyan-50 border border-[#009fe3]/20 shadow-2xl overflow-hidden glow-cyan-strong">
                  <SafeImage
                    src="/images/unnamed-20-282-29.jpg"
                    alt="Sucesso Seguros - Proteção"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Seguros Section */}
      <section className="py-20 md:py-28 bg-[#e8f4fc] relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#009fe3]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#009fe3]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-white border border-[#009fe3]/20 px-5 py-2.5 rounded-full mb-6 shadow-sm">
              <Shield className="h-4 w-4 text-[#009fe3]" />
              <span className="text-sm font-semibold text-[#009fe3]">Nossos Seguros</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              Proteção completa para todas as áreas
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Soluções personalizadas para você, sua família e sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {seguros.map((seguro) => (
              <Link
                key={seguro.title}
                href={seguro.href}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100/80"
              >
                {/* Image container */}
                <div className="relative h-44 sm:h-48 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] flex items-center justify-center overflow-hidden p-6">
                  <Image
                    src={seguro.image || "/placeholder.svg"}
                    alt={seguro.title}
                    width={160}
                    height={160}
                    className="object-contain relative z-10 group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                    unoptimized
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="p-2 bg-[#009fe3]/10 rounded-xl">
                      <seguro.icon className="h-5 w-5 text-[#009fe3]" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">{seguro.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{seguro.description}</p>
                  <div className="flex items-center gap-1.5 text-[#009fe3] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    {seguro.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Por Que a Sucesso Seguros? Section */}
      <section className="py-12 md:py-20 lg:py-28 section-bg relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#009fe3]/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-pattern-dots opacity-20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#009fe3]/20 px-3 py-1.5 rounded-full mb-4 shadow-sm">
              <Award className="h-3.5 w-3.5 text-[#009fe3]" />
              <span className="text-xs font-medium text-[#009fe3]">Nossos Diferenciais</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Por Que a Sucesso Seguros?
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Mais do que uma corretora, somos parceiros na proteção do que você mais valoriza.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {porqueSucesso.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-[#009fe3]/10 shadow-lg hover:shadow-xl hover:border-[#009fe3]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#009fe3] to-[#00d4ff] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-[#009fe3]/20">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#009fe3] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empresas Parceiras Section */}
      <PartnersCarousel />

      {/* Como Funciona Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#009fe3]/8 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-pattern-dots opacity-30" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#009fe3]/20 px-3 py-1.5 rounded-full mb-4 shadow-sm">
              <Clock className="h-3.5 w-3.5 text-[#009fe3]" />
              <span className="text-xs font-medium text-[#009fe3]">Processo Simples</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Como funciona nosso trabalho
            </h2>
            <p className="text-sm md:text-base text-gray-600">Quatro passos simples para você ter a proteção ideal.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {etapas.map((etapa, index) => (
              <div
                key={index}
                className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-500 ${
                  activeStep === index
                    ? "border-[#009fe3] shadow-xl shadow-[#009fe3]/20 scale-105"
                    : "border-[#009fe3]/10 shadow-lg hover:shadow-xl hover:border-[#009fe3]/30"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      activeStep === index
                        ? "bg-[#009fe3] shadow-lg shadow-[#009fe3]/30"
                        : "bg-gradient-to-br from-[#009fe3]/10 to-[#009fe3]/5 group-hover:from-[#009fe3] group-hover:to-[#00d4ff]"
                    }`}
                  >
                    <etapa.icon
                      className={`h-6 w-6 transition-colors ${
                        activeStep === index ? "text-white" : "text-[#009fe3] group-hover:text-white"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-3xl font-bold transition-colors ${
                      activeStep === index ? "text-[#009fe3]" : "text-gray-200 group-hover:text-[#009fe3]/50"
                    }`}
                  >
                    {etapa.number}
                  </span>
                </div>
                <h3
                  className={`text-lg font-bold mb-2 transition-colors ${
                    activeStep === index ? "text-[#009fe3]" : "text-gray-900 group-hover:text-[#009fe3]"
                  }`}
                >
                  {etapa.title}
                </h3>
                <p className="text-sm text-gray-600">{etapa.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-12 md:py-20 lg:py-28 section-bg relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#009fe3]/8 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-pattern-dots opacity-30" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#009fe3]/20 px-3 py-1.5 rounded-full mb-4 shadow-sm">
              <Star className="h-3.5 w-3.5 text-[#009fe3] fill-current" />
              <span className="text-xs font-medium text-[#009fe3]">Por que nos escolher</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Diferenciais que fazem a diferença
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Comprometidos com sua proteção e tranquilidade em cada detalhe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {diferenciais.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#009fe3]/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0">
                  <SafeImage
                    src={item.bgImage || "/placeholder.svg"}
                    alt=""
                    fill
                    className="object-cover opacity-10 group-hover:opacity-15 transition-opacity"
                  />
                </div>

                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#009fe3] to-[#00d4ff] flex items-center justify-center shadow-lg shadow-[#009fe3]/20 group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#009fe3]">{item.stat}</div>
                      <div className="text-xs text-gray-500">{item.statLabel}</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#009fe3] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <TestimonialsSection testimonials={depoimentos} />

      {/* PageStatistics Component */}
      <PageStatistics page="home" />

      {/* FAQ Section */}
      <FAQSection
        items={faqItems}
        title="Perguntas Frequentes (FAQ)"
        subtitle="Encontre respostas para as principais dúvidas sobre nossos serviços."
      />
    </div>
  )
}
