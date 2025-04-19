import './globals.css'

export const metadata = {
  title: 'CRM ERP Billing | Modern Software',
  description: 'All-in-one solution for CRM, ERP, and billing.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
