import React from 'react'

export default function Post(props) {
    const { post } = props
  return (
    <p>
        {}
        {post.body}
        </p>
  )
}
