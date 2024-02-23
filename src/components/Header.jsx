import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href='/'>Harmony Haven</Navbar.Brand>
          {/* <Nav.Link href='/LandingPage'>Home</Nav.Link> */}
          <Nav.Link href='/register'>Register</Nav.Link>
          <Nav.Link href='/login'>Login</Nav.Link>
          <Nav.Link href='/users'>Users</Nav.Link>
          <Nav.Link href='/Posts'>Socail</Nav.Link>

        </Container>

      </Navbar>
//   <h1>Harmony Haven</h1>
//   <h3>Welcome to the safe space where individuals can connect with others, anonymously, sharing similar mental health struggles. At Harmony Haven, we offer a sense of belonging and understading. </h3>
  )
}
