import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import SelectionInfo from './SelectionInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SELECTIONS } from '../shared/selections';
import { BUTTONS } from '../shared/buttons';





class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selections: SELECTIONS,
        };
    }



    render() {

        const HomePage = () => {
            return (
                <Home 
                    selections={this.state.selections.filter(selection => selection.featured)[0]}
                   
                />
            );
        }


        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory selections={this.state.selections} />} />
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />  
            </div>
        );
    }
}

export default Main;