import React from 'react';
import { Card, CardText, CardImg, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';

function RenderDineIn({dinein, isLoading, errMess}) {
    if(isLoading){
        return <Loading />;
    }
    if(errMess){
        return <h4>{errMess}</h4>;
    }
    return (
        <div className="col-md m-1">
                    <Card> 
                        <CardImg width="100" height="200" src={dinein.image} alt={dinein.name} />
                        <CardBody>
                            <CardTitle>{dinein.name}</CardTitle>
                            <CardText>{dinein.description}</CardText>
                            <CardText><a href={dinein.url} target='_blank'><button class=" btn-lg btn-info">{dinein.name}</button></a></CardText>
                        </CardBody>
                    </Card>
                  </div>
    ); 

}
    

function DineInPg(props) {

    const dineinpg = props.dineins.dineins.map(dinein => {
        return ( 
            <div key={dinein.id} className="col-md-5 m-1">
              <RenderDineIn 
                dinein={dinein} 
                isLoading={props.dineinsLoading}
                errMess={props.dineinsErrMess}
              />
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