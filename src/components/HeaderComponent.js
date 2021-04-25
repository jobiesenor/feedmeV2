import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                            <img
                            src="../assests/imgs/FeedmeLogo.png"
                            width="100"
                            height="100"
                            className=""
                            alt="FEEDme logo"
                            />
                                <h1>FEEDme</h1>
                                <h2>What are you in the mood for?</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top">
                    <div className="container">
                        <NavbarBrand href="/">
                        <img
                            src="../assests/imgs/FeedmeLogo.png"
                            width="30"
                            height="30"
                            className="d-inline-block"
                            alt="FEEDme logo"
                            />
                            FEEDme</NavbarBrand>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
} 



export default Header;