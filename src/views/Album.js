import React from 'react';
import UL from '../components/UL';
import Track from './Track';


export default ({item: {title, image, tracks, link}}) => (
    <>
        <div className="album">
            <img height="300" width="300" src={image} alt="Album artwork" />
            <div className="album-info">
                <p className="album-title">{title}</p>
                <UL className="album-tracks" items={tracks} Component={Track} />
            </div>
        </div>
        <a className="button is-link" rel="noopener noreferrer" target="_blank" href={link.href}>{link.label}</a>
    </>
);
