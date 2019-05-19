import React from 'react';
import NavItem from './NavItem';
import UL from '../components/UL';
import navs from '../data/navs';


export default (props, ...more) => (
    <header>
        <nav className="tabs">
            <UL items={navs} Component={NavItem} activeFn={({href}) => href === props.location.pathname} {...props} />
        </nav>
    </header>
);
