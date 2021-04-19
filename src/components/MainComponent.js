import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
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
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/"> FEEDme</NavbarBrand>
                </div>  
                </Navbar>
                <Directory selections={this.state.selections} onClick={selectionId => this.onChosenSelection(selectionId)} />
                <SelectionInfo selection={this.state.selections.filter(selection => selection.id === this.state.chosenSelection)[0]} />
            </div>
        );
    }
}

export default Main;