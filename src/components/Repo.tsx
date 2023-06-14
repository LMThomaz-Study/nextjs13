export const revalidate = 30

export async function Repo() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    cache: 'no-store',
  })

  const repos = await response.json()

  return (
    <div>
      <h2>Repos</h2>
      <pre>{JSON.stringify(repos, null, 2)}</pre>
    </div>
  )
}
