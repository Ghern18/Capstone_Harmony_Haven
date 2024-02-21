import React from 'react'
import Body from '../components/Body'

export default function SocialPage({ children }) {
  return (
    <Body sidebar={true}> 
    {children}
  </Body> 
  )
}
