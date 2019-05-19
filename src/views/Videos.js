import React from 'react';
import UL from '../components/UL';
import Video from './Video';
import videos from '../data/videos';


export default props => (
    <UL className="videos" items={videos} Component={Video} />
);
