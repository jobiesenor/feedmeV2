import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

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

        const directory = props.selections.map(selection => {
            return ( 
                <div key={selection.id} className="col-md-5 m-1">
                  <RenderDirectoryItem selection={selection} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                        {directory}
                </div>
            </div>
        );
    }


export default Directory;