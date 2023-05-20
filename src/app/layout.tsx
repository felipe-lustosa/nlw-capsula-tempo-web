import React from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamburee,
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamburee = BaiJamburee({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamburee',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma cápsulo do tempo construído com React, Next.js, TailwindCSS e TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamburee.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
