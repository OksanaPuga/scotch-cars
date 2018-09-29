import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import Home from './home.jsx';
import About from './about.jsx';
import Car from '../car/car.jsx';
import CarDetails from '../car/carDetails.jsx';
import carsData from '../../mocks.js';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        };
    }

    componentDidMount() {
        this.setState({ cars: carsData });
    }

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
                                <li><NavLink exact to='/' activeClassName='active'>Home</NavLink></li>
                                <li><NavLink exact to='/car' activeClassName='active'>Cars</NavLink></li>
                                <li><NavLink exact to='/about' activeClassName='active'>About</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className='container'>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/car' exact render={(props) => (<Car {...props} data={this.state.cars} />)} />
                    <Route path='/car/:id' render={(props) => (<CarDetails {...props} data={this.state.cars} />)} />
                </div>
            </div>
        );
    }
}

export default Main;