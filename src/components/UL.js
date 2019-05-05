import React from 'react';


export default props => {
    let {activeFn, className, items, keyFn, Component} = props;
    return (
        <ul className={className}>
            {items.map((item, idx) => (
                <li key={keyFn ? keyFn(item) : idx} className={activeFn && activeFn(item) ? 'is-active' : null}>
                    <Component item={item} idx={idx} {...props} />
                </li>
            ))}
        </ul>
    );
};
