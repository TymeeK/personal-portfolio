import React from 'react';
import NavBar from '../Navigation/NavBar';
import Particle from '../../Particle';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    DiGithubBadge,
    DiHtml5,
    DiJavascript1,
    DiMongodb,
    DiNodejs,
    DiPython,
    DiReact,
} from 'react-icons/di';
import {
    SiAndroidstudio,
    SiCss3,
    SiMacos,
    SiVisualstudiocode,
    SiWebpack,
} from 'react-icons/si';
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
                                <DiHtml5 />
                            </Col>
                            <Col className='tech-container'>
                                <SiCss3 />
                            </Col>
                            <Col className='tech-container'>
                                <DiReact />
                            </Col>
                            <Col className='tech-container'>
                                <DiNodejs />
                            </Col>
                        </Row>
                        <Row>
                            <Col className='tech-container'>
                                <DiMongodb />
                            </Col>
                            <Col className='tech-container'>
                                <DiGithubBadge />
                            </Col>
                            <Col className='tech-container'>
                                <DiPython />
                            </Col>
                            <Col className='tech-container'>
                                <SiWebpack />
                            </Col>
                            <Col className='tech-container'>
                                <SiVisualstudiocode />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </motion.div>
        </>
    );
}
