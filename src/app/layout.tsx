'use client'

import { Sidebar } from './components/sidebar'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Funcionários',
  description: 'Criado usando next e planet scale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#161616] text-gray-300">
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
