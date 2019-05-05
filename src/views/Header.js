import React from 'react';
import { connect } from 'react-redux';
import NavItem from './NavItem';
import UL from '../components/UL';
import navs from '../data/navs';


const Header = props => (
    <header>
        <nav className="tabs">
            <UL items={navs} Component={NavItem} activeFn={({href}) => href === props.router.location.pathname} {...props} />
        </nav>
    </header>
);

export default connect((state, props) => ({...state, ...props}))(Header);
