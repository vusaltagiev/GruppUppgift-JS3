import {Navbar, Nav, Container, Button } from 'react-bootstrap'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { BsShieldFillCheck } from "react-icons/bs";
import React, { Component } from 'react'
import Products from './products.jsx'
import Contact from './contacts.jsx'
import Search from './search.jsx'
import Login from './login.jsx'
import Home from './home.jsx'
import Cart from './cart.jsx'
import './index.css'


export default class NavbarComp extends Component {
  render() {
    return (
        <BrowserRouter>
            <Navbar bg="light" expand="lg">
              <Container id='target'>
                <BsShieldFillCheck className='shield'/>
                  <Navbar.Brand href="/" className='brand'>bmerketo</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link className='target' href="/">HOME</Nav.Link>
                        <Nav.Link className='target' href="products">PRODUCTS</Nav.Link>
                        <Nav.Link className='target' href="contact">CONTACT</Nav.Link>
                        <Search/>
                        <Nav.Link className='target' href="login">Login</Nav.Link>
                        <Cart/>
                    </Nav>
                  </Navbar.Collapse>
              </Container>
            </Navbar>
            <main>
              <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="products" element={<Products/>}></Route>
                <Route path="contact" element={<Contact/>}></Route>
                <Route path="login" element={<Login/>}></Route>
              </Routes>
            </main>
        </BrowserRouter>
    )
  }
}

