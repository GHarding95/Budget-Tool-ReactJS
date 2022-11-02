import React, { Component } from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';

export default class navigation extends Component {
  render() {
    return (
        <Navbar className='nav-bg' expand="lg">
        <Container>
        <Navbar.Brand href="/"><img src='images/logo.png' className="logo" alt='logo'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <a className='n-link' href="#" target={"blank"}>Dealing with your debts</a>
                <a className='n-link' href="#" target={"blank"}>Your budget</a>
                <a className='n-link' href="#" target={"blank"}>Fact sheet library</a>
                <a className='n-link' href="#" target={"blank"}>Sample letter library</a>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>     
    )
  }
}
