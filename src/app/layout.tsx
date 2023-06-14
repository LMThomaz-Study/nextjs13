import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <h1>Root Layout</h1>
        {children}
      </body>
    </html>
  )
}
