import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import './nav.css';

export default function NavBar() {
    return (
        <Navbar expand='lg' className='nav hidden-md hidden-lg'>
            <Container>
                <Navbar.Brand style={{ color: 'white' }}>
                    Tymee Kong
                </Navbar.Brand>
                <Nav className='link-container me-auto'>
                    <Nav.Link
                        className='nav-text'
                        href='/'
                        style={{ color: 'white' }}
                    >
                        Home
                    </Nav.Link>
                    <Nav.Link
                        className='nav-text'
                        href='/projects'
                        style={{ color: 'white' }}
                    >
                        Projects
                    </Nav.Link>
                    <Nav.Link
                        className='nav-text'
                        href='/contact'
                        style={{ color: 'white' }}
                    >
                        Contact
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
