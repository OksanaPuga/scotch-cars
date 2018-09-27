import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './common/home.jsx';
import About from './common/about.jsx';
import Car from './car/car.jsx';


render(
    <BrowserRouter>
        <div>
            <Route path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/car' component={Car} />
        </div>
    </BrowserRouter>,
    document.getElementById('container')
);