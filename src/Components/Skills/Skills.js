import React from 'react';
import NavBar from '../Navigation/NavBar';
import Particle from '../../Particle';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DiJavascript1, DiNodejs, DiReact } from 'react-icons/di';
import './skills.css';

export default function Skills() {
    return (
        <>
            <NavBar />
            <Particle />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className='whole-container'
            >
                <div>
                    <div className='skills'>
                        <h1>My Skills</h1>
                    </div>
                    <Container>
                        <Row>
                            <Col className='tech-container'>
                                <DiJavascript1 />
                            </Col>
                            <Col className='tech-container'>
                                <DiReact />
                            </Col>
                            <Col className='tech-container'>
                                <DiNodejs />
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </div>
            </motion.div>
        </>
    );
}
