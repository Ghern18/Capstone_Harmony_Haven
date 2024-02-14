import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/esm/Container'

export default function Header() {
  return (
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Harmony Haven</Navbar.Brand>
        </Container>
      </Navbar>
//   <h1>Harmony Haven</h1>
//   <h3>Welcome to the safe space where individuals can connect with others, anonymously, sharing similar mental health struggles. At Harmony Haven, we offer a sense of belonging and understading. </h3>
  )
}
