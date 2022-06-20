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
            <Navbar bg='light' expand='lg'>
                <Container>
                    <Navbar.Brand>Tymee Kong</Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link href='#about'>About</Nav.Link>
                        <Nav.Link href='#projects'>Projects</Nav.Link>
                        <Nav.Link href='#contact'>Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div id='about'>
                <Container>
                    <Row>
                        <Col className='mt-5'>
                            <Image
                                src={require('./Images/pfp.png')}
                                roundedCircle={true}
                                alt='Profile picture'
                                className='profile-pic '
                            ></Image>
                        </Col>
                        <Col className='description-container mt-5'>
                            <p className='lead'>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Id in sequi quos facere illum
                                qui expedita dignissimos corrupti nisi non natus
                                aspernatur, vitae sint labore minima aperiam
                                odit nam laudantium?
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id='projects'>
                <Container className='mt-5 justify-content-center '>
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
                                description='An Instagram like website created with React as the frontend and Firebase as the backend.'
                                image='./Images/finstagram.png'
                            />
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col className='d-flex justify-content-center'>
                            <CardContainer
                                link='https://github.com/TymeeK/battleship'
                                title='Battleship'
                                description='An Instagram like website created with React as the frontend and Firebase as the backend.'
                                image='./Images/finstagram.png'
                            />
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <CardContainer
                                link='https://github.com/TymeeK/battleship'
                                title='Battleship'
                                description='An Instagram like website created with React as the frontend and Firebase as the backend.'
                                image='./Images/finstagram.png'
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default App;
