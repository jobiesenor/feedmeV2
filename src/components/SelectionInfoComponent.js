import React, { Component } from 'react';
import { Card, CardText, CardImg, CardBody, CardTitle } from 'reactstrap';


class SelectionInfo extends Component {
   
    renderButtons(buttons) {
        if(buttons) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Whats are we eating?</h4>
                    {buttons.map(button => {
                        return (
                            <div key={button.id}>
                                <p>{button.text} <br />
                                --- {button.author}, 
                                </p>
                            </div>    
                        )
                    })}
                </div>
            )
        }
        return <div />;
    }
    
    renderSelection(selection) {
            return (
                <div className="col-md-5 m-1">
                    <Card> 
                        <CardImg top src={selection.image} alt={selection.name} />
                        <CardBody>
                            <CardTitle>{selection.name}</CardTitle>
                            <CardText>{selection.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }


        render() {
            if (this.props.selection) {
                return (
                <div class="container">
                    <div className="row">
                            {this.renderSelection(this.props.selection)}
                            {this.renderButtons(this.props.selection.buttons)}
                    </div>
                </div>
                );
            }

            return <div />;

        };
        
        
    }


export default SelectionInfo;




