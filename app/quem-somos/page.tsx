"use client"

import { useState } from "react"
import { SafeImage } from "@/components/safe-image"
import { PageStatistics } from "@/components/page-statistics"
import { PartnersCarousel } from "@/components/partners-carousel"
import {
  Shield,
  Target,
  Eye,
  Heart,
  Users,
  TrendingUp,
  CheckCircle,
  Wallet,
  PiggyBank,
  UserCheck,
  Building2,
  ShieldCheck,
} from "lucide-react"
import Link from "next/link"

const estatisticas = [
  { valor: "+10 mil", label: "clientes atendidos" },
  { valor: "+50", label: "parceiros" },
  { valor: "+15", label: "anos de experiência" },
  { valor: "100%", label: "comprometimento" },
]

const ramosSeguros = [
  {
    icon: Wallet,
    title: "Microsseguros",
    subtitle: "Proteção acessível para o dia a dia",
    description:
      "Os microsseguros são soluções pensadas para quem busca proteção essencial com investimento acessível. Cobrem necessidades específicas do cotidiano, oferecendo segurança simples, clara e eficiente para pessoas físicas, profissionais autônomos e pequenos negócios.",
    highlights: [
      "Baixo custo e contratação simplificada",
      "Coberturas objetivas e diretas",
      "Ideal para iniciar a proteção financeira",
    ],
    image: "https://conteudo.mercadopago.com.br/hubfs/imagens/blog/meu_bolso/Seguro-de-vida-mercado-pago.jpg",
  },
  {
    icon: PiggyBank,
    title: "Planos de Capitalização",
    subtitle: "Planejamento financeiro com disciplina e oportunidade",
    description:
      "Os planos de capitalização incentivam o hábito de poupar de forma organizada, oferecendo ao mesmo tempo a possibilidade de participação em sorteios e o resgate de valores conforme as regras do plano.",
    highlights: [
      "Estímulo à organização financeira",
      "Possibilidade de sorteios periódicos",
      "Indicado para objetivos de curto e médio prazo",
    ],
    image:
      "https://edb931018340aeb3dd4b37a7e6ef7c9a.cdn.bubble.io/f1740487179614x618479994610334600/T%C3%ADtulo%20de%20Capitaliza%C3%A7%C3%A3o%20de%20Aluguel%201.jpg",
  },
  {
    icon: UserCheck,
    title: "Seguros de Pessoas",
    subtitle: "Cuidado e segurança para quem mais importa",
    description:
      "Os seguros de pessoas oferecem proteção financeira em situações inesperadas, garantindo tranquilidade para indivíduos e suas famílias em momentos decisivos da vida.",
    highlights: ["Proteção à vida e à renda", "Segurança financeira para a família", "Amparo em situações imprevistas"],
    image:
      "https://einvestidor.estadao.com.br/wp-content/uploads/2025/05/adobestock-8144011862_270520253105.jpg-710x473.webp",
  },
  {
    icon: TrendingUp,
    title: "Planos de Previdência Complementar",
    subtitle: "O futuro começa com planejamento",
    description:
      "A previdência complementar é indicada para quem deseja construir um futuro financeiro sólido, com foco em aposentadoria, sucessão patrimonial ou projetos de longo prazo.",
    highlights: [
      "Planejamento financeiro de longo prazo",
      "Autonomia e estabilidade no futuro",
      "Soluções alinhadas aos seus objetivos",
    ],
    image: "https://hfside.com.br/wp-content/uploads/2024/10/previdencia-privada.jpg",
  },
  {
    icon: Building2,
    title: "Seguros de Danos",
    subtitle: "Proteção para seu patrimônio e seu negócio",
    description:
      "Os seguros de danos protegem bens, empresas e propriedades contra riscos que podem comprometer o patrimônio e a continuidade das atividades.",
    highlights: [
      "Proteção patrimonial completa",
      "Segurança para empresas e bens físicos",
      "Continuidade operacional mesmo diante de imprevistos",
    ],
    image: "https://rapportseguros.com.br/wp-content/uploads/2024/09/seguro-empresarial-2-e1629140490272.jpg",
  },
]

const faqItems = [
  {
    question: "O que é a Sucesso Seguros?",
    answer:
      "A Sucesso Seguros é uma corretora de seguros especializada em oferecer soluções personalizadas para pessoas físicas e empresas. Atuamos com transparência, ética e compromisso com a satisfação dos nossos clientes.",
  },
  {
    question: "Quais tipos de seguros vocês oferecem?",
    answer:
      "Oferecemos uma ampla gama de seguros divididos em cinco ramos principais: Microsseguros, Planos de Capitalização, Seguros de Pessoas, Planos de Previdência Complementar e Seguros de Danos. Nossa equipe está preparada para encontrar a solução ideal para cada necessidade.",
  },
  {
    question: "Como funciona o processo de contratação?",
    answer:
      "O processo é simples e desburocratizado. Você entra em contato conosco, fazemos uma análise das suas necessidades, apresentamos as melhores opções e auxiliamos em toda a documentação.",
  },
  {
    question: "A Sucesso Seguros é regulamentada?",
    answer:
      "Sim, atuamos em total conformidade com as normas da SUSEP e ANS, garantindo segurança e transparência em todas as operações.",
  },
  {
    question: "Vocês oferecem suporte após a contratação?",
    answer:
      "Sim! Oferecemos suporte contínuo aos nossos clientes, auxiliando em sinistros, renovações, ajustes de cobertura e qualquer dúvida que possa surgir.",
  },
]

export default function QuemSomosPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-cyan relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#009fe3]/10 rounded-full blur-[120px]" />

        {/* Dot pattern */}
        <div className="absolute inset-0 bg-pattern-dots opacity-40" />

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#009fe3]/10 text-[#009fe3] rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Quem somos
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Conheça a <span className="text-gradient">Sucesso Seguros</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Uma corretora comprometida com a proteção do que é mais importante para você.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
              <div className="space-y-6 animate-fade-in-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Nossa <span className="text-gradient">História</span>
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Fundada com o propósito de simplificar o acesso a seguros de qualidade, a Sucesso Seguros se
                  especializou em oferecer soluções personalizadas que atendem às necessidades de pessoas físicas e
                  empresas.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Ao longo de nossa trajetória, ampliamos nosso portfólio para incluir os cinco principais ramos de
                  seguros: Microsseguros, Planos de Capitalização, Seguros de Pessoas, Planos de Previdência
                  Complementar e Seguros de Danos.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed font-medium text-[#009fe3]">
                  Essa é a Sucesso Seguros: proteção que une tradição, inovação e proximidade.
                </p>
              </div>
              <div className="relative animate-fade-in-right">
                <div className="absolute -inset-4 bg-[#009fe3]/10 rounded-3xl blur-2xl" />
                <SafeImage
                  src="/images/escritorio-sucesso.jpg"
                  alt="Escritório Sucesso Seguros"
                  width={600}
                  height={400}
                  className="relative rounded-3xl shadow-2xl w-full h-[350px] object-cover"
                />
              </div>
            </div>

            {/* Estatísticas integradas */}
            <PageStatistics statistics={estatisticas} />
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-[#009fe3]/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#009fe3]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00b4d8]/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 animate-fade-in">
              Missão, Visão e Valores
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto animate-fade-in">
              Os pilares que guiam nossa jornada e nosso compromisso com você
            </p>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {/* Missão */}
              <div
                className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/20 animate-fade-in-up min-h-[350px] group transition-all duration-500 hover:scale-[1.02] hover:shadow-[#009fe3]/30 hover:shadow-2xl"
                style={{
                  backgroundImage: "url('https://snktreinamentos.com/wp-content/uploads/2021/10/MISSAO.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/20 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[#009fe3]/10" />
                <div className="relative p-8 h-full flex flex-col">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-white/10 group-hover:bg-[#009fe3]/30 group-hover:scale-110 transition-all duration-500">
                    <Target className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg group-hover:translate-x-1 transition-transform duration-300">
                    Nossa Missão
                  </h3>
                  <p className="text-white/95 leading-relaxed drop-shadow-md">
                    Proteger as conquistas dos nossos clientes, oferecendo soluções de seguros personalizadas que
                    proporcionam segurança e tranquilidade em todas as fases da vida.
                  </p>
                </div>
              </div>

              {/* Visão */}
              <div
                className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/20 animate-fade-in-up delay-100 min-h-[350px] group transition-all duration-500 hover:scale-[1.02] hover:shadow-[#009fe3]/30 hover:shadow-2xl"
                style={{
                  backgroundImage:
                    "url('https://s3.amazonaws.com/ibc-portal/wp-content/uploads/2015/04/11164546/visao-da-empresa.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/20 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[#009fe3]/10" />
                <div className="relative p-8 h-full flex flex-col">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-white/10 group-hover:bg-[#009fe3]/30 group-hover:scale-110 transition-all duration-500">
                    <Eye className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg group-hover:translate-x-1 transition-transform duration-300">
                    Nossa Visão
                  </h3>
                  <p className="text-white/95 leading-relaxed drop-shadow-md">
                    Ser a corretora de seguros referência na região, sempre comprometida com a inovação e com a entrega
                    de soluções eficazes para os nossos clientes.
                  </p>
                </div>
              </div>

              {/* Valores */}
              <div
                className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/20 animate-fade-in-up delay-200 min-h-[350px] group transition-all duration-500 hover:scale-[1.02] hover:shadow-[#009fe3]/30 hover:shadow-2xl"
                style={{
                  backgroundImage:
                    "url('https://attendanceouvidoria.com.br/wp-content/uploads/2023/09/Empresa-Nossos-Valores-Attendance-Ouvidoria1-1024x735.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/20 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[#009fe3]/10" />
                <div className="relative p-8 h-full flex flex-col">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-white/10 group-hover:bg-[#009fe3]/30 group-hover:scale-110 transition-all duration-500">
                    <Heart className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg group-hover:translate-x-1 transition-transform duration-300">
                    Nossos Valores
                  </h3>
                  <ul className="space-y-3 text-white/95">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-white mt-0.5 flex-shrink-0 drop-shadow-md" />
                      <span className="drop-shadow-md">
                        <strong className="text-white">Transparência</strong> em todas as relações
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-white mt-0.5 flex-shrink-0 drop-shadow-md" />
                      <span className="drop-shadow-md">
                        <strong className="text-white">Proximidade</strong> com nossos clientes
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-white mt-0.5 flex-shrink-0 drop-shadow-md" />
                      <span className="drop-shadow-md">
                        <strong className="text-white">Inovação</strong> constante
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ramos de Seguros */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#009fe3]/5 via-white to-[#00b4d8]/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#009fe3]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00b4d8]/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#009fe3]/10 text-[#009fe3] rounded-full text-sm font-medium mb-6">
                <ShieldCheck className="w-4 h-4" />
                Nossos Ramos
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Ramos de <span className="text-gradient">Seguros</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Proteção inteligente para o que realmente importa. Conheça nossas soluções especializadas.
              </p>
            </div>

            <div className="space-y-8">
              {ramosSeguros.map((ramo, index) => {
                const IconComponent = ramo.icon
                const isEven = index % 2 === 0

                return (
                  <div
                    key={index}
                    className={`group relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-[#009fe3]/20 transition-all duration-500 animate-fade-in-up`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`grid lg:grid-cols-2 ${isEven ? "" : "lg:grid-flow-dense"}`}>
                      {/* Image Side */}
                      <div
                        className={`relative h-64 lg:h-auto lg:min-h-[360px] overflow-hidden ${isEven ? "" : "lg:col-start-2"}`}
                      >
                        <SafeImage
                          src={ramo.image}
                          alt={ramo.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white/10" />

                        {/* Badge on image */}
                        <div className="absolute top-4 left-4 lg:top-6 lg:left-6">
                          <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                            <IconComponent className="w-5 h-5 text-[#009fe3]" />
                            <span className="text-sm font-semibold text-gray-900">{ramo.title}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div
                        className={`p-6 lg:p-10 flex flex-col justify-center ${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}
                      >
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 group-hover:text-[#009fe3] transition-colors">
                              {ramo.title}
                            </h3>
                            <p className="text-[#009fe3] font-medium text-lg">{ramo.subtitle}</p>
                          </div>

                          <p className="text-gray-600 leading-relaxed">{ramo.description}</p>

                          <ul className="space-y-3 pt-2">
                            {ramo.highlights.map((highlight, hIndex) => (
                              <li key={hIndex} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#009fe3] flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{highlight}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="pt-4">
                            <Link
                              href="/contato"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-[#009fe3] text-white font-semibold rounded-xl hover:bg-[#0080b8] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                            >
                              Solicitar Cotação
                              <Shield className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Encerramento Institucional */}
            <div className="mt-16 animate-fade-in-up delay-500">
              <div className="relative bg-gradient-to-br from-[#009fe3] via-[#0090d0] to-[#0080b8] rounded-3xl overflow-hidden shadow-2xl shadow-[#009fe3]/30">
                {/* Background decorations */}
                <div className="absolute inset-0 bg-pattern-dots opacity-10" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="relative p-8 lg:p-12">
                  {/* Header with icon */}
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-lg">
                      <ShieldCheck className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4">
                      Existe uma solução certa para cada fase da vida
                    </h3>
                    <p className="text-white/90 text-lg max-w-2xl mx-auto">
                      A SUCESSO SEGUROS oferece soluções inteligentes e personalizadas para proteger pessoas,
                      patrimônios e projetos, com foco em segurança, transparência e confiança.
                    </p>
                  </div>

                  {/* Features grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-10">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-5 text-center hover:bg-white/20 transition-all duration-300">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white font-semibold text-sm lg:text-base">Proteção Completa</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-5 text-center hover:bg-white/20 transition-all duration-300">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white font-semibold text-sm lg:text-base">Atendimento Humanizado</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-5 text-center hover:bg-white/20 transition-all duration-300">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white font-semibold text-sm lg:text-base">Soluções Personalizadas</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-5 text-center hover:bg-white/20 transition-all duration-300">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white font-semibold text-sm lg:text-base">Compromisso Total</p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      href="/contato"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#009fe3] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                    >
                      <Users className="w-5 h-5" />
                      Fale com um Especialista
                    </Link>
                    <a
                      href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seguros."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20BA5A] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Chamar no WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Carousel */}
      <PartnersCarousel />
    </div>
  )
}
