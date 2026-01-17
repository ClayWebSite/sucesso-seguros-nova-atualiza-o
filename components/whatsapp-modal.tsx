"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useWhatsAppModal } from "@/contexts/whatsapp-modal-context"

export function WhatsAppModal() {
  const whatsappNumber = "5561986785640"
  const { isOpen, closeModal } = useWhatsAppModal()
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    ddd: "",
    celular: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = encodeURIComponent(
      `Olá! Meu nome é ${formData.nome}. Vim pelo site e gostaria de mais informações sobre seguros.\n\nE-mail: ${formData.email}\nTelefone: (${formData.ddd}) ${formData.celular}`,
    )
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
    closeModal()
    setFormData({ nome: "", email: "", ddd: "", celular: "" })
  }

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="w-[92%] max-w-[380px] p-0 overflow-hidden bg-white border-0 shadow-2xl rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-100 px-5 pt-5 pb-4">
          <h2 className="text-base md:text-lg font-bold text-[#1e3a5f] leading-tight">
            Inicie uma conversa conosco através do WhatsApp.
          </h2>
          <p className="text-[#009fe3] mt-1.5 text-xs md:text-sm">
            Insira as Informações Abaixo para Cotar Sucesso Seguros.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="px-5 py-4 space-y-3">
          {/* Nome Field */}
          <div className="space-y-1">
            <Label htmlFor="modal-nome" className="text-[#1e3a5f] font-semibold text-xs">
              Nome <span className="text-red-500">*</span>
            </Label>
            <Input
              id="modal-nome"
              type="text"
              required
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              className="h-10 text-sm border-gray-200 focus:border-[#009fe3] focus:ring-[#009fe3] rounded-lg transition-colors"
              placeholder="Seu nome completo"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-1">
            <Label htmlFor="modal-email" className="text-[#1e3a5f] font-semibold text-xs">
              E-mail <span className="text-red-500">*</span>
            </Label>
            <Input
              id="modal-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-10 text-sm border-gray-200 focus:border-[#009fe3] focus:ring-[#009fe3] rounded-lg transition-colors"
              placeholder="seu@email.com"
            />
          </div>

          {/* WhatsApp Number Field */}
          <div className="space-y-1">
            <Label className="text-[#1e3a5f] font-semibold text-xs">
              Seu Número do WhatsApp <span className="text-red-500">*</span>
            </Label>
            <div className="flex gap-2">
              <div className="w-16">
                <Input
                  id="modal-ddd"
                  type="text"
                  required
                  maxLength={2}
                  value={formData.ddd}
                  onChange={(e) => setFormData({ ...formData, ddd: e.target.value.replace(/\D/g, "") })}
                  className="h-10 text-sm border-gray-200 focus:border-[#009fe3] focus:ring-[#009fe3] text-center rounded-lg transition-colors"
                  placeholder="00"
                />
                <span className="text-[10px] text-gray-500 mt-1 block text-center">DDD</span>
              </div>
              <div className="flex-1">
                <Input
                  id="modal-celular"
                  type="text"
                  required
                  maxLength={9}
                  value={formData.celular}
                  onChange={(e) => setFormData({ ...formData, celular: e.target.value.replace(/\D/g, "") })}
                  className="h-10 text-sm border-gray-200 focus:border-[#009fe3] focus:ring-[#009fe3] rounded-lg transition-colors"
                  placeholder="000000000"
                />
                <span className="text-[10px] text-gray-500 mt-1 block">Celular</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#20BA5C] text-white text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-[#25D366]/30"
            >
              Iniciar Conversa
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </button>
          </div>

          <p className="text-[10px] text-gray-500 text-center leading-relaxed pt-1">
            Ao preencher o formulário, concordo em receber informações sobre plano de saúde e seguros e concordo com a{" "}
            <Link href="/politica-de-privacidade" className="text-[#009fe3] hover:underline font-medium">
              Política de Privacidade
            </Link>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
