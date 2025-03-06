import type { Metadata } from "next"
import { ThemeProvider } from "@/context/ThemeContext"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import "./globals.css"

export const metadata: Metadata = {
  title: "Jurgen Dragon Ball Explorer",
  description: "Explora el universo de Dragon Ball",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <ThemeProvider>
          <div className="bg-bg-primary dark:bg-dark-bg-primary overflow-x-hidden">
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
