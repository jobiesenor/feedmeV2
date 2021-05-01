import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Trending from './TrendingComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import GoEatsPg from './GoEatsComponent';
import DineInPg from './DineInComponent';
import ShowMePg from './ShowMeComponent';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        selections: state.selections, 
        goeats: state.goeats,
        dineins: state.dineins,
        showme: state.showme

    };
};

class Main extends Component {

    render() {

        const HomePage = () => {
            return (
                <Home 
                    selections={this.props.selections.filter(selection => selection.featured)[0]}
                    goeats={this.props.goeats.filter(goeat => goeat.featured)[0]}
                    dineins={this.props.dineins.filter(dinein => dinein.featured)[0]}
                    showme={this.props.showme.filter(showme => showme.featured)[0]}
                    

                />
            );
        };
         

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory selections={this.props.selections} />} />
                    <Route path='/directory/0' render={() => <GoEatsPg goeats={this.props.goeats} />} />
                    <Route path='/directory/1' render={() => <DineInPg dineins={this.props.dineins} />} />
                    <Route path='/directory/2' render={() => <ShowMePg showme={this.props.showme} />} />
                    <Route path='/directory/3' component={Trending} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/trending' component={Trending} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />  
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));