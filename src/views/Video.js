import React from 'react';


export default ({item: {title, video}}) => (
    <div className="video">
        <p>{title}</p>
        {video}
    </div>
);
