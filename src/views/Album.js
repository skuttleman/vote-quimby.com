import React from 'react';
import MusicPlayer from 'react-responsive-music-player';
import Track from './Track';
import UL from '../components/UL';


export default ({item: {title, image, tracks, playList, link}}) => (
    <>
        <div className="album">
            <img height="300" width="300" src={image} alt="Album artwork" />
            <div className="album-info">
                <p className="album-title">{title}</p>
                {playList ?
                 <MusicPlayer playlist={playList} /> :
                 <UL className="album-tracks" items={tracks} Component={Track} />}
            </div>
        </div>
        {link ? <a className="button is-link" rel="noopener noreferrer" target="_blank" href={link.href}>{link.label}</a> : null}
    </>
);
