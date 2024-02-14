import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function Sidebar() {
  return (
      <Navbar sticky='top' className='flex-column sidebar'>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/feed">Feed</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/my-haven">My Haven</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/resources">Resources</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/my-journal">My Journal</Nav.Link>
        </Nav.Item>
      </Navbar>
  )
}
