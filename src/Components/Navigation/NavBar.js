import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import './nav.css';
import {
    AiOutlineContacts,
    AiOutlineDatabase,
    AiOutlineHome,
    AiOutlineProject,
} from 'react-icons/ai';

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
                        <AiOutlineHome />
                        Home
                    </Nav.Link>
                    <Nav.Link
                        href='/skills'
                        className='nav-text'
                        style={{ color: 'white' }}
                    >
                        <AiOutlineDatabase />
                        Skills
                    </Nav.Link>
                    <Nav.Link
                        className='nav-text'
                        href='/projects'
                        style={{ color: 'white' }}
                    >
                        <AiOutlineProject />
                        Projects
                    </Nav.Link>
                    <Nav.Link
                        className='nav-text'
                        href='/contact'
                        style={{ color: 'white' }}
                    >
                        <AiOutlineContacts />
                        Contact
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
