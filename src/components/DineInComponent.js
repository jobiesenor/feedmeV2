import React from 'react';
import { Card, CardText, CardImg, CardBody, CardTitle } from 'reactstrap';


function RenderDineIn({dinein}) {
    return (
        <div className="col-md-5 m-1">
                    <Card> 
                        <CardImg width="100%" src={dinein.image} alt={dinein.name} />
                        <CardBody>
                            <CardTitle>{dinein.name}</CardTitle>
                            <CardText>{dinein.description}</CardText>
                            <CardText><a href={dinein.url} target='_blank'><button class=" btn-lg btn-danger">{dinein.name}</button></a></CardText>
                        </CardBody>
                    </Card>
                  </div>
    ); 

}
    

function DineInPg(props) {

    const dineinpg = props.dineins.map(dinein => {
        return ( 
            <div key={dinein.id} className="col-md-5 m-1">
              <RenderDineIn dinein={dinein} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                    {dineinpg}
            </div>
        </div>
    );
}

        
export default DineInPg;