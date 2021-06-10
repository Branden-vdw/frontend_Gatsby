import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #F0F0F0;

  a, .navbar-nav, .navbar-light .nav-link {
    color: #000033;
    font: normal normal 600 18px/22px Montserrat;
    text-align: right;
    letter-spacing: 0px;
    opacity: 1; }
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #000033;
    &:hover { color: white; }
  }
`;
 export const NavigationBar = () => (
     <Styles>
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
              <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>)

