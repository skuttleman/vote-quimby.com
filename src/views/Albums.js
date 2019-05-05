import React from 'react';
import UL from '../components/UL';
import Album from './Album';
import albums from '../data/albums';


export default props => (
    <UL className="albums" items={albums} Component={Album} />
);
