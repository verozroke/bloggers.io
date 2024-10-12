import React from 'react'

export default function Post({ params }: { params: { username: string } }) {
  return (
    <div>Post {params.username}</div>
  )
}
