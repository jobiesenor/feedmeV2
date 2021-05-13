import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';


function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return <Loading />;
    }
    if (errMess) {
        return <h4>{errMess}</h4>;
    }
    return (
        <FadeTransform
            in
            transfromProps={{
                exitTransform: 'scale(0.5) translateY(50%)'
            }}>
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    <CardText>{item.description}</CardText>
                    <CardText><a href={item.url}><button class=" btn-lg btn-info">{item.name}</button></a></CardText>
                </CardBody>
            </Card>
        </FadeTransform>
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
                    <h2>The game that helps you chose your next meal.</h2> 
                    <p>To start click the FEEDme button and you will be given a randomly selected option. Your options include go-eat(food on the go), dine-in(make a reservation nearby), or show-me!(get hands on with trending recipes). Once given a selection go to the directory and chose your option. Eat well my friends. </p>
                    <button className="btn-danger btn-lg" type="submit" onClick={feedMeGame}> FEEDme </button>
                </div>
                <div className="col-md m-1">
                    <RenderCard 
                        item={props.selections} 
                        isLoading={props.selectionsLoading}
                        errMess={props.selectionsErrMess}
                    />
                </div>
            </div>
        </div>    
    );


}

export default Home;


