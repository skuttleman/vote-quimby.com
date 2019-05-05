import React from 'react';
import { connect } from 'react-redux';


const FAQ = props => (
    <div>
        FAQQ
    </div>
);

export default connect((state, props) => ({...state, ...props}))(FAQ);
