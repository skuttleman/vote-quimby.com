import React from 'react';
import { connect } from 'react-redux';
import logo from '../assets/images/logo.png';


const Home = props => (
    <div className="home">
        <img className="app-logo" src={logo} alt="Vote Quimby Logo" />
        <h1 className="title">Vote Quimby - new album coming soon…</h1>
        <h2 className="subtitle">With songs so new even <em>we</em> don't know them!</h2>
    </div>
);

export default connect((state, props) => ({...state, ...props}))(Home);
