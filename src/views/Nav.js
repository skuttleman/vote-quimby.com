import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';


const Nav = props => (
    <main className="app">
        <Header {...props} />
        <div className="contents">{props.children}</div>
    </main>
);

export default connect((state, props) => ({...state, ...props}))(Nav);
