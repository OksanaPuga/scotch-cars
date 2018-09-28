import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './home.jsx';
import About from './about.jsx';
import Car from '../car/car.jsx';


class Main extends Component {
    render() {
        return (
            <div>
                <nav className='navbar navbar-default'>
                    <div className='container-fluid'>
                        <div className='navbar-header'>
                            <a href='#' className='navbar-brand'>Scotch Cars</a>
                        </div>
                        <div className='collapse navbar-collapse' id='bs-example-navbar-collapse1'>
                            <ul className='nav navbar-nav'>
                                <li className='active'><a href='#'>Link <span className='sr-only'>current</span></a></li>
                                <li><a href='#'>Link</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className='container'>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/car' component={Car} />
                </div>
            </div>
        );
    }
}

export default Main;