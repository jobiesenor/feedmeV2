import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Trending from './TrendingComponent';
import GoEatsPg from './GoEatsComponent';
import DineInPg from './DineInComponent';
import ShowMePg from './ShowMeComponent';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { fetchSelections, fetchDineIns, fetchGoEats, fetchShowMes } from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
        selections: state.selections, 
        goeats: state.goeats,
        dineins: state.dineins,
        showmes: state.showmes

    };
};

const mapDispatchToProps = {
    
    fetchSelections: () => (fetchSelections()),
    fetchDineIns: () => (fetchDineIns()),
    fetchGoEats: () => (fetchGoEats()),
    fetchShowMes: () => (fetchShowMes())

};

class Main extends Component {

    componentDidMount() {
        this.props.fetchSelections();
        this.props.fetchDineIns();
        this.props.fetchGoEats();
        this.props.fetchShowMes();
    }

    render() {

        const HomePage = () => {
            return (
                <Home 
                selections={this.props.selections.selections.filter(selection => selection.featured)[0]}
                selectionsLoading={this.props.selections.isLoading}
                selectionsErrMess={this.props.selections.errMess}

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
                    <Route path='/directory/2' render={() => <ShowMePg showmes={this.props.showmes} />} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));