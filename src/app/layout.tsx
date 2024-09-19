import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import { cn } from "@/lib/utils"
import Nav from "@/components/Nav"

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  title: {
    default: "Jan Leven",
    template: "%s / Jan Leven",
  },
  description: "Showcasing the projects and professional journey of Jan Leven.",
  openGraph: {
    title: "Jan Leven",
    description:
      "Explore the projects of Jan Leven, a Frontend Next.js Developer",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
