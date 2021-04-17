import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import { SELECTIONS } from './shared/selections';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selections: SELECTIONS
        };
    }

    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/"> FEEDme</NavbarBrand>
                </div>  
                </Navbar>
                <Directory selections={this.state.selections} />
            </div>
        );
    }
}

export default App;
