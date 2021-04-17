import React, { Component } from 'react';
import { Card, CardText, CardImg, CardBody, CardTitle } from 'reactstrap';


class SelectionInfo extends Component {
   
    renderComments(comments) {
        if(comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Whats are we eating?</h4>
                    {comments.map(comment => {
                        return (
                            <div key={comment.id}>
                                <p>{comment.text} <br />
                                --- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
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
                    <div className="row">
                            {this.renderSelection(this.props.selection)}
                            {this.renderComments(this.props.selection.comments)}
                    </div>
                );
            }

            return <div />;

        };
        
        
    }


export default SelectionInfo;




