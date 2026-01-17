"use client"

import { useState, useRef, useEffect } from "react"
import { SafeImage } from "@/components/safe-image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useWhatsAppModal } from "@/contexts/whatsapp-modal-context"
import {
  Heart,
  Shield,
  Stethoscope,
  Hospital,
  CheckCircle,
  Users,
  Building2,
  Baby,
  UserCheck,
  Activity,
  Ambulance,
  FileText,
  Award,
  ArrowRight,
  Brain,
  Smile,
  Sparkles,
  X,
  Briefcase,
  Building,
  HeartHandshake,
  HelpCircle,
  PlusCircle,
} from "lucide-react"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PartnersCarousel } from "@/components/partners-carousel"
import { PageStatistics } from "@/components/page-statistics"

const tiposPlanoCards = [
  {
    icon: Users,
    title: "Individual e Familiar",
    shortDesc: "Cobertura completa para você e sua família, com ampla rede credenciada.",
    image:
      "https://estruturadinamica.com.br/wp-content/uploads/2024/10/plano-de-saude-individual-e-familiar-1024x683.jpg",
    modalContent: {
      title: "Plano Individual e Familiar",
      description:
        "Proteção completa para você e todos os membros da sua família, com acesso a uma ampla rede de médicos, hospitais e laboratórios de referência.",
      benefits: [
        "Consultas ilimitadas",
        "Exames completos",
        "Internações",
        "Urgência 24h",
        "Cobertura nacional",
        "Sem carência para urgência",
      ],
      features: [
        "Rede credenciada com mais de 10.000 prestadores",
        "Atendimento em todo o território nacional",
        "Cobertura para consultas, exames e internações",
        "Programas de prevenção e qualidade de vida",
        "App exclusivo para agendamentos",
        "Telemedicina disponível 24 horas",
      ],
    },
  },
  {
    icon: Briefcase,
    title: "Planos PME",
    shortDesc: "Soluções especiais para pequenas e médias empresas.",
    image: "https://capitalbeneficios.com.br/wp-content/uploads/2024/07/plano-pme.jpg",
    modalContent: {
      title: "Planos PME",
      description:
        "Soluções sob medida para pequenas e médias empresas, com condições especiais e gestão simplificada do benefício.",
      benefits: [
        "A partir de 2 vidas",
        "Coparticipação flexível",
        "Gestão online",
        "Suporte dedicado",
        "Preços competitivos",
        "Carências reduzidas",
      ],
      features: [
        "Planos a partir de 2 colaboradores",
        "Opções com e sem coparticipação",
        "Portal de gestão para RH",
        "Relatórios de utilização",
        "Inclusão de dependentes facilitada",
        "Condições especiais de negociação",
      ],
    },
  },
  {
    icon: Building,
    title: "Planos Empresariais",
    shortDesc: "Planos corporativos personalizados para empresas de todos os portes.",
    image: "https://forbes.com.br/wp-content/uploads/2024/10/carreira-melhores-empresas.jpg",
    modalContent: {
      title: "Planos Empresariais",
      description:
        "Planos corporativos completos e personalizados para empresas de médio e grande porte, com gestão profissional e benefícios exclusivos.",
      benefits: [
        "Personalização total",
        "Gestor dedicado",
        "Rede premium",
        "Cobertura internacional",
        "Programas de saúde",
        "Relatórios gerenciais",
      ],
      features: [
        "Desenho de plano personalizado",
        "Gestor de conta exclusivo",
        "Programas de saúde ocupacional",
        "Cobertura para viagens internacionais",
        "Integração com sistemas de RH",
        "Campanhas de prevenção customizadas",
      ],
    },
  },
  {
    icon: HeartHandshake,
    title: "Planos Sênior",
    shortDesc: "Cobertura especializada para maiores de 59 anos.",
    image: "https://hbcsaude.com.br/wp-content/uploads/2024/02/E-Plano-Idosos-1024x683.jpg",
    modalContent: {
      title: "Planos Sênior",
      description:
        "Planos desenvolvidos especialmente para a terceira idade, com coberturas específicas e atendimento humanizado.",
      benefits: [
        "Geriatria inclusa",
        "Fisioterapia",
        "Home care",
        "Medicamentos",
        "Acompanhamento",
        "Rede especializada",
      ],
      features: [
        "Cobertura para consultas geriátricas",
        "Sessões de fisioterapia inclusas",
        "Atendimento domiciliar quando necessário",
        "Descontos em medicamentos",
        "Programas de acompanhamento de crônicos",
        "Rede de especialistas em terceira idade",
      ],
    },
  },
]

const diferenciaisSaude = [
  {
    icon: FileText,
    title: "Cotação Rápida",
    description: "Receba sua cotação em minutos, sem burocracia e totalmente online.",
  },
  {
    icon: Award,
    title: "Carências Reduzidas",
    description: "Condições especiais de carência para novos contratos e portabilidade.",
  },
  {
    icon: Hospital,
    title: "Rede Ampla",
    description: "Acesso aos melhores hospitais, clínicas e laboratórios do país.",
  },
  {
    icon: CheckCircle,
    title: "Cobertura Nacional",
    description: "Atendimento garantido em todo o território nacional.",
  },
]

const tiposPlanos = [
  {
    icon: Users,
    title: "Individual e Familiar",
    description: "Cobertura completa para você e sua família, com ampla rede credenciada.",
    image: "https://www.fqconsultoria.com.br/wp-content/uploads/2023/10/seguro-saude.jpg",
    modalTitle: "Plano Individual e Familiar",
    modalDescription:
      "O plano Individual e Familiar oferece cobertura completa para você e seus dependentes, com acesso a uma ampla rede de hospitais, clínicas e laboratórios.",
    modalFeatures: [
      "Consultas médicas ilimitadas em todas as especialidades",
      "Exames laboratoriais e de imagem completos",
      "Internações hospitalares com acomodação",
      "Atendimento de urgência e emergência 24h",
      "Cobertura para procedimentos cirúrgicos",
      "Inclusão de cônjuge e filhos como dependentes",
      "Rede credenciada com os melhores hospitais",
      "Telemedicina disponível",
    ],
    modalBenefits: ["Carência reduzida", "Reembolso disponível", "Cobertura nacional"],
  },
  {
    icon: Building2,
    title: "Planos PME",
    description: "Soluções especiais para pequenas e médias empresas.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTasruB663sZ1vafmyg5w99rp8rG2lWnZBUOg&s",
    modalTitle: "Planos PME (Pequenas e Médias Empresas)",
    modalDescription:
      "Planos especialmente desenvolvidos para empresas de 2 a 99 vidas, com condições diferenciadas e gestão simplificada.",
    modalFeatures: [
      "A partir de apenas 2 colaboradores",
      "Preços mais acessíveis que planos individuais",
      "Coparticipação flexível para reduzir custos",
      "Gestão online de beneficiários",
      "Inclusão de dependentes dos colaboradores",
      "Portabilidade de carências facilitada",
      "Suporte dedicado para RH",
      "Relatórios de utilização",
    ],
    modalBenefits: ["Menor custo por vida", "Isenção de carência", "Dedução fiscal"],
  },
  {
    icon: Building2,
    title: "Planos Empresariais",
    description: "Planos corporativos personalizados para empresas de todos os portes.",
    image:
      "https://simonexavier.com.br/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-20-at-20.32.29-1024x571.jpeg.webp",
    modalTitle: "Planos Empresariais Corporativos",
    modalDescription:
      "Soluções completas e personalizadas para grandes empresas, com gestão profissional e benefícios exclusivos.",
    modalFeatures: [
      "Personalização total do plano",
      "Rede credenciada premium",
      "Gestão integrada com sistemas de RH",
      "Programas de saúde preventiva",
      "Ambulatório médico na empresa",
      "Check-up executivo incluído",
      "Atendimento VIP para diretoria",
      "Account manager dedicado",
    ],
    modalBenefits: ["100% customizável", "SLA garantido", "Programas de wellness"],
  },
  {
    icon: UserCheck,
    title: "Planos Sênior",
    description: "Cobertura especializada para maiores de 59 anos.",
    image: "https://prestigeseguros.com.br/wp-content/uploads/2020/04/plano-senior-vantagens-1024x683.jpg",
    modalTitle: "Planos Sênior (59+ anos)",
    modalDescription:
      "Planos desenvolvidos especialmente para a terceira idade, com cobertura ampliada e foco em qualidade de vida.",
    modalFeatures: [
      "Cobertura para doenças preexistentes",
      "Geriatras e especialistas em longevidade",
      "Fisioterapia e reabilitação inclusos",
      "Acompanhamento de doenças crônicas",
      "Home care quando necessário",
      "Programas de prevenção de quedas",
      "Nutricionista especializado",
      "Atendimento domiciliar",
    ],
    modalBenefits: ["Sem limite de idade", "Cobertura ampliada", "Cuidado humanizado"],
  },
]

const coberturas = [
  {
    icon: Stethoscope,
    title: "Consultas Médicas",
    description: "Acesso a consultas com especialistas de todas as áreas médicas.",
    image: "https://imovbsb.com.br/wp-content/uploads/2017/10/consultas-medicas.webp",
  },
  {
    icon: Hospital,
    title: "Internações",
    description: "Cobertura completa para internações hospitalares e cirurgias.",
    image:
      "https://telemedicinamorsch.com.br/wp-content/uploads/2023/12/internacao-no-hospital-telemedicina-morsch.jpg",
  },
  {
    icon: Activity,
    title: "Exames e Diagnósticos",
    description: "Laboratórios, imagens e exames de alta complexidade.",
    image: "https://medicinasa.com.br/wp-content/uploads/2022/04/exame-sangue-teste-laboratorio-clinic.jpg",
  },
  {
    icon: Ambulance,
    title: "Urgência e Emergência",
    description: "Atendimento 24h em pronto-socorros credenciados.",
    image: "https://www.saude.sc.gov.br/images/samu_pui%C3%A7arras_capa.jpg",
  },
  {
    icon: Baby,
    title: "Obstetrícia",
    description: "Pré-natal completo, parto e acompanhamento do recém-nascido.",
    image: "https://gravidezsaudavel.com.br/wp-content/uploads/2020/10/Obstetricia-exame-ultrassom-rec-edited.jpg.webp",
  },
  {
    icon: Brain,
    title: "Saúde Mental",
    description: "Consultas com psicólogos e psiquiatras, terapias e tratamentos.",
    image: "https://blog.saocamilo-sp.br/wp-content/uploads/2023/10/Saude.jpg",
  },
]

const planosOdontologicos = [
  {
    icon: Smile,
    title: "Consultas e Avaliações",
    description: "Consultas com dentistas especializados e avaliações periódicas.",
    image: "https://fiibo.com.br/wp-content/uploads/2023/07/o-que-sao-consultas-e-exames-simples.jpg",
    modalContent: {
      title: "Consultas e Avaliações Odontológicas",
      description:
        "Acompanhamento completo da sua saúde bucal com profissionais especializados e equipamentos de última geração.",
      benefits: ["Avaliação completa", "Diagnóstico por imagem", "Plano de tratamento", "Prevenção"],
      features: [
        "Consultas com dentistas especialistas",
        "Avaliações periódicas inclusas",
        "Radiografias panorâmicas",
        "Diagnóstico de cáries e problemas gengivais",
        "Orientação de higiene bucal personalizada",
        "Agendamento online facilitado",
      ],
    },
  },
  {
    icon: Sparkles,
    title: "Limpeza e Profilaxia",
    description: "Limpeza profissional, remoção de tártaro e tratamento preventivo.",
    image: "https://rodrigoalmada.com.br/wp-content/uploads/2022/05/image1-1.jpg",
    modalContent: {
      title: "Limpeza e Profilaxia Dental",
      description:
        "Mantenha seus dentes sempre limpos e saudáveis com tratamentos preventivos realizados por profissionais qualificados.",
      benefits: ["Remoção de tártaro", "Polimento dental", "Aplicação de flúor", "Prevenção de cáries"],
      features: [
        "Limpeza profissional completa",
        "Remoção de tártaro e placa bacteriana",
        "Polimento dental para brilho natural",
        "Aplicação de flúor preventivo",
        "Orientação para higiene em casa",
        "Frequência recomendada: a cada 6 meses",
      ],
    },
  },
  {
    icon: Shield,
    title: "Restaurações",
    description: "Tratamento de cáries, restaurações em resina e amálgama.",
    image: "https://drsergiocaetano.com.br/wp-content/uploads/2019/10/shutterstock_1122560258.jpg",
    modalContent: {
      title: "Restaurações Dentárias",
      description:
        "Recupere a saúde e estética dos seus dentes com restaurações de alta qualidade e materiais modernos.",
      benefits: ["Resina de qualidade", "Estética natural", "Durabilidade", "Indolor"],
      features: [
        "Tratamento de cáries em todos os estágios",
        "Restaurações em resina fotopolimerizável",
        "Reconstrução de dentes fraturados",
        "Substituição de restaurações antigas",
        "Materiais biocompatíveis",
        "Anestesia local para conforto",
      ],
    },
  },
  {
    icon: Heart,
    title: "Tratamento de Canal",
    description: "Endodontia completa com especialistas certificados.",
    image:
      "https://cdn.prod.website-files.com/645da650ed7bc34887c44634/66d1fc1dbe0133e023d52fc8_66ba30522d91fad7c6820622_66ba2fc95623955548fe57cb_dentista-realizando-um-tratamento-de-canal.webp",
    modalContent: {
      title: "Tratamento de Canal (Endodontia)",
      description:
        "Salve seu dente natural com tratamento de canal realizado por endodontistas experientes e tecnologia avançada.",
      benefits: ["Especialistas certificados", "Tecnologia moderna", "Sem dor", "Preserva o dente"],
      features: [
        "Endodontia completa e especializada",
        "Microscopia para maior precisão",
        "Tratamento indolor com anestesia",
        "Preservação do dente natural",
        "Acompanhamento pós-tratamento",
        "Equipamentos de última geração",
      ],
    },
  },
]

const beneficios = [
  { icon: FileText, text: "Cotação rápida e sem burocracia" },
  { icon: Award, text: "Carências reduzidas ou isenção" },
  { icon: Hospital, text: "Ampla rede de hospitais e clínicas" },
  { icon: CheckCircle, text: "Cobertura nacional" },
]

const depoimentos = [
  {
    stars: 5,
    text: "Quando precisei de uma cirurgia de emergência, o plano cobriu tudo sem nenhuma dor de cabeça. Atendimento excepcional!",
    author: "Mariana Santos",
    role: "Empresária",
    service: "Plano Familiar Premium",
  },
  {
    stars: 5,
    text: "A rede credenciada é incrível! Consegui marcar consultas com especialistas em poucos dias. Minha família toda está protegida.",
    author: "Carlos Eduardo",
    role: "Engenheiro Civil",
    service: "Plano Individual",
  },
  {
    stars: 5,
    text: "O pré-natal e o parto da minha filha foram acompanhados com muito cuidado. Os melhores hospitais e médicos à disposição!",
    author: "Juliana Mendes",
    role: "Advogada",
    service: "Plano Familiar",
  },
]

// estatisticas is not used in the original code, but will be used after merging
const estatisticas = [
  { value: "10.000+", label: "Vidas Protegidas" },
  { value: "99%", label: "Satisfação" },
  { value: "500+", label: "Hospitais" },
  { value: "24h", label: "Atendimento" },
]

const faqItemsSaude = [
  {
    question: "Qual a diferença entre plano de saúde e seguro saúde?",
    answer:
      "O plano de saúde funciona com rede credenciada própria. O seguro saúde permite livre escolha de médicos e hospitais, com reembolso posterior. Ambos são regulamentados pela ANS.",
  },
  {
    question: "Posso incluir dependentes no meu plano?",
    answer:
      "Sim! Você pode incluir cônjuge, filhos, enteados e, em alguns casos, pais e sogros. Cada operadora tem regras específicas que explicamos na cotação.",
  },
  {
    question: "O que é carência no plano de saúde?",
    answer:
      "Carência é o período que você precisa aguardar para usar determinados serviços. Por lei, urgências têm 24h, consultas 30 dias, e procedimentos complexos até 180 dias.",
  },
  {
    question: "Posso manter meu médico atual?",
    answer:
      "Depende do plano escolhido. Verificamos se seu médico faz parte da rede credenciada ou se o plano oferece reembolso para consultas particulares.",
  },
  {
    question: "O plano cobre tratamentos estéticos?",
    answer:
      "Procedimentos puramente estéticos geralmente não são cobertos. Porém, cirurgias reparadoras com indicação médica podem ter cobertura. Consultamos caso a caso.",
  },
]

const tiposPlanoDestaque = [
  {
    icon: Users,
    title: "Plano Familiar Essencial",
    description: "Ideal para proteger sua família com cobertura completa e acesso à rede credenciada.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    features: [
      "Consultas em todas as especialidades",
      "Exames básicos e complexos",
      "Atendimento de urgência 24h",
      "Internações",
    ],
    cta: "Cotar Plano Familiar",
  },
  {
    icon: Building2,
    title: "Plano PME Flex",
    description: "Soluções flexíveis para sua empresa a partir de 2 vidas com ótimo custo-benefício.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
    features: ["A partir de 2 vidas", "Coparticipação opcional", "Gestão online", "Rede referenciada"],
    cta: "Cotar Plano PME",
  },
  {
    icon: Building,
    title: "Plano Corporativo Premium",
    description: "Cobertura completa e diferenciada para grandes empresas com rede exclusiva.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    features: [
      "Rede credenciada de ponta",
      "Gestão de saúde corporativa",
      "Cobertura internacional",
      "Programas de bem-estar",
    ],
    cta: "Cotar Plano Corporativo",
  },
]

export default function SaudePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [selectedPlano, setSelectedPlano] = useState<(typeof tiposPlanoCards)[0] | null>(null)
  const [selectedOdonto, setSelectedOdonto] = useState<(typeof planosOdontologicos)[0] | null>(null)
  const { openModal } = useWhatsAppModal()

  useEffect(() => {
    if (selectedPlano || selectedOdonto) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedPlano, selectedOdonto])

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
      if (diff > 0) nextTestimonial()
      else prevTestimonial()
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {selectedPlano && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedPlano(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] sm:max-h-[85vh] md:max-h-[80vh] shadow-2xl transform transition-all animate-scale-in overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do modal com imagem */}
            <div className="relative h-32 sm:h-40 md:h-48 flex-shrink-0">
              <SafeImage src={selectedPlano.image} alt={selectedPlano.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <button
                onClick={() => setSelectedPlano(null)}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="h-5 w-5 text-white" />
              </button>
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <selectedPlano.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#009fe3]" />
                </div>
              </div>
            </div>

            {/* Conteúdo do modal */}
            <div className="p-4 sm:p-5 md:p-6 overflow-y-auto flex-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {selectedPlano.modalContent.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-5">{selectedPlano.modalContent.description}</p>

              {/* Benefits */}
              <div className="mb-4 sm:mb-5">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">Principais Benefícios</h4>
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                  {selectedPlano.modalContent.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-[#009fe3] flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">O que está incluso</h4>
                <div className="space-y-1.5 sm:space-y-2">
                  {selectedPlano.modalContent.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#009fe3] mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Button
                asChild
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white h-11 sm:h-12 rounded-xl shadow-lg shadow-[#25D366]/30 text-sm sm:text-base"
              >
                <a
                  href={`https://wa.me/5561986785640?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20o%20${encodeURIComponent(selectedPlano.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 sm:h-5 sm:w-5 mr-2"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Solicitar Cotação
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}

      {selectedOdonto && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedOdonto(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] sm:max-h-[85vh] md:max-h-[80vh] shadow-2xl transform transition-all animate-scale-in overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-32 sm:h-40 md:h-48 flex-shrink-0">
              <SafeImage src={selectedOdonto.image} alt={selectedOdonto.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <button
                onClick={() => setSelectedOdonto(null)}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="h-5 w-5 text-white" />
              </button>
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <selectedOdonto.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#009fe3]" />
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 md:p-6 overflow-y-auto flex-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {selectedOdonto.modalContent.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-5">{selectedOdonto.modalContent.description}</p>

              <div className="mb-4 sm:mb-5">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">Principais Benefícios</h4>
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                  {selectedOdonto.modalContent.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-[#009fe3] flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">O que está incluso</h4>
                <div className="space-y-1.5 sm:space-y-2">
                  {selectedOdonto.modalContent.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#009fe3] mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                asChild
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white h-11 sm:h-12 rounded-xl shadow-lg shadow-[#25D366]/30 text-sm sm:text-base"
              >
                <a
                  href={`https://wa.me/5561986785640?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20${encodeURIComponent(selectedOdonto.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 sm:h-5 sm:w-5 mr-2"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Solicitar Cotação
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}

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
                  Planos de{" "}
                  <span className="text-[#009fe3] relative">
                    Saúde
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
                <span className="block mt-2">para você e sua família.</span>
              </h1>

              <div className="lg:hidden my-8 flex justify-center animate-scale-in">
                <div className="relative">
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 shadow-xl shadow-cyan-500/10 overflow-hidden">
                    <SafeImage
                      src="https://i.imgur.com/QjOsXkE.png"
                      alt="Plano de Saúde"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white p-3 rounded-xl shadow-lg border border-cyan-100 animate-float">
                    <Heart className="h-6 w-6 text-[#009fe3]" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 bg-white p-3 rounded-xl shadow-lg border border-cyan-100 animate-float delay-500">
                    <Stethoscope className="h-6 w-6 text-[#009fe3]" />
                  </div>
                </div>
              </div>

              <p className="mt-6 text-base lg:text-xl text-gray-600 leading-relaxed animate-fade-in-up delay-200">
                Encontre o plano de saúde ideal para você, sua família ou sua empresa. Orientação completa e
                transparente.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg shadow-[#25D366]/30 text-base md:text-lg h-14 px-8 rounded-full group btn-glow-green"
                >
                  <a
                    href="https://wa.me/5561986785640?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20uma%20cotação%20de%20plano%20de%20saúde."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 mr-2" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Falar com Especialista
                  </a>
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
                {["Regulamentado ANS", "Sem burocracia", "Cobertura Nacional"].map((item) => (
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
                    src="https://i.imgur.com/QjOsXkE.png"
                    alt="Plano de Saúde"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg shadow-cyan-500/10 border border-cyan-100 animate-float">
                  <Heart className="h-8 w-8 text-[#009fe3]" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg shadow-cyan-500/10 border border-cyan-100 animate-float delay-500">
                  <Stethoscope className="h-8 w-8 text-[#009fe3]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-cyan-200 shadow-sm px-4 py-2 rounded-full mb-6">
              <Award className="h-4 w-4 text-[#009fe3]" />
              <span className="text-sm font-medium text-gray-700">Nossos Diferenciais</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Por que escolher nossos planos?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos as melhores condições para você e sua família
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {diferenciaisSaude.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
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

      {/* Tipos de Plano Cards Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-cyan-50/50 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-cyan-200 px-4 py-2 rounded-full mb-6 shadow-sm">
              <Heart className="h-4 w-4 text-[#009fe3]" />
              <span className="text-sm font-medium text-gray-700">Tipos de Plano</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Escolha o plano <span className="text-[#009fe3]">perfeito</span> para você
            </h2>
            <p className="text-base md:text-lg text-gray-600">Planos adaptados para cada fase da sua vida</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
            {tiposPlanoCards.map((plano, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/10 group-hover:via-transparent group-hover:to-cyan-400/5 transition-all duration-500 rounded-2xl pointer-events-none" />
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/0 to-cyan-600/0 group-hover:from-cyan-400/20 group-hover:to-cyan-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />

                <div className="relative h-44 overflow-hidden flex-shrink-0">
                  <SafeImage
                    src={plano.image}
                    alt={plano.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="w-10 h-10 bg-[#009fe3] rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                      <plano.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="relative p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#009fe3] transition-colors">
                    {plano.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{plano.shortDesc}</p>

                  <button
                    onClick={() => setSelectedPlano(plano)}
                    className="w-full py-2.5 px-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center gap-2 mt-auto"
                  >
                    Saber mais
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="relative bg-[#25D366] hover:bg-[#128C7E] text-white h-14 px-10 rounded-full shadow-xl shadow-[#25D366]/40 hover:shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-105 animate-pulse-subtle overflow-hidden group"
            >
              <a
                href="https://wa.me/5561986785640?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20uma%20cotação%20de%20plano%20de%20saúde."
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 mr-2" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="relative">Falar com Especialista no WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-cyan-200 px-4 py-2 rounded-full mb-6 shadow-sm">
              <Shield className="h-4 w-4 text-[#009fe3]" />
              <span className="text-sm font-medium text-gray-700">Coberturas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tudo o que você <span className="text-[#009fe3]">precisa</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Coberturas completas para cuidar da sua saúde em todas as situações
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {coberturas.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl">
                    <item.icon className="h-6 w-6 text-[#009fe3]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-cyan-200 px-4 py-2 rounded-full mb-6 shadow-sm">
              <Smile className="h-4 w-4 text-[#009fe3]" />
              <span className="text-sm font-medium text-gray-700">Planos Odontológicos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cuide do seu <span className="text-[#009fe3]">sorriso</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600">Planos odontológicos completos para toda a família</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {planosOdontologicos.map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl">
                    <item.icon className="h-6 w-6 text-[#009fe3]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
                  <Button
                    onClick={() => setSelectedOdonto(item)}
                    size="sm"
                    className="w-full bg-[#009fe3] hover:bg-[#007ab8] text-white rounded-full"
                  >
                    Saber mais
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnersCarousel />

      <TestimonialsSection testimonials={depoimentos} />

      <PageStatistics page="saude" title="Números da Saúde" subtitle="Protegendo vidas com excelência e dedicação" />

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-cyan-200 px-4 py-2 rounded-full mb-6 shadow-sm">
              <HelpCircle className="h-4 w-4 text-[#009fe3]" />
              <span className="text-sm font-medium text-gray-700">Perguntas Frequentes</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dúvidas sobre Planos de Saúde</h2>
            <p className="text-base md:text-lg text-gray-600">
              Tire suas principais dúvidas sobre planos e seguros de saúde.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {faqItemsSaude.map((item, index) => (
              <div key={index} className="mb-5 border-b border-gray-200 pb-5">
                <details className="group cursor-pointer">
                  <summary className="flex items-center justify-between text-lg font-semibold text-gray-900 group-open:text-[#009fe3] transition-colors">
                    <span>{item.question}</span>
                    <PlusCircle className="h-5 w-5 text-gray-400 group-open:text-[#009fe3] transition-transform transform duration-300 group-open:rotate-45" />
                  </summary>
                  <div className="mt-4 text-gray-600 text-sm leading-relaxed animate-fade-in-down">{item.answer}</div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
