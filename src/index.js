import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import ClassWebsite from './components/ClassWebsite';

ReactDOM.render(
<Router>
    <ClassWebsite />
</Router>
, document.getElementById('root'));

//This is for the initial commit
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.