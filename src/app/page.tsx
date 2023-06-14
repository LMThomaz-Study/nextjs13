import { User } from '@/components/User'
import Link from 'next/link'
import { Suspense } from 'react'

// export const revalidate = 30 STR

export const metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link href={'/app'}>Dashboard</Link>

      <Suspense fallback={<p>Carregando usuário...</p>}>
        <User />
      </Suspense>
    </div>
  )
}
