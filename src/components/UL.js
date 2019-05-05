import React from 'react';


export default props => {
    let {items, keyFn, Component} = props;
    return (
        <ul>
            {items.map((item, idx) => (
                <li key={keyFn ? keyFn(item) : idx}>
                    <Component item={item} {...props} />
                </li>
            ))}
        </ul>
    );
};
