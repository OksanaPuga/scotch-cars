import React, { Component } from 'react';
import carsData from '../../mocks.js';

class Car extends Component {
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
        let cars = this.state.cars.map((car) => (
            <a
                className='list-group-item'
                href='#'
                key={car.id}>
                {car.name}
            </a>
        ));

        return (
            <div>
                <h1>Cars Page</h1>
                <div className='list-group'>
                    {cars}
                </div>
            </div>
        );
    }
}

export default Car;