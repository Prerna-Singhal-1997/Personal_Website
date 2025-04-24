import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prerna Singhal | Actuarial Intelligence",
  description: "Data, Daring & Disruption: Actuarial Intelligence Reimagined",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Script id="smooth-scroll">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              const links = document.querySelectorAll('a[href^="#"]');
              
              links.forEach(link => {
                link.addEventListener('click', function(e) {
                  e.preventDefault();
                  
                  const targetId = this.getAttribute('href').substring(1);
                  const targetElement = document.getElementById(targetId);
                  
                  if (targetElement) {
                    window.scrollTo({
                      top: targetElement.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                });
              });
            });
          `}
        </Script>
      </body>
    </html>
  )
}

