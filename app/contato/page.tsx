"use client"

import type React from "react"

import { useState } from "react"
import { Send, User, Mail, MessageCircle, MapPin, Building2, Users, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useWhatsAppModal } from "@/contexts/whatsapp-modal-context"

const assuntos = [
  "Planos de Saúde",
  "Seguro Auto",
  "Seguro de Vida",
  "Seguros Empresariais",
  "Renovação de Seguro",
  "Sinistro",
  "Outro",
]

const estados = [
  { sigla: "AC", nome: "Acre" },
  { sigla: "AL", nome: "Alagoas" },
  { sigla: "AP", nome: "Amapá" },
  { sigla: "AM", nome: "Amazonas" },
  { sigla: "BA", nome: "Bahia" },
  { sigla: "CE", nome: "Ceará" },
  { sigla: "DF", nome: "Distrito Federal" },
  { sigla: "ES", nome: "Espírito Santo" },
  { sigla: "GO", nome: "Goiás" },
  { sigla: "MA", nome: "Maranhão" },
  { sigla: "MT", nome: "Mato Grosso" },
  { sigla: "MS", nome: "Mato Grosso do Sul" },
  { sigla: "MG", nome: "Minas Gerais" },
  { sigla: "PA", nome: "Pará" },
  { sigla: "PB", nome: "Paraíba" },
  { sigla: "PR", nome: "Paraná" },
  { sigla: "PE", nome: "Pernambuco" },
  { sigla: "PI", nome: "Piauí" },
  { sigla: "RJ", nome: "Rio de Janeiro" },
  { sigla: "RN", nome: "Rio Grande do Norte" },
  { sigla: "RS", nome: "Rio Grande do Sul" },
  { sigla: "RO", nome: "Rondônia" },
  { sigla: "RR", nome: "Roraima" },
  { sigla: "SC", nome: "Santa Catarina" },
  { sigla: "SP", nome: "São Paulo" },
  { sigla: "SE", nome: "Sergipe" },
  { sigla: "TO", nome: "Tocantins" },
]

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipo: "",
    idades: "",
    cidade: "",
    estado: "",
    assunto: "",
    mensagem: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const { openModal } = useWhatsAppModal()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const message = `*Nova Solicitação de Cotação*%0A%0A*Nome:* ${formData.nome}%0A*Email:* ${formData.email}%0A*Telefone:* ${formData.telefone}%0A*Tipo:* ${formData.tipo}%0A*Idades:* ${formData.idades}%0A*Cidade:* ${formData.cidade}%0A*Estado:* ${formData.estado}%0A*Assunto:* ${formData.assunto}%0A*Mensagem:* ${formData.mensagem}`

      window.open(`https://wa.me/5561986785640?text=${message}`, "_blank")

      setIsSubmitted(true)
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        tipo: "",
        idades: "",
        cidade: "",
        estado: "",
        assunto: "",
        mensagem: "",
      })
    } catch (err) {
      setError("Erro ao enviar cotação. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="hero-cyan relative py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#009fe3]/10 rounded-full blur-[120px]" />

        <div className="absolute inset-0 bg-pattern-dots opacity-40" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white border border-cyan-200 shadow-sm px-4 py-2 rounded-full mb-6">
              <MessageCircle className="w-4 h-4 text-[#009fe3]" />
              <span className="text-sm font-medium text-gray-700">Fale Conosco</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Entre em <span className="text-[#009fe3]">Contato</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Estamos prontos para ajudar você a encontrar a melhor solução em seguros.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3">
                <div className="rounded-3xl border border-cyan-100 shadow-lg shadow-cyan-500/5 overflow-hidden animate-fade-in-left">
                  <div className="p-6 sm:p-8">
                    {isSubmitted ? (
                      <div className="text-center py-12 animate-scale-in">
                        <div className="w-20 h-20 rounded-full bg-[#25D366] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25">
                          <Send className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Mensagem Enviada!</h3>
                        <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                          Recebemos sua mensagem e entraremos em contato em breve.
                        </p>
                        <Button
                          className="bg-[#009fe3] hover:bg-[#0086c7] text-white px-8 rounded-full shadow-lg"
                          onClick={() => setIsSubmitted(false)}
                        >
                          Enviar Nova Mensagem
                        </Button>
                      </div>
                    ) : (
                      <>
                        <div className="mb-8">
                          <h2 className="text-2xl font-bold text-gray-900 mb-2">Solicite uma Cotação</h2>
                          <p className="text-gray-500">Preencha o formulário e receba sua cotação personalizada</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                          <div className="grid sm:grid-cols-2 gap-5">
                            <div className="space-y-2">
                              <Label htmlFor="nome" className="text-gray-700 font-medium">
                                Nome Completo <span className="text-red-500">*</span>
                              </Label>
                              <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <Input
                                  id="nome"
                                  name="nome"
                                  placeholder="Seu nome completo"
                                  value={formData.nome}
                                  onChange={handleChange}
                                  required
                                  className="h-12 pl-11 rounded-xl border-gray-200 focus:border-[#009fe3] focus:ring-[#009fe3]/20"
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email" className="text-gray-700 font-medium">
                                Seu melhor E-mail <span className="text-red-500">*</span>
                              </Label>
                              <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <Input
                                  id="email"
                                  name="email"
                                  type="email"
                                  placeholder="seu@email.com"
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                  className="h-12 pl-11 rounded-xl border-gray-200 focus:border-[#009fe3] focus:ring-[#009fe3]/20"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-5">
                            <div className="space-y-2">
                              <Label htmlFor="telefone" className="text-gray-700 font-medium">
                                Telefone <span className="text-red-500">*</span>
                              </Label>
                              <div className="relative">
                                <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <Input
                                  id="telefone"
                                  name="telefone"
                                  placeholder="(11) 99999-9999"
                                  value={formData.telefone}
                                  onChange={handleChange}
                                  required
                                  className="h-12 pl-11 rounded-xl border-gray-200 focus:border-[#009fe3] focus:ring-[#009fe3]/20"
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="tipo" className="text-gray-700 font-medium">
                                Empresarial ou Individual? <span className="text-red-500">*</span>
                              </Label>
                              <div className="relative">
                                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-10" />
                                <select
                                  id="tipo"
                                  name="tipo"
                                  value={formData.tipo}
                                  onChange={handleChange}
                                  required
                                  className="flex h-12 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 py-2 text-sm focus:border-[#009fe3] focus:outline-none focus:ring-2 focus:ring-[#009fe3]/20 appearance-none"
                                >
                                  <option value="">Selecione</option>
                                  <option value="individual">Individual</option>
                                  <option value="empresarial">Empresarial</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="idades" className="text-gray-700 font-medium">
                              Idades dos titulares e dependentes <span className="text-red-500">*</span>
                            </Label>
                            <div className="relative">
                              <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <Input
                                id="idades"
                                name="idades"
                                placeholder="Ex: 35, 32, 8, 5"
                                value={formData.idades}
                                onChange={handleChange}
                                required
                                className="h-12 pl-11 rounded-xl border-gray-200 focus:border-[#009fe3] focus:ring-[#009fe3]/20"
                              />
                            </div>
                            <p className="text-xs text-gray-500">Informe as idades separadas por vírgula</p>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-5">
                            <div className="space-y-2">
                              <Label htmlFor="cidade" className="text-gray-700 font-medium">
                                Cidade <span className="text-red-500">*</span>
                              </Label>
                              <div className="relative">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <Input
                                  id="cidade"
                                  name="cidade"
                                  placeholder="Sua cidade"
                                  value={formData.cidade}
                                  onChange={handleChange}
                                  required
                                  className="h-12 pl-11 rounded-xl border-gray-200 focus:border-[#009fe3] focus:ring-[#009fe3]/20"
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="estado" className="text-gray-700 font-medium">
                                Estado <span className="text-red-500">*</span>
                              </Label>
                              <div className="relative">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-10" />
                                <select
                                  id="estado"
                                  name="estado"
                                  value={formData.estado}
                                  onChange={handleChange}
                                  required
                                  className="flex h-12 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 py-2 text-sm focus:border-[#009fe3] focus:outline-none focus:ring-2 focus:ring-[#009fe3]/20 appearance-none"
                                >
                                  <option value="">Selecione o estado</option>
                                  {estados.map((estado) => (
                                    <option key={estado.sigla} value={estado.sigla}>
                                      {estado.nome}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="assunto" className="text-gray-700 font-medium">
                              Assunto
                            </Label>
                            <div className="relative">
                              <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-10" />
                              <select
                                id="assunto"
                                name="assunto"
                                value={formData.assunto}
                                onChange={handleChange}
                                className="flex h-12 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 py-2 text-sm focus:border-[#009fe3] focus:outline-none focus:ring-2 focus:ring-[#009fe3]/20 appearance-none"
                              >
                                <option value="">Selecione</option>
                                {assuntos.map((assunto) => (
                                  <option key={assunto} value={assunto}>
                                    {assunto}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="mensagem" className="text-gray-700 font-medium">
                              Mensagem Adicional
                            </Label>
                            <Textarea
                              id="mensagem"
                              name="mensagem"
                              placeholder="Informações adicionais que possam ajudar na cotação..."
                              rows={4}
                              value={formData.mensagem}
                              onChange={handleChange}
                              className="rounded-xl border-gray-200 focus:border-[#009fe3] focus:ring-[#009fe3]/20 resize-none"
                            />
                          </div>

                          {error && (
                            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                              {error}
                            </div>
                          )}

                          <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-12 bg-[#009fe3] hover:bg-[#0086c7] text-white font-semibold rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-xl transition-all duration-300 btn-glow-cyan disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <Send className="mr-2 h-5 w-5" />
                            {isLoading ? "Enviando..." : "Solicitar Cotação"}
                          </Button>
                        </form>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div className="grid grid-cols-2 gap-4 animate-fade-in-right delay-100">
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 text-center">
                    <div className="text-3xl font-bold text-[#009fe3] mb-1">+10.000</div>
                    <div className="text-sm text-gray-500">Clientes Atendidos</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 text-center">
                    <div className="text-3xl font-bold text-[#009fe3] mb-1">99%</div>
                    <div className="text-sm text-gray-500">Satisfação</div>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-gradient-to-br from-green-50 to-white border border-green-200 animate-fade-in-right delay-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center shadow-lg shadow-green-500/25">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Atendimento Rápido</h4>
                      <p className="text-sm text-gray-600">Resposta em até 5 minutos</p>
                    </div>
                  </div>
                  <Button
                    onClick={openModal}
                    className="w-full bg-[#25D366] hover:bg-[#1da851] text-white rounded-full shadow-lg btn-glow-green"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chamar no WhatsApp
                  </Button>
                </div>

                <div className="p-6 rounded-3xl bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 animate-fade-in-right delay-300">
                  <h4 className="font-semibold text-gray-900 mb-4">Informações de Contato</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#009fe3]" />
                      <span className="text-gray-600">contato@sucessop.com.br</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-4 h-4 text-[#009fe3]" />
                      <span className="text-gray-600">(61) 98678-5640</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
