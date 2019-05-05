import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/create';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import FAQ from './views/FAQ';
import Home from './views/Home';
import Nav from './views/Nav';
import NotFound from './views/NotFound';

const history = createBrowserHistory();
const store = createStore(history);

const view = Component => router => (
    <Component router={router} dispatch={store.dispatch} />
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Nav>
                <Switch>
                    <Route exact path="/" render={view(Home)} />
                    <Route exact path="/home" render={view(Home)} />
                    <Route exact path="/faq" render={view(FAQ)} />
                    <Route render={view(NotFound)} />
                </Switch>
            </Nav>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
