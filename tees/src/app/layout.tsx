import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'XNCH Tees',
  description: 'Small-batch, heavyweight cotton tees. Nothing printed that is not earning its place.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}