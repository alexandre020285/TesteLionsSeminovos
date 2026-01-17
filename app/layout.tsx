import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lions Seminovos - Seu carro dos sonhos está aqui',
  description: 'Encontre o carro seminovo perfeito para você',
  icons: {
    icon: '/images/logo/lions Favicon.png',
    shortcut: '/images/logo/lions Favicon.png',
    apple: '/images/logo/lions Favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
