import { Repo } from '@/components/Repo'
import Link from 'next/link'
import { Suspense } from 'react'

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link href={'/signin'}>Login</Link>
      <Link href={'/'}>Home</Link>

      <Suspense fallback={<p>Carregando repositórios...</p>}>
        <Repo />
      </Suspense>
    </div>
  )
}
