import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardContainer from './CardContainer';
import Container from 'react-bootstrap/Container';
import NavBar from '../Navigation/NavBar';
import Particle from '../../Particle';
import '../../app.css';
import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <>
            <NavBar />
            <Particle />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                id='projects'
            >
                <Container className='pb-5 pt-5 justify-content-center'>
                    <Row>
                        <Col className='d-flex justify-content-center'>
                            <CardContainer
                                link='https://github.com/TymeeK/final-project'
                                title='Instagram Clone'
                                description='An Instagram like website created with React as the frontend and Firebase as the backend.'
                                image='../../Images/finstagram.png'
                            />
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <CardContainer
                                link='https://github.com/TymeeK/photo-tagging-app'
                                title='Photo Tagging'
                                description='A photo tagging website application where users are timed for finding Waldo, Odlaw, and Wizard.'
                                image='./Images/photo-tagging.png'
                            />
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <CardContainer
                                link='https://github.com/TymeeK/memory-card'
                                title='Memory Card'
                                description='A memorization Star Wars game made using React hooks'
                                image='./Images/memory-card.png'
                            />
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <CardContainer
                                link='https://github.com/TymeeK/battleship'
                                title='Battleship'
                                description='A JavaScript project compiled using webpack and tested using Jest.'
                                image='./Images/battleship.png'
                            />
                        </Col>
                    </Row>
                </Container>
            </motion.div>
        </>
    );
}
