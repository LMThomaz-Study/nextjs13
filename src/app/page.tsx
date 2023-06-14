import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link href={'/dashboard'}>Dashboard</Link>
    </div>
  )
}
