import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import SelectionInfo from './SelectionInfoComponent';


class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenSelection: null
        };
    }

    onChosenSelection(selection) {
        this.setState({chosenSelection: selection});
    }

    render() {
        const directory = this.props.selections.map(selection => {
            return ( 
                <div key={selection.id} className="col-md-5 m-1">
                   <Card onClick={() => this.onChosenSelection(selection)}> 
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
                <div className="row">
                    <div className="col-md-5 m1">
                       <SelectionInfo selection={this.state.chosenSelection} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Directory;