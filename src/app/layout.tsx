import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'
import localFont from 'next/font/local'

import '@/styles/tailwind.css'

const dietherRound = localFont({
  variable: '--font-dietherRound',
  src: [
    {
      path: '../fonts/DietherRound/DietherRound-Bold.otf',
      weight: 'bold',
    },
    {
      path: '../fonts/DietherRound/DietherRound-Heavy.otf',
      weight: '600',
    },
    {
      path: '../fonts/DietherRound/DietherRound-Medium.otf',
      weight: 'normal',
    },
    {
      path: '../fonts/DietherRound/DietherRound-Thin.otf',
      weight: '200',
    },
    {
      path: '../fonts/DietherRound/DietherRound-Light.otf',
      weight: '300',
    },
  ],
})

export const metadata: Metadata = {
  title: {
    template: '%s - Wenovate',
    default: 'Wenovate - Digitális ügynökség',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`h-full scroll-smooth bg-neutral-950 text-base antialiased ${dietherRound.variable}`}
    >
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
