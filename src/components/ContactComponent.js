import React from 'react';

function Contact(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Contact Us</h2>
                    <hr />
                </div>
            </div>

            <div className="row row-content align-items-center">
                <div className="col-sm-4">
                    <h5>Our Address</h5>
                    <address>
                        850 Fiji Way<br />
                        Marina del Rey, CA 90292<br />
                        U.S.A.
                    </address>
                </div>
                <div className="col">
                    <a role="button" className="btn btn-link" href="mailto:jobiesenor@gmail.com"><i className="fa fa-envelope-o" /> FEEDme@now.com</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;