"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

interface WhatsAppModalContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const WhatsAppModalContext = createContext<WhatsAppModalContextType | undefined>(undefined)

export function WhatsAppModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <WhatsAppModalContext.Provider value={{ isOpen, openModal, closeModal }}>{children}</WhatsAppModalContext.Provider>
  )
}

export function useWhatsAppModal() {
  const context = useContext(WhatsAppModalContext)
  if (context === undefined) {
    throw new Error("useWhatsAppModal must be used within a WhatsAppModalProvider")
  }
  return context
}
