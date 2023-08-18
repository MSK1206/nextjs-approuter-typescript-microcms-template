import type { Metadata } from 'next'
import { RootDesc, RootTitle, TitleTemplate } from '@/app/_Meta/MetaItem'
import './globals.css'

export const metadata: Metadata = {
  title: `${RootTitle} | ${TitleTemplate}`,
  description: `${RootDesc}`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
