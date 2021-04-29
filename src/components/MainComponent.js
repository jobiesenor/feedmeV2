import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SELECTIONS } from '../shared/selections';
import { GOEATS } from '../shared/goeat';
import { DINEINS } from '../shared/dineIn';
import { SHOWME } from '../shared/showme';
import GoEatsPg from './GoEatsComponent';
import DineInPg from './DineInComponent';
import ShowMePg from './ShowMeComponent';





class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selections: SELECTIONS,
            goeats: GOEATS,
            dineins: DINEINS,
            showme: SHOWME
        };
    }



    render() {

        const HomePage = () => {
            return (
                <Home 
                    selections={this.state.selections.filter(selection => selection.featured)[0]}
                    goeats={this.state.goeats.filter(goeat => goeat.featured)[0]}
                    dineins={this.state.dineins.filter(dinein => dinein.featured)[0]}
                    

                />
            );
        }
         

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory selections={this.state.selections} />} />
                    <Route path='/directory/0' render={() => <GoEatsPg goeats={this.state.goeats} />} />
                    <Route path='/directory/1' render={() => <DineInPg dineins={this.state.dineins} />} />
                    <Route path='/directory/2' render={() => <ShowMePg showme={this.state.showme} />} />
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />  
            </div>
        );
    }
}

export default Main;