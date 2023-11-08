import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import NavBar from '../Navigation/NavBar';
export default function Home() {
    return (
        <>
            <NavBar />
            <div id='about'>
                <Container>
                    <Row className='about-container'>
                        <Col className='description-container mt-5'>
                            <h2 className='lead'>
                                I am a CSULB Computer Science graduate. I
                                specialize in web development and I am
                                proficient in front-end technologies such as
                                HTML, CSS, JavaScript, and ReactJS.
                            </h2>
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
