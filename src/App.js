import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
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
            <div className='mt-5' id='projects'>
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ width: '20rem' }}>
                                <Card.Img
                                    variant='top'
                                    src='https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png'
                                />
                                <Card.Body>
                                    <div style={{ position: 'relative' }}>
                                        <Card.Title>
                                            Instagram Clone
                                            <a href='https://github.com/TymeeK/final-project'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    width='16'
                                                    height='16'
                                                    fill='currentColor'
                                                    className='bi bi-github'
                                                    viewBox='0 0 16 16'
                                                >
                                                    <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
                                                </svg>
                                            </a>
                                        </Card.Title>
                                    </div>

                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Voluptatum nihil
                                        obcaecati aliquam sequi recusandae,
                                        laborum et accusantium quaerat nulla
                                        molestiae. Unde sapiente debitis
                                        accusamus nostrum iusto sed saepe,
                                        dolorem quaerat.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default App;
