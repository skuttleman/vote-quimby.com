import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';


const Nav = props => (
    <main>
        <Header {...props} />
        <div>{props.children}</div>
    </main>
);

export default connect((state, props) => ({...state, ...props}))(Nav);
