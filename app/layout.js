import './globals.css'
import { Inter } from 'next/font/google'
import Header from './header';
import Image from "next/image";
export const metadata = {
  title: 'Roberto Martínez',
  description: 'Test',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="shadow-body">
      <body className="h-screen">
        <Header />
        {children}
        </body>
    </html>
  )
}
