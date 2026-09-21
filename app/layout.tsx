import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header'

export const metadata: Metadata = {
  title: 'Abdul Mohaimen — Frontend-Focused Full-Stack Developer',
  description:
    'Portfolio of Abdul Mohaimen, a frontend-focused full-stack developer building polished, interactive web experiences with React, Next.js and Vue, backed by Node.js/Express and Laravel API experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
