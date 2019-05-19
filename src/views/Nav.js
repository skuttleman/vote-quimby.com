import React from 'react';
import Header from './Header';


export default props => (
    <main className="app">
        <Header {...props} />
        <div className="contents">{props.children}</div>
    </main>
);
