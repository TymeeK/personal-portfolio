import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import NavBar from '../Navigation/NavBar';
import './home.css';
import Particle from '../../Particle';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

export default function Home() {
    return (
        <>
            <NavBar />
            <Particle />
            <motion.div
                id='whole-container'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <div id='about-top'>
                    <Container>
                        <Row className='about-container'>
                            <Col className='description-container'>
                                <div id='greeting'>
                                    <h1>Hi there I'm Tymee Kong 👋</h1>
                                </div>
                                <div>
                                    <h1 className='typewriter'>
                                        <Typewriter
                                            options={{
                                                strings: [
                                                    'Welcome to my personal portfolio',
                                                ],
                                                autoStart: true,
                                                loop: true,
                                                deleteSpeed: 50,
                                            }}
                                        />
                                    </h1>
                                </div>
                            </Col>
                            <Col className='mt-5 mb-5 image-container'>
                                <Image
                                    src={require('../../Images/pfp.png')}
                                    roundedCircle={true}
                                    alt='Profile picture'
                                    className='profile-pic '
                                ></Image>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div id='about-bot'>
                    <Container>
                        <Row className='about-bot-container mt-5'>
                            <Col>
                                <div className='bot-title'>
                                    <h1>LET ME INTRODUCE MYSELF</h1>
                                </div>
                                <div className='bot-desc'>
                                    <h4>
                                        I am a CSULB Computer Science graduate.
                                    </h4>
                                    <br />
                                    <h4>I specialize in web development</h4>
                                    <br />
                                    <h4>
                                        Proficient in front-end technologies
                                        such as HTML, CSS, JavaScript, and
                                        React.js.
                                    </h4>
                                </div>
                            </Col>
                            <Col className='mt-5 mb-5 image-container'>
                                <Image
                                    src={require('../../Images/pfp2.JPG')}
                                    roundedCircle={true}
                                    alt='Profile picture 2'
                                    className='profile-pic'
                                ></Image>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </motion.div>
        </>
    );
}
