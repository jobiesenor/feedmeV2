import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard({item}) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
                <CardText><a href={item.url} target='_blank'><button class=" btn-lg btn-info">{item.name}</button></a></CardText>
            </CardBody>
        </Card>
    );
}



function feedMeGame(e){
    const myOpts = ['Go Eat', 'Dine-IN', 'Show Me!'];
    const feedMe = myOpts[Math.floor(Math.random() * myOpts.length)];
    
    return alert(feedMe);
}

function Home(props) {
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <h4>Welcome to FeedMe </h4> 
                    <p>...the game that helps you chose your next meal. Simply click the FEEDme button and you will be given a randomly selected option. You can either go eat, dine-in, or show me and be taught recipes hands-on.</p>
                    <button className="btn-danger btn-lg" type="submit" onClick={feedMeGame}> FEEDme </button>
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.selections} />
                    
                </div>
            </div>
        </div>    
    );


}

export default Home;


