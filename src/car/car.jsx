import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Car extends Component {
    render() {
        let cars = this.props.data.map((car) => (
            <Link
                className='list-group-item'
                to={'/car/' + car.id}
                key={car.id}>
                {car.name}
            </Link>
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