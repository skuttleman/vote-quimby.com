import React from 'react';
import { connect } from 'react-redux';
import faqs from '../data/faqs';
import FAQItem from './FAQItem';
import UL from '../components/UL';

const FAQ = props => (
    <div className="faq">
        <UL items={faqs} Component={FAQItem} {...props}/>
    </div>
);

export default connect((state, props) => ({...state, ...props}))(FAQ);
