import React from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute, browserHistory } from "react-router";

import {About} from "./pages/About";
import {Home} from "./pages/Home";
import {Gallery} from "./pages/Gallery";
import {Contact} from "./pages/Contact";
import {Root} from "./Root";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import store from "./redux/store"
import "./../css/style.css";
import "./../css/bootstrap.min.css";

class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
               <Router history={browserHistory}>
                    <Route path={"/TestFrontEnd/"} component={Root}>
                        <IndexRoute path={"/TestFrontEnd/Home"} component={Home} />
                        <Route path={"/TestFrontEnd/Home"} component={Home} />
                        <Route path={"/TestFrontEnd/Gallery"} component={Gallery} />
                        <Route path={"/TestFrontEnd/Contact"} component={Contact} />
                        <Route path={"/TestFrontEnd/About"} component={About}/>
                    </Route>
                </Router>
            </Provider>
        )
                }
}
render(<App/>, window.document.getElementById('FrontEnd'))