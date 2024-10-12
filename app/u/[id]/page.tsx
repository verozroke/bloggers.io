import React from 'react'

export default function User({ params }: { params: { id: string } }) {
  return (
    <div>User {params.id}</div>
  )
}
