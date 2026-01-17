import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { WhatsAppModalProvider } from "@/contexts/whatsapp-modal-context"
import { WhatsAppModal } from "@/components/whatsapp-modal"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Sucesso Seguros | Proteção Inteligente para o que Realmente Importa",
    template: "%s | Sucesso Seguros",
  },
  description:
    "Corretora de seguros com soluções completas em planos de saúde, seguro auto, seguro de vida e seguros empresariais. Atendimento humano e personalizado.",
  keywords: [
    "seguros",
    "corretora de seguros",
    "plano de saúde",
    "seguro auto",
    "seguro de vida",
    "seguros empresariais",
    "seguro patrimonial",
    "São Paulo",
    "cotação de seguros",
  ],
  authors: [{ name: "Sucesso Seguros" }],
  creator: "Sucesso Seguros",
  publisher: "Sucesso Seguros",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sucessoseguros.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sucesso Seguros | Proteção Inteligente para o que Realmente Importa",
    description:
      "Corretora de seguros com soluções completas em planos de saúde, seguro auto, seguro de vida e seguros empresariais.",
    url: "https://sucessoseguros.com.br",
    siteName: "Sucesso Seguros",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sucesso Seguros | Proteção Inteligente",
    description: "Corretora de seguros com soluções completas para você e sua empresa.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#009fe3",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://blob.v0.app" />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        <WhatsAppModalProvider>
          <Header />
          <main className="overflow-x-hidden pt-20 sm:pt-24 md:pt-28">{children}</main>
          <Footer />
          <WhatsAppButton />
          <WhatsAppModal />
        </WhatsAppModalProvider>
      </body>
    </html>
  )
}
