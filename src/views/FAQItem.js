import React from 'react';


export default ({item: {question, answer}}) => (
    <div className="faq-item">
        <p className="faq-question">{question}</p>
        <p className="faq-answer">{answer}</p>
    </div>
);
