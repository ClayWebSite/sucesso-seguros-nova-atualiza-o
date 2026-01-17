"use client"

import Link from "next/link"
import { FileText, ChevronRight, Shield, Scale, AlertTriangle, Users, Globe, Lock, Mail, Calendar } from "lucide-react"

const sections = [
  { id: "aceitacao", title: "1. Aceitação dos Termos", icon: FileText },
  { id: "servicos", title: "2. Descrição dos Serviços", icon: Shield },
  { id: "uso", title: "3. Uso do Site", icon: Users },
  { id: "propriedade", title: "4. Propriedade Intelectual", icon: Lock },
  { id: "responsabilidades", title: "5. Responsabilidades", icon: Scale },
  { id: "limitacoes", title: "6. Limitações", icon: AlertTriangle },
  { id: "privacidade", title: "7. Privacidade", icon: Lock },
  { id: "links", title: "8. Links Externos", icon: Globe },
  { id: "modificacoes", title: "9. Modificações", icon: FileText },
  { id: "legislacao", title: "10. Legislação Aplicável", icon: Scale },
  { id: "contato", title: "11. Contato", icon: Mail },
]

export default function TermosDeUsoPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative gradient-hero text-white py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in">
              <Scale className="w-4 h-4 text-[#009fe3]" />
              <span className="text-sm font-medium">Documento Legal</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">Termos de Uso</h1>

            <p className="text-lg text-white/80 mb-6 animate-fade-in">
              Leia atentamente os termos e condições de uso do site Sucesso Seguros.
            </p>

            <div className="flex items-center justify-center gap-2 text-white/60 text-sm animate-fade-in">
              <Calendar className="w-4 h-4" />
              <span>Última atualização: Dezembro de 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#009fe3]" />
                  Navegação Rápida
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-[#009fe3] hover:bg-white transition-all flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#009fe3] transition-colors" />
                      <span className="truncate">{section.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <div className="bg-[#009fe3]/5 border border-[#009fe3]/20 rounded-2xl p-6 mb-10">
                  <p className="text-gray-700 m-0">
                    Bem-vindo ao site da <strong>Sucesso Seguros</strong>. Ao acessar e utilizar nosso site, você
                    concorda com os termos e condições descritos abaixo. Se não concordar com algum destes termos, por
                    favor, não utilize nossos serviços.
                  </p>
                </div>

                {/* Section 1 */}
                <section id="aceitacao" className="mb-12 scroll-mt-24">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#009fe3]/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-[#009fe3]" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 m-0">1. Aceitação dos Termos</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-gray-600">
                    <p>
                      Ao acessar ou usar o site da Sucesso Seguros, você declara que leu, compreendeu e concorda em
                      cumprir estes Termos de Uso, bem como nossa Política de Privacidade.
                    </p>
                    <p>
                      Estes termos constituem um acordo legal vinculativo entre você e a Sucesso Seguros. Se você
                      estiver usando o site em nome de uma empresa ou organização, você declara ter autoridade para
                      vincular essa entidade a estes termos.
                    </p>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="servicos" className="mb-12 scroll-mt-24">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#009fe3]/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-[#009fe3]" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 m-0">2. Descrição dos Serviços</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-gray-600">
                    <p>A Sucesso Seguros é uma corretora de seguros que oferece:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Consultoria especializada em seguros</li>
                      <li>Cotação e comparação de planos de saúde</li>
                      <li>Seguro automotivo e veicular</li>
                      <li>Seguro de vida e previdência</li>
                      <li>Seguros empresariais e patrimoniais</li>
                      <li>Suporte e assistência ao cliente</li>
                    </ul>
                    <p>
                      Nosso site fornece informações sobre nossos serviços e permite que você entre em contato conosco
                      para solicitar cotações e esclarecimentos.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="uso" className="mb-12 scroll-mt-24">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#009fe3]/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#009fe3]" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 m-0">3. Uso do Site</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-gray-600">
                    <p>Ao utilizar nosso site, você concorda em:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Fornecer informações verdadeiras, precisas e completas</li>
                      <li>Não utilizar o site para fins ilegais ou não autorizados</li>
                      <li>Não interferir na segurança ou funcionamento do site</li>
                      <li>Não transmitir vírus, malware ou código malicioso</li>
                      <li>Não coletar informações de outros usuários sem autorização</li>
                      <li>Respeitar os direitos de propriedade intelectual</li>
                    </ul>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="propriedade" className="mb-12 scroll-mt-24">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#009fe3]/10 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-[#009fe3]" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 m-0">4. Propriedade Intelectual</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-gray-600">
                    <p>
                      Todo o conteúdo presente no site da Sucesso Seguros, incluindo mas não limitado a textos, imagens,
                      logotipos, ícones, gráficos, vídeos, áudios e software, é de propriedade exclusiva da Sucesso
                      Seguros ou de seus licenciadores.
                    </p>
                    <p>
                      É expressamente proibida a reprodução, distribuição, modificação, exibição pública ou qualquer
                      outra forma de utilização do conteúdo sem autorização prévia por escrito.
                    </p>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="responsabilidades" className="mb-12 scroll-mt-24">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#009fe3]/10 flex items-center justify-center">
                      <Scale className="w-5 h-5 text-[#009fe3]" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 m-0">5. Responsabilidades</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-gray-600">
                    <p>
                      <strong>Da Sucesso Seguros:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Fornecer informações precisas sobre nossos serviços</li>
                      <li>Proteger os dados pessoais dos usuários conforme a LGPD</li>
                      <li>Manter o site funcional e seguro</li>
                      <li>Prestar atendimento de qualidade</li>
                    </ul>
                    <p className="mt-4">
                      <strong>Do Usuário:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Fornecer dados verdadeiros e atualizados</li>
                      <li>Manter a confidencialidade de suas credenciais</li>
                      <li>Utilizar o site de forma ética e legal</li>
                    </ul>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="limitacoes" className="mb-12 scroll-mt-24">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#009fe3]/10 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-[#009fe3]" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 m-0">6. Limitação de Responsabilidade</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-gray-600">
                    <p>A Sucesso Seguros não se responsabiliza por:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Danos diretos ou indiretos decorrentes do uso do site</li>
                      <li>Interrupções temporárias no serviço</li>
                      <li>Decisões tomadas com base nas informações do site</li>
                      <li>Conteúdo de sites de terceiros linkados</li>
                      <li>Falhas de conexão ou problemas técnicos externos</li>
                    </ul>
                    <p>
                      As informações apresentadas no site têm caráter informativo e não substituem a consultoria
                      personalizada de nossos especialistas.
                    </p>
                  </div>
                </section>

                {/* Section 7 */}
                <section id="privacidade" className="mb-12 scroll-mt-24">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#009fe3]/10 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-[#009fe3]" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 m-0">7. Privacidade e Proteção de Dados</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-gray-600">
                    <p>
                      O tratamento de dados pessoais realizado pela Sucesso Seguros está em conformidade com a Lei Geral
                      de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                    </p>
                    <p>
                      Para informações detalhadas sobre como coletamos, usamos e protegemos seus dados, consulte nossa{" "}
                      <Link href="/politica-de-privacidade" className="text-[#009fe3] hover:underline font-medium">
                        Política de Privacidade
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                {/* Section 8 */}
                <section id="links" className="mb-12 scroll-mt-24">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#009fe3]/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-[#009fe3]" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 m-0">8. Links para Sites de Terceiros</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-gray-600">
                    <p>
                      Nosso site pode conter links para sites de terceiros, como órgãos reguladores (SUSEP, ANS) e
                      parceiros comerciais. Estes links são fornecidos apenas para conveniência.
                    </p>
                    <p>
                      A Sucesso Seguros não tem controle sobre o conteúdo destes sites e não assume responsabilidade por
                      suas políticas de privacidade ou práticas.
                    </p>
                  </div>
                </section>

                {/* Section 9 */}
                <section id="modificacoes" className="mb-12 scroll-mt-24">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#009fe3]/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-[#009fe3]" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 m-0">9. Modificações dos Termos</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-gray-600">
                    <p>
                      A Sucesso Seguros reserva-se o direito de modificar estes Termos de Uso a qualquer momento, sem
                      aviso prévio. As alterações entram em vigor imediatamente após sua publicação no site.
                    </p>
                    <p>
                      Recomendamos que você revise periodicamente esta página para estar ciente de quaisquer mudanças. O
                      uso continuado do site após alterações constitui aceitação dos novos termos.
                    </p>
                  </div>
                </section>

                {/* Section 10 */}
                <section id="legislacao" className="mb-12 scroll-mt-24">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#009fe3]/10 flex items-center justify-center">
                      <Scale className="w-5 h-5 text-[#009fe3]" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 m-0">10. Legislação Aplicável</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-gray-600">
                    <p>
                      Estes Termos de Uso são regidos e interpretados de acordo com as leis da República Federativa do
                      Brasil.
                    </p>
                    <p>
                      Qualquer disputa relacionada a estes termos será submetida à jurisdição exclusiva dos tribunais da
                      comarca de São Paulo - SP.
                    </p>
                  </div>
                </section>

                {/* Section 11 */}
                <section id="contato" className="mb-12 scroll-mt-24">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#009fe3]/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#009fe3]" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 m-0">11. Contato</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-gray-600">
                    <p>
                      Em caso de dúvidas sobre estes Termos de Uso, entre em contato conosco pelos seguintes canais:
                    </p>
                    <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                      <p>
                        <strong>E-mail:</strong> cotacaosucesso@gmail.com
                      </p>
                      <p>
                        <strong>Telefone:</strong> (11) 9999-9999
                      </p>
                      <p>
                        <strong>WhatsApp:</strong> (11) 99999-9999
                      </p>
                      <p>
                        <strong>Endereço:</strong> Av. Paulista, 1000 - São Paulo, SP
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Tem alguma dúvida?</h2>
            <p className="text-gray-600 mb-8">
              Nossa equipe está pronta para esclarecer qualquer questão sobre nossos termos e serviços.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#009fe3] text-white font-bold rounded-xl hover:bg-[#007bb5] transition-all shadow-lg hover:shadow-xl"
              >
                Fale Conosco
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/politica-de-privacidade"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-xl border-2 border-gray-200 hover:border-[#009fe3] hover:text-[#009fe3] transition-all"
              >
                <Lock className="w-5 h-5" />
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
