import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
// --------------------------------------------------------------
import reducers from './reducers';
// --------------------------------------------------------------
import Users from './Users';
import Cards from './Cards';
import Splash from './Splash';
import Srs from "./Srs";

// --------------------------------------------------------------
import * as serviceWorker from './serviceWorker';
// --------------------------------------------------------------
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.min.css';

// --------------------------------------------------------------
const store = createStore(
    reducers, 
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? 
        window.devToolsExtension() : f => f
    )
  );

// --------------------------------------------------------------
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/cards/:page" component={Cards} />
                <Route path="/cards" component={Cards} />
                <Route path="/users/:page" component={Users} />
                <Route path="/users" component={Users} />
                <Route path="/srs/:userid" component={Srs} />
                <Route path="/" component={Splash} />
            </Switch>
        </BrowserRouter>
    </Provider>, 
document.getElementById('root'));

serviceWorker.unregister();