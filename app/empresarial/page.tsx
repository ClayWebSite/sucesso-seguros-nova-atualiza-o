"use client"
import { SafeImage } from "@/components/safe-image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { PartnersCarousel } from "@/components/partners-carousel"
import { PageStatistics } from "@/components/page-statistics"
import { useWhatsAppModal } from "@/contexts/whatsapp-modal-context"
import {
  Building2,
  Shield,
  CheckCircle,
  ArrowRight,
  Users,
  Briefcase,
  Factory,
  ShoppingBag,
  Landmark,
  Flame,
  CloudRain,
  Laptop,
  Scale,
  TrendingUp,
  Home,
  Package,
  Lock,
  Sparkles,
} from "lucide-react"

const tiposEmpresas = [
  {
    icon: ShoppingBag,
    title: "Comércio",
    description: "Lojas, restaurantes e estabelecimentos comerciais",
    image:
      "https://www.casacivil.pr.gov.br/sites/default/arquivos_restritos/files/imagem/2024-08/20220209_agb_comercio-16.jpg",
  },
  {
    icon: Factory,
    title: "Indústria",
    description: "Fábricas, manufaturas e plantas industriais",
    image: "https://static.todamateria.com.br/upload/ti/po/tipos-de-industrias-og.jpg",
  },
  {
    icon: Landmark,
    title: "Serviços",
    description: "Escritórios, consultórios e prestadores de serviço",
    image: "https://cdn.comerciariossp.com.br/upload/img1-Volume-de-servicos-prestados-em-fevereir-18263.jpg",
  },
  {
    icon: Briefcase,
    title: "PME",
    description: "Pequenas e médias empresas de todos os segmentos",
    image:
      "https://digital.sebraers.com.br/wp-content/uploads/2025/09/Sebrae-RS-dia-das-micro-e-pequenas-empresas-valorizacao-e-impacto.png",
  },
]

const coberturas = [
  {
    icon: Building2,
    title: "Seguro Patrimonial",
    description: "Proteção para imóveis, equipamentos e estoques.",
    image: "https://cqcs.com.br/wp-content/uploads/2025/07/seguro-patrimonial.jpg",
  },
  {
    icon: Scale,
    title: "Responsabilidade Civil",
    description: "Cobertura para danos causados a terceiros.",
    image: "https://dhg1h5j42swfq.cloudfront.net/2025/02/20151450/image-306.png",
  },
  {
    icon: Flame,
    title: "Incêndio e Explosão",
    description: "Proteção contra incêndio e danos elétricos.",
    image: "https://www.revistaadnormas.com.br/uploads/2021/06/182.jpg",
  },
  {
    icon: CloudRain,
    title: "Fenômenos Naturais",
    description: "Cobertura para vendaval, granizo e alagamento.",
    image:
      "https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/imagem_plugin/whatsappimageat_onXYTXS.jpg",
  },
  {
    icon: Users,
    title: "Vida em Grupo",
    description: "Seguro de vida coletivo para colaboradores.",
    image:
      "https://www.lgdseguros.com.br/wp-content/uploads/2019/04/voc%C3%AA-j%C3%A1-ouviu-falar-do-seguro-de-vida-em-grupo-saiba-como-funciona-1174.jpg",
  },
  {
    icon: TrendingUp,
    title: "Lucros Cessantes",
    description: "Indenização pela perda de receita.",
    image: "https://files.certifiquei.com.br/p/uploads/2021/11/lucros-cessantes-1.jpg",
  },
]

const patrimonialCoberturas = [
  {
    icon: Home,
    title: "Imóveis e Edificações",
    description: "Proteção para prédios comerciais e galpões.",
    image: "https://www.andrielipicinatto.com.br/wp-content/uploads/2022/10/Regularizacao-de-Imoveis-min-scaled-1.jpg",
  },
  {
    icon: Package,
    title: "Estoque e Mercadorias",
    description: "Cobertura para todo seu estoque.",
    image: "https://www.contabeis.com.br/assets/img/news/a_5839_c75c42433daf2654fb56eeb13db3c8d6.jpg",
  },
  {
    icon: Laptop,
    title: "Equipamentos e Máquinas",
    description: "Proteção para máquinas e tecnologia.",
    image: "https://d2yghbees9788u.cloudfront.net/avozdaindustria/2018/08/maquinas-e-equipamentos-inteligentes-1.webp",
  },
  {
    icon: Lock,
    title: "Roubo e Furto",
    description: "Indenização em caso de roubo qualificado.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9SI261Fj1xnM8Pztksu1S33Jg4wbFaUizqw&s",
  },
]

const depoimentos = [
  {
    stars: 5,
    text: "Tivemos um incêndio no galpão e o seguro cobriu tudo. Conseguimos reconstruir e voltar a operar em tempo recorde.",
    author: "Roberto Carvalho",
    role: "Diretor Industrial",
    service: "Seguro Patrimonial",
  },
  {
    stars: 5,
    text: "O seguro de vida em grupo para nossos funcionários trouxe mais tranquilidade para toda a equipe.",
    author: "Mariana Torres",
    role: "Gerente de RH",
    service: "Seguro de Vida em Grupo",
  },
  {
    stars: 5,
    text: "Nosso estoque foi danificado por uma enchente. A indenização foi rápida e justa.",
    author: "Carlos Eduardo",
    role: "Proprietário",
    service: "Seguro Empresarial Completo",
  },
]

const faqItemsEmpresarial = [
  {
    question: "Qual o número mínimo de funcionários para contratar?",
    answer:
      "Depende do produto. Para planos de saúde empresariais, geralmente a partir de 2 vidas. Seguros patrimoniais não têm limite mínimo de funcionários.",
  },
  {
    question: "O seguro empresarial cobre home office?",
    answer:
      "Sim, muitas apólices já incluem cobertura para equipamentos em home office. Podemos incluir essa proteção na sua cotação personalizada.",
  },
  {
    question: "Como funciona o seguro de responsabilidade civil?",
    answer:
      "Protege sua empresa contra reclamações de terceiros por danos causados durante a atividade profissional. Cobre honorários advocatícios e indenizações.",
  },
  {
    question: "Posso incluir veículos da frota no mesmo seguro?",
    answer:
      "Sim, oferecemos seguro de frota empresarial com condições especiais. Quanto mais veículos, melhores as condições de preço.",
  },
  {
    question: "O seguro cobre ataques cibernéticos?",
    answer:
      "Sim, temos seguros cyber que cobrem vazamento de dados, extorsão digital, interrupção de sistemas e custos de recuperação.",
  },
]

export default function EmpresarialPage() {
  const { openModal } = useWhatsAppModal()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-cyan relative py-8 md:py-12 lg:py-16 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#009fe3]/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#009fe3]/15 rounded-full blur-3xl animate-glow-pulse delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#009fe3]/5 rounded-full blur-3xl" />

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
                  {"Proteção "}
                  <span className="text-[#009fe3] relative">
                    inteligente
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
                <span className="block mt-2">para sua empresa.</span>
              </h1>

              <div className="lg:hidden my-8 flex justify-center animate-scale-in">
                <div className="relative">
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 shadow-xl shadow-cyan-500/10 overflow-hidden">
                    <SafeImage
                      src="/images/wg1g5wr.png"
                      alt="Seguro Empresarial"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white p-3 rounded-xl shadow-lg border border-cyan-100 animate-float">
                    <Shield className="h-6 w-6 text-[#009fe3]" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 bg-white p-3 rounded-xl shadow-lg border border-cyan-100 animate-float delay-500">
                    <Briefcase className="h-6 w-6 text-[#009fe3]" />
                  </div>
                </div>
              </div>

              <p className="mt-6 text-base lg:text-xl text-gray-600 leading-relaxed animate-fade-in-up delay-200">
                Soluções completas em seguros empresariais e patrimoniais para proteger seu negócio e garantir a
                continuidade das operações.
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
                  Falar com Consultor
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
                    src="/images/wg1g5wr.png"
                    alt="Seguro Empresarial"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg shadow-cyan-500/10 border border-cyan-100 animate-float">
                  <Shield className="h-8 w-8 text-[#009fe3]" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg shadow-cyan-500/10 border border-cyan-100 animate-float delay-500">
                  <Briefcase className="h-8 w-8 text-[#009fe3]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segmentos Section */}
      <section className="hero-cyan relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#009fe3]/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#009fe3]/15 rounded-full blur-3xl animate-glow-pulse delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#009fe3]/5 rounded-full blur-3xl" />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,159,227,0.15) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-cyan-200 shadow-lg shadow-cyan-500/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-[#009fe3]" />
              <span className="text-sm font-medium text-gray-700">Segmentos</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {"Soluções para "}
              <span className="text-[#009fe3] relative">
                todos
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
              {" os segmentos"}
            </h2>
            <p className="text-lg text-gray-600">Proteção personalizada para cada tipo de negócio</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiposEmpresas.map((tipo, index) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl group-hover:bg-[#009fe3] transition-all duration-300 group-hover:scale-110">
                      {tipo.icon && (
                        <tipo.icon className="h-7 w-7 text-[#009fe3] group-hover:text-white transition-colors" />
                      )}
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
              Falar com Consultor
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Carousel */}
      <PartnersCarousel />

      {/* Coberturas Section */}
      <section className="hero-cyan relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#009fe3]/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#009fe3]/15 rounded-full blur-3xl animate-glow-pulse delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#009fe3]/5 rounded-full blur-3xl" />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,159,227,0.15) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-cyan-200 shadow-lg shadow-cyan-500/10 px-4 py-2 rounded-full mb-6">
              <CheckCircle className="h-4 w-4 text-[#009fe3]" />
              <span className="text-sm font-medium text-gray-700">Coberturas</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {"Proteção "}
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
              {" para sua empresa"}
            </h2>
            <p className="text-lg text-gray-600">Coberturas abrangentes para todas as situações</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coberturas.map((cobertura, index) => (
              <div
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-cyan-100 shadow-xl shadow-cyan-500/10 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-3"
              >
                <div className="relative h-48 overflow-hidden">
                  <SafeImage
                    src={cobertura.image || "/placeholder.svg"}
                    alt={cobertura.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#009fe3] to-[#0086c7] flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-all duration-500">
                      {cobertura.icon && <cobertura.icon className="h-7 w-7 text-white" />}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#009fe3] transition-colors">
                    {cobertura.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{cobertura.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proteção Patrimonial Section */}
      <section className="py-20 lg:py-28 bg-[#e8f4fc] relative overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#009fe3]/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#009fe3]/15 rounded-full blur-3xl animate-glow-pulse delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#009fe3]/5 rounded-full blur-3xl" />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,159,227,0.15) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-cyan-200 shadow-lg shadow-cyan-500/10 px-4 py-2 rounded-full mb-6">
              <Home className="h-4 w-4 text-[#009fe3]" />
              <span className="text-sm font-medium text-gray-700">Seguro Patrimonial</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {"Proteja seu "}
              <span className="text-[#009fe3] relative">
                patrimônio
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
            </h2>
            <p className="text-lg text-gray-600">Proteção completa para todos os ativos da sua empresa</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {patrimonialCoberturas.map((cobertura, index) => (
              <div
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-cyan-100 shadow-xl shadow-cyan-500/10 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-3"
              >
                <div className="relative h-48 overflow-hidden">
                  <SafeImage
                    src={cobertura.image || "/placeholder.svg"}
                    alt={cobertura.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#009fe3] to-[#0086c7] flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-all duration-500">
                      {cobertura.icon && <cobertura.icon className="h-7 w-7 text-white" />}
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

      {/* PageStatistics Section */}
      <PageStatistics
        page="empresarial"
        title="Proteção Empresarial"
        subtitle="Soluções completas para empresas de todos os portes"
      />

      {/* FAQ Section */}
      <FAQSection
        items={faqItemsEmpresarial}
        title="FAQ Empresarial"
        subtitle="Tire suas dúvidas sobre proteção para o seu negócio."
      />
    </div>
  )
}
