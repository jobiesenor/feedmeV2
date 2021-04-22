import React from 'react';
import { Card, CardText, CardImg, CardBody, CardTitle } from 'reactstrap';


function RenderSelection({selection}) {
    return (
        <div className="col-md-5 m-1">
            <Card> 
                <CardImg top src={selection.image} alt={selection.name} />
                <CardBody>
                    <CardTitle>{selection.name}</CardTitle>
                    <CardText>{selection.description}</CardText>
                    <CardText><a href={selection.url} target='_blank'><button class=" btn-lg btn-danger">{selection.name}</button></a></CardText>
                </CardBody>
            </Card>
        </div>
    );
}

   
function RenderButtons({button}) {
        if(button) {
            return (
                <div className="col-md-5 m-1">
                    <h4>What are we eating?</h4>
                    {button.map(button => {
                        return (
                            <div key={button.id}>
                            </div>    
                        )
                    })}
                </div>
            )
        }
        return <div />;
    }
    

function SelectionInfo(props) {
            if (props.selection) {
                return (
                <div class="container">
                    <div className="row">
                            <RenderSelection selection={props.selection} />
                            <RenderButtons selection={props.selection.buttons} />
                    </div>
                </div>
                );
            }
            return <div />;

        };
        
export default SelectionInfo;




