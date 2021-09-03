import React from 'react';
import ReactDOM from 'react-dom';
// import '.index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

axios.defaults.baseURL = 'https://dwell--api.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:3001';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

