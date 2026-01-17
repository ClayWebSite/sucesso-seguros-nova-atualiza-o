import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Shield, Award, CheckCircle2, Mail, Phone } from "lucide-react"

const footerLinks = {
  servicos: [
    { href: "/saude", label: "Planos de Saúde" },
    { href: "/veicular", label: "Seguro Auto" },
    { href: "/vida", label: "Seguro de Vida" },
    { href: "/empresarial", label: "Seguros Empresariais" },
  ],
  institucional: [
    { href: "/quem-somos", label: "Quem Somos" },
    { href: "/contato", label: "Contato" },
    { href: "/politica-de-privacidade", label: "Política de Privacidade" },
    { href: "/termos-de-uso", label: "Termos de Uso" },
  ],
  linksUteis: [
    { href: "https://www.gov.br/ans", label: "ANS", external: true },
    { href: "https://www.gov.br/susep", label: "SUSEP", external: true },
    { href: "https://veiculos.fipe.org.br", label: "Tabela FIPE", external: true },
  ],
}

export function Footer() {
  return (
    <footer className="relative overflow-x-hidden bg-gradient-to-b from-[#f0f7fc] to-[#e4f1fa]">
      {/* Main footer content */}
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-4 text-center lg:text-left">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Sucesso Seguros"
                width={280}
                height={84}
                className="w-auto h-20 md:h-24 mx-auto lg:mx-0 lg:h-36"
                loading="lazy"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
              Proteção inteligente para o que realmente importa. Atendimento humano, transparente e personalizado.
            </p>

            <div className="flex flex-col gap-3 items-center lg:items-start">
              <a
                href="mailto:cotacaosucesso@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-sky-600 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-sky-600" />
                </div>
                cotacaosucesso@gmail.com
              </a>
              <a
                href="https://wa.me/5561986785640?text=Vim%20pelo%20site!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seguros."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-sky-600 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-sky-600" />
                </div>
                +55 61 98678-5640
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Serviços */}
              <div className="text-center md:text-left">
                <h3 className="font-bold text-gray-900 mb-5 flex items-center gap-2 justify-center md:justify-start text-base">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-sky-400 to-sky-600 rounded-full"></span>
                  Serviços
                </h3>
                <ul className="space-y-3">
                  {footerLinks.servicos.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-sky-600 transition-colors flex items-center gap-1 group justify-center md:justify-start"
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-sky-500" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Institucional */}
              <div className="text-center md:text-left">
                <h3 className="font-bold text-gray-900 mb-5 flex items-center gap-2 justify-center md:justify-start text-base">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-sky-400 to-sky-600 rounded-full"></span>
                  Institucional
                </h3>
                <ul className="space-y-3">
                  {footerLinks.institucional.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-sky-600 transition-colors flex items-center gap-1 group justify-center md:justify-start"
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-sky-500" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links Úteis */}
              <div className="text-center md:text-left col-span-2 md:col-span-1">
                <h3 className="font-bold text-gray-900 mb-5 flex items-center gap-2 justify-center md:justify-start text-base">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-sky-400 to-sky-600 rounded-full"></span>
                  Links Úteis
                </h3>
                <ul className="space-y-3 flex flex-row md:flex-col gap-6 md:gap-0 justify-center md:justify-start md:space-y-3">
                  {footerLinks.linksUteis.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-sky-600 transition-colors flex items-center gap-1 group justify-center md:justify-start"
                        target={link.external ? "_blank" : "_self"}
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-sky-500 hidden md:block" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sky-200/50 mt-12 pt-10">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10 max-w-4xl mx-auto">
            <div className="flex items-center gap-2.5 px-5 py-3 bg-white rounded-full border border-sky-100 shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-5 h-5 text-sky-500" />
              <span className="text-xs md:text-sm font-medium text-gray-700">Atendimento consultivo</span>
            </div>
            <div className="flex items-center gap-2.5 px-5 py-3 bg-white rounded-full border border-sky-100 shadow-sm hover:shadow-md transition-shadow">
              <Shield className="w-5 h-5 text-sky-500" />
              <span className="text-xs md:text-sm font-medium text-gray-700">Conforme SUSEP e ANS</span>
            </div>
            <div className="flex items-center gap-2.5 px-5 py-3 bg-white rounded-full border border-sky-100 shadow-sm hover:shadow-md transition-shadow">
              <Award className="w-5 h-5 text-sky-500" />
              <span className="text-xs md:text-sm font-medium text-gray-700">Confiança e clareza</span>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-2xl mx-auto text-center border border-sky-100 shadow-sm">
            <p className="text-base md:text-lg font-bold text-gray-800 mb-2">SUCESSO CORRETORA</p>
            <p className="text-sm text-gray-600 mb-1">CNPJ: 53.261.037/0001-30</p>
            <p className="text-sm text-gray-600">Registro SUSEP: 242155608</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-sky-200/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 order-2 md:order-1">
              © 2026 Sucesso Seguros — Todos os direitos reservados.
            </p>
            <a
              href="https://wa.me/5543996660225?text=Olá!%20Vim%20pelo%20site%20Sucesso%20Seguros."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-sky-500 transition-colors order-1 md:order-2"
            >
              <span>Desenvolvido por</span>
              <span className="font-semibold">Clay Web Sites</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
