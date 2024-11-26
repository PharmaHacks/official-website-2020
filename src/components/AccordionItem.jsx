import React from 'react';
import '../styles/accordion.css';

export default function AccordionItem(i, title, text, open, tog) {

    const toggle = () => {
        i.tog(i.i);
    }

    return <div className={i.open ? 'accordion-container-long': 'accordion-container-short'} onClick={toggle}>
        <div className="accordion-title">{i.title}</div>
        <div className={i.open ? 'accordion-text': 'accordion-text-hidden'}>
            {i.text}
        </div>
    </div>
}

