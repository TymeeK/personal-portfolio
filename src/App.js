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
            <div id='about' className='mt-5'>
                <Container>
                    <Row>
                        <Col>
                            <Image
                                src='https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png'
                                roundedCircle={true}
                            ></Image>
                        </Col>
                        <Col>
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
                <Container className='mt-5'>
                    <Row>
                        <Col>
                            <CardContainer
                                link='https://github.com/TymeeK/final-project'
                                title='Instagram Clone'
                                description='asdfasdfasdf'
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default App;
