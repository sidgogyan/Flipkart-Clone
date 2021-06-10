import React from 'react'
import {Navbar ,Container,Nav} from 'react-bootstrap'
import {NavLink,Link} from 'react-router-dom'
function Header() {
    return (
        <div>
        <Navbar expand="lg" bg="dark" variant="dark">
  <Container>
  <Link to="/" className="navbar-brand">Ecommerce Admin Panal</Link>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav>
    <li className="nav-item">
    <NavLink to="/signin" className="nav-link" >
      Signin
      </NavLink>
      </li>
      <li className="nav-item">
    <NavLink to="/signup" className="nav-link" >
      Signup
      </NavLink>
      </li>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
     </div>
    )
}

export default Header
