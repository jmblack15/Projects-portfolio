import './globals.css'
import { Open_Sans as openSans } from 'next/font/google'

const OPEN_SANS = openSans({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Jose portfolio'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={OPEN_SANS.className}>{children}</body>
    </html>
  )
}
