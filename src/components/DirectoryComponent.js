import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';


function RenderDirectoryItem({selection}) {
    return (
        
        <Card> 
            <Link to={`/directory/${selection.id}`}>
                <CardImg width="100%" src={selection.image} alt={selection.name} height='300px' width='350px' />
                <CardImgOverlay>
                <CardTitle><a href={selection.url} target='_blank'><button id="myButtons" class="btn-lg">{selection.name}</button></a></CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
      
    )
}

function Directory(props) {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
        const directory = props.selections.selections.map(selection => {
            return ( 
                <div key={selection.id} className="col-md-5 m-1">
                  <RenderDirectoryItem selection={selection} />
                </div>
            );
        });

        if (props.selections.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        if (props.selections.errMess) {
            return (
                <div className="container"> 
                    <div className="row">
                        <div className="col">
                            <h4>{props.selections.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className="container">
                <div className="row">
                        {directory}
                </div>
            </div>
        );
    }


export default Directory;