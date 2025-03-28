import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { SidebarNavClient } from "./components/sidebar-nav-client"
import { MobileNav } from "./components/mobile-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Strata Manager | Building Management Dashboard",
  description: "A comprehensive dashboard for strata management and building administration",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <MobileNav />
          <div className="flex flex-1">
            <SidebarNavClient />
            <div className="flex-1">
              <main className="flex-1 p-6">{children}</main>
              <footer className="border-t py-4 px-6">
                <p className="text-sm text-muted-foreground">© 2025 Strata Manager. All rights reserved.</p>
              </footer>
            </div>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  )
}



import './globals.css'