import type { Metadata } from 'next'
import { RootDesc, RootTitle, TitleTemplate } from '@/app/_Meta/Titles'
import Header from '@/app/_components/Header'
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
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
