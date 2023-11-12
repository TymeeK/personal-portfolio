import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter } from 'react-router-dom';
import Animation from './Components/Animation/Animation';

function App() {
    return (
        <BrowserRouter basename='personal-portfolio'>
            <Animation />
        </BrowserRouter>
    );
}

export default App;
