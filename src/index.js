import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Albums from './views/Albums';
import FAQ from './views/FAQ';
import Home from './views/Home';
import _Nav from './views/Nav';
import NotFound from './views/NotFound';
import Videos from './views/Videos';

const history = createBrowserHistory();
const Nav = withRouter(_Nav);

ReactDOM.render(
    <Router history={history}>
        <Nav>
            <Switch>
                <Route exact path="/" render={withRouter(Home)} />
                <Route exact path="/albums" render={withRouter(Albums)} />
                <Route exact path="/videos" render={withRouter(Videos)} />
                <Route exact path="/faq" render={withRouter(FAQ)} />
                <Route render={withRouter(NotFound)} />
            </Switch>
        </Nav>
    </Router>,
    document.getElementById('root')
);
