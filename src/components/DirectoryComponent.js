import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


class Directory extends Component {

    render() {
        const directory = this.props.selections.map(selection => {
            return ( 
                <div key={selection.id} className="col-md-5 m-1">
                   <Card onClick={() => this.props.onClick(selection.id) }> 
                        <CardImg width="100%" src={selection.image} alt={selection.name} />
                        <CardImgOverlay>
                            <CardTitle>{selection.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

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