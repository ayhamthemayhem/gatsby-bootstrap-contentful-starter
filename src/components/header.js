import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home">{siteTitle}</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/about">
          About
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
