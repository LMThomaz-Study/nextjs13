import Link from 'next/link'

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link href={'/signin'}>Login</Link>
    </div>
  )
}
