import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [
                {
                    id: 0,
                    name: 'GoEat',
                    image: 'assests/imgs/NYchinesefood.jpeg',
                    description: 'Food on the go'
                },
                {
                    id: 1,
                    name: 'Dine-In',
                    image: 'assests/imgs/FineDining.jpeg',
                    description: 'Reservations Please'
                },
                {
                    id: 2,
                    name: 'Show Me!',
                    image: 'assests/imgs/homecooking.jpeg',
                    description: 'Professional-ish Homecook'
                }
            ],
        };
    }

    render() {
        const directory = this.state.options.map(option => {
            return ( 
                <div key={option.id} className="col">
                    <img src={option.image} alt={option.name} />
                    <h2>{option.name}</h2>
                    <p>{option.description}</p>
                </div>
            )
        })

        return (
            <div className="container">
                <div className="row">
                        {directory}
                </div>
            </div>
        );
    }
}

export default Directory;