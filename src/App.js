import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardContainer from './CardContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
    return (
        <>
            <Navbar expand='lg' className='nav hidden-md hidden-lg'>
                <Container>
                    <Navbar.Brand style={{ color: 'white' }}>
                        Tymee Kong
                    </Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link href='#about' style={{ color: 'white' }}>
                            About
                        </Nav.Link>
                        <Nav.Link href='#projects' style={{ color: 'white' }}>
                            Projects
                        </Nav.Link>
                        <Nav.Link href='#contact' style={{ color: 'white' }}>
                            Contact
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div id='about'>
                <Container>
                    <Row className='about-container'>
                        <Col className='mt-5 mb-5 image-container'>
                            <Image
                                src={require('./Images/pfp.png')}
                                roundedCircle={true}
                                alt='Profile picture'
                                className='profile-pic '
                            ></Image>
                        </Col>
                        <Col className='description-container mt-5'>
                            <p className='lead'>
                                I am a CSULB Computer Science graduate. I
                                specialize in web development and I am
                                proficient in front-end technologies such as
                                HTML, CSS, JavaScript, and ReactJS. I'm also
                                proficient in Java, Python, C#, and Git.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id='projects'>
                <Container className='pb-5 pt-5 justify-content-center'>
                    <h2>Projects</h2>
                    <Row>
                        <Col className='d-flex justify-content-center'>
                            <CardContainer
                                link='https://github.com/TymeeK/final-project'
                                title='Instagram Clone'
                                description='An Instagram like website created with React as the frontend and Firebase as the backend.'
                                image='./Images/finstagram.png'
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
            </div>
            <div id='contact'>
                <Container className='pt-5 pb-5'>
                    <h2>Contact information</h2>
                    <h3>
                        Phone number: <br></br>562-284-9847
                    </h3>
                    <h3>
                        Email address: <br></br>tymeekong562@gmail.com
                    </h3>
                </Container>
            </div>
        </>
    );
}

export default App;
