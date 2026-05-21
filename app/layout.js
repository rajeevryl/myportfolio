import './globals.css'

export const metadata = {
  title: 'Interactive Portfolio',
  description: 'Modern Interactive Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
