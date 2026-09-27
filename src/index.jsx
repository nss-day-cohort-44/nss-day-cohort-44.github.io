import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import ClassWebsite from './components/ClassWebsite';

createRoot(document.getElementById('root')).render(
    <Router>
    <ClassWebsite />
    </Router>
);

//This is for the initial commit
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
