import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';

export default function NavBar() {
    return (
        <Navbar expand='lg' className='nav hidden-md hidden-lg'>
            <Container>
                <Navbar.Brand style={{ color: 'white' }}>
                    Tymee Kong
                </Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link href='/' style={{ color: 'white' }}>
                        Home
                    </Nav.Link>
                    <Nav.Link href='/projects' style={{ color: 'white' }}>
                        Projects
                    </Nav.Link>
                    <Nav.Link href='/contact' style={{ color: 'white' }}>
                        Contact
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
