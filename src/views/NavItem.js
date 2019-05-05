import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const NavItem = ({item: {href, text}, router}) => (
    <div className="nav-item">
        <Link to={href}>{text}</Link>
    </div>
);

export default connect((state, props) => ({...state, ...props}))(NavItem);
