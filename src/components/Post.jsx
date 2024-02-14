import React from 'react'

export default function Post(props) {
    const { post } = props
  return (
    <p>
      <b>{post.user.username} </b><br />
        {post.body}
        </p>
  )
}
