import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import SelectionInfo from './SelectionInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SELECTIONS } from '../shared/selections';





class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selections: SELECTIONS
        };
    }



    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        };


        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory selections={this.state.selections} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />  
            </div>
        );
    }
}

export default Main;