import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'XNCH Teach',
  description: 'Learning tracks on building AI systems that ship. Syllabus in progress.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}