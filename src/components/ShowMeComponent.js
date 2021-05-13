import React from 'react';
import { Card, CardText, CardImg, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';

function RenderShowMe({showme, isLoading, errMess}) {
    if(isLoading){
        return <Loading />;
    }
    if(errMess){
        return <h4>{errMess}</h4>;
    }   
    return (
        <div className="col-md-5 m-1">
                    <Card> 
                        <CardImg width="100%" src={showme.image} alt={showme.name} />
                        <CardBody>
                            <CardTitle>{showme.name}</CardTitle>
                            <CardText>{showme.description}</CardText>
                            <CardText><a href={showme.url} target='_blank'><button class=" btn-lg btn-danger">{showme.name}</button></a></CardText>
                        </CardBody>
                    </Card>
        </div>
    ); 

}
    
function ShowMePg(props) {

    const showmepg = props.showmes.showmes.map(showme => {
        return ( 
            <div key={showme.id} className="col-md-5 m-1">
              <RenderShowMe showme={showme} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                    {showmepg}
            </div>
        </div>
    );
}

        
export default ShowMePg;