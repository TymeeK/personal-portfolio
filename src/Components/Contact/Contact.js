import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from '../Navigation/NavBar';
import { motion } from 'framer-motion';
import Particle from '../../Particle';
import './contact.css';
import { SiLinkedin, SiInstagram } from 'react-icons/si';
import { Row, Col } from 'react-bootstrap';
import { DiGithubBadge } from 'react-icons/di';

export default function Contact() {
    return (
        <>
            <NavBar />
            <Particle />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                id='contact'
                className='whole-container'
            >
                <Container className='contact-container pt-5 pb-5 ' fluid>
                    <h1>Contact me on my socials!</h1>
                    <Row>
                        <Col className='tech-container'>
                            <a
                                href='https://www.linkedin.com/in/tymee-kong-ab6338171/'
                                target='_blank'
                            >
                                <SiLinkedin />{' '}
                            </a>
                        </Col>
                        <Col className='tech-container'>
                            <a href='https://github.com/TymeeK' target='_blank'>
                                {' '}
                                <DiGithubBadge />
                            </a>
                        </Col>
                        <Col className='tech-container'>
                            <a
                                href='https://www.instagram.com/tim_kongg/'
                                target='_blank'
                            >
                                {' '}
                                <SiInstagram />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </motion.div>
        </>
    );
}
