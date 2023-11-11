import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from '../Navigation/NavBar';
import { motion } from 'framer-motion';
import Particle from '../../Particle';

export default function Contact() {
    return (
        <>
            <NavBar />
            <Particle />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                id='contact'
            >
                <Container className='pt-5 pb-5'>
                    <h3>
                        Phone number: <br></br>562-284-9847
                    </h3>
                    <h3>
                        Email address: <br></br>tymeekong562@gmail.com
                    </h3>
                </Container>
            </motion.div>
        </>
    );
}
