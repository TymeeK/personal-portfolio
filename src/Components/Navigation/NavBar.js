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
        <Navbar
            expand='sm'
            collapseOnSelect
            className='nav hidden-md hidden-lg'
            fixed='top'
            bg='dark'
            variant='dark'
        >
            <Container>
                <Navbar.Brand style={{ color: 'white' }}>
                    Tymee Kong
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar nav' />
                <Navbar.Collapse id='responsive-navbar nav'>
                    <Nav className='link-container me-auto'>
                        <Nav.Link
                            className='nav-text'
                            href='home'
                            style={{ color: 'white' }}
                        >
                            <AiOutlineHome />
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href='skills'
                            className='nav-text'
                            style={{ color: 'white' }}
                        >
                            <AiOutlineDatabase />
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            className='nav-text'
                            href='projects'
                            style={{ color: 'white' }}
                        >
                            <AiOutlineProject />
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            className='nav-text'
                            href='contact'
                            style={{ color: 'white' }}
                        >
                            <AiOutlineContacts />
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
