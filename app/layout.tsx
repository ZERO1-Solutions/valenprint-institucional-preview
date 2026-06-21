import './globals.css'

export const metadata = {
  title: 'ValenPrint - Personalização que fortalece sua marca',
  description: 'Canecas, squeezes, copos e acessórios personalizados para varejo, atacado e empresas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
