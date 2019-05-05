import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const NavItem = ({item: {href, text}, router}) => (
    href === router.location.pathname ?
        <div className="nav-item active">{text}</div>
        :
        <div className="nav-item">
            <Link to={href}>{text}</Link>
        </div>
);

export default connect((state, props) => ({...state, ...props}))(NavItem);
