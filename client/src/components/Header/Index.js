import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

function Header() {
  return (
    <Navbar bg="dark">
        <Navbar.Brand href="#home">
          <h5 style={{color: '#eee'}}>
            GithubFilter
          </h5>
        </Navbar.Brand>
      </Navbar>
  )
}

export default Header