import React from 'react';
import { Card, CardText, CardImg, CardBody, CardTitle } from 'reactstrap';


function RenderGoEats({goeat}) {
    return (
        <div className="col-md-5 m-1">
                    <Card> 
                        <CardImg width="100%" src={goeat.image} alt={goeat.name} />
                        <CardBody>
                            <CardTitle>{goeat.name}</CardTitle>
                            <CardText>{goeat.description}</CardText>
                            <CardText><a href={goeat.url} target='_blank'><button class=" btn-lg btn-danger">{goeat.name}</button></a></CardText>
                        </CardBody>
                    </Card>
                  </div>
    ); 

}
    

function GoEatsPg(props) {

    const goeatspg = props.goeats.map(goeat => {
        return ( 
            <div key={goeat.id} className="col-md-5 m-1">
              <RenderGoEats goeat={goeat} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                    {goeatspg}
            </div>
        </div>
    );
}

        
export default GoEatsPg;