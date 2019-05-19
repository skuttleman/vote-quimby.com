import React from 'react';
import logo from '../assets/images/logo.png';


export default props => (
    <div className="home">
        <img className="app-logo" src={logo} alt="Vote Quimby Logo" />
        <h1 className="title">Vote Quimby - new album coming soon…</h1>
        <h2 className="subtitle">With songs so new even <em>we</em> don't know them!</h2>
    </div>
);
