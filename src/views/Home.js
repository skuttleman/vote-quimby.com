import React from 'react';
import { connect } from 'react-redux';
import logo from '../assets/images/logo.png';


const Home = ({dispatch, router, queueIntro: {entered, played}}) => (
    <div className="home">
        <img className="app-logo" src={logo} alt="Vote Quimby Logo" />
        <h1 className="title">Site coming soon…</h1>
    </div>
);

export default connect((state, props) => ({...state, ...props}))(Home);
