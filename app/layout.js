import './globals.css'
import { Inter } from 'next/font/google'
import Header from './header';

export const metadata = {
  title: 'Roberto Martínez',
  description: 'Test',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="from-red-100 via-red-300 to-blue-500 bg-gradient-to-br h-screen">
        <Header />
        {children}
        </body>
    </html>
  )
}
