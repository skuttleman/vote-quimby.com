import React from 'react';
import { Link } from 'react-router-dom';


export default ({item: {href, text}}) => (
    <div className="nav-item">
        <Link to={href}>{text}</Link>
    </div>
);
