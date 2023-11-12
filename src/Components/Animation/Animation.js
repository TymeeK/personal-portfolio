import React from 'react';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Skills from '../Skills/Skills';

export default function Animation() {
    const location = useLocation();
    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path='personal-portfolio/' element={<Home />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </AnimatePresence>
    );
}
