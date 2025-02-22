import { Inter } from 'next/font/google'
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

// Configure font to load only required subsets
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Add display swap for better performance
  preload: true
})

export const metadata = {
  title: 'Sanjana Shenoy',
  description: 'Dietitian and Nutritionist',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add preconnect for external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
