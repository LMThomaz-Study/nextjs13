'use client'

import { useState } from 'react'

export function User() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>User - {count}</h2>
      <button onClick={() => setCount((oldValue) => oldValue + 1)}>
        Increment
      </button>
    </div>
  )
}
