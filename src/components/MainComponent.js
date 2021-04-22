import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Directory from './DirectoryComponent';
import { SELECTIONS } from '../shared/selections';
import SelectionInfo from './SelectionInfoComponent';



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selections: SELECTIONS,
            chosenSelection: null
        };
    }

    onChosenSelection(selectionId) {
        this.setState({chosenSelection: selectionId});
    }

    render() {
        return (
            <div>
                <Header />
                <Directory selections={this.state.selections} onClick={selectionId => this.onChosenSelection(selectionId)} />
                <SelectionInfo selection={this.state.selections.filter(selection => selection.id === this.state.chosenSelection)[0]} />
                <Footer />  
            </div>
        );
    }
}

export default Main;