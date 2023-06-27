import './globals.css'
import Header from './header';
export const metadata = {
  title: 'Lobby Test'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="h-screen overflow-y-scroll">
        <div className="fixed inset-0 shadow-body">
        </div>
        <div className="relative">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
