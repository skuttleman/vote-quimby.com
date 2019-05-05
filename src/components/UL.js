import React from 'react';


export default props => {
    let {activeFn, items, keyFn, Component} = props;
    return (
        <ul>
            {items.map((item, idx) => (
                <li key={keyFn ? keyFn(item) : idx} className={activeFn && activeFn(item) ? 'is-active' : null}>
                    <Component item={item} {...props} />
                </li>
            ))}
        </ul>
    );
};
