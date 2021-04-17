import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


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

    renderChosenSelection(selection){
        if(selection) {
            return (
                <Card> 
                    <CardImg top src={selection.image} alt={selection.name} />
                    <CardBody>
                        <CardTitle>{selection.name}</CardTitle>
                        <CardText>{selection.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
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
                        {this.renderChosenSelection(this.state.selectedCampsite)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Directory;