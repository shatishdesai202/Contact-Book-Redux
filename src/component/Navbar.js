import React from 'react';

import {Link} from 'react-router-dom';


function Navbar() {
    return (
        <div>
            <nav className="navbar fixed shadow navbar-expand-sm navbar-dark bg-primary">
                <div className="container">
                    
                    <Link to="/" className="navbar-brand" > 
                        Contact-Book
                    </Link>

                    <div>

                    <Link to="/contact/AddContact/"  className="btn btn-light ml-auto" >
                        Create Contact
                    </Link>    

                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
