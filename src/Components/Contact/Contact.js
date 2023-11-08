import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from '../Navigation/NavBar';

export default function Contact() {
    return (
        <>
            <NavBar />
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
