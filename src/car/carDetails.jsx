import React, { Component } from 'react';

class CarDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const cars = this.props.data;
        const id = this.props.match.params.id;
        const car = cars.filter(car => car.id == id)[0];
        
        return car ? (
            <div>
                <h1>{car.name}</h1>
                <div className='row'>
                    
                    <div className='col-sm-6 col-md-4'>
                        <div className='thumbnail'>
                            <img src={car.media} alt={car.name} />
                        </div>
                    </div>

                    <div className='col-sm-6 col-md-4'>
                        <ul>
                            <li><strong>Model:</strong> {car.model}</li>
                            <li><strong>Make:</strong> {car.make}</li>
                            <li><strong>Year:</strong> {car.year}</li>
                            <li><strong>Price:</strong> {car.price}</li>
                        </ul>
                    </div>
                </div>
            </div>
        ) : null;
    }
}

export default CarDetails;