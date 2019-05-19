import React from 'react';
import faqs from '../data/faqs';
import FAQItem from './FAQItem';
import UL from '../components/UL';

export default props => (
    <div className="faq">
        <UL items={faqs} Component={FAQItem} {...props}/>
    </div>
);
