import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './common/main.jsx';


render(
    <BrowserRouter basename='app'>
        <Main />
    </BrowserRouter>,
    document.getElementById('container')
);