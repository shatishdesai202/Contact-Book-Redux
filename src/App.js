import React from 'react';

import Navbar from './component/Navbar';

import Contact from './component/Contact';

import AddContact from './component/AddContact';

import EditContact from './component/EditContact';

import { Provider } from 'react-redux';

import store from './store';

import './app.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
    return (
       <Provider store={store}>
            
            <Router>

                <div>
                    <Navbar/>
                    
                    <div className="p-3">

                        <Switch>

                            <Route exact path="/" component={Contact} />

                            <Route exact path="/contact/AddContact/" component={AddContact} />
                            <Route exact path="/contact/EditContact/:id" component={EditContact} />

                        </Switch>


                    </div>

                </div>

            </Router>

       </Provider>
    
    )
}


