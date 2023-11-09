import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import NavBar from '../Navigation/NavBar';
import ReactTyped from 'react-typed';
export default function Home() {
    return (
        <>
            <NavBar />
            <div id='about'>
                <Container>
                    <Row className='about-container'>
                        <Col className='description-container'>
                            <div>
                                <h1>Hi there 👋</h1>
                            </div>
                            <div>
                                <h1 className='typewriter'>
                                    <ReactTyped
                                        strings={[
                                            'Welcome to my personal website!',
                                        ]}
                                        typeSpeed={50}
                                        loop
                                        backSpeed={50}
                                    />
                                </h1>
                            </div>
                            {/* <h2>I am a CSULB Computer Science graduate.</h2>
                            <br />
                            <h2>I specialize in web development</h2>
                            <br />
                            <h2>
                                Proficient in front-end technologies such as
                                HTML, CSS, JavaScript, and ReactJS.
                            </h2> */}
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
        </>
    );
}
