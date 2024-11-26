import React, { useState } from 'react';
import AccordionItem from '../components/AccordionItem';
import '../styles/FAQ.css';

export default function FAQ() {
    const [OPen, setOPen] = useState(-1);

    function toggleDetails(a) {
        setOPen(a);
    }

    const data = [
        [
            "What is a hackathon?",
            "A hackathon is a sprint-like event in which programmers collaborate to solve challenges. Our event specifically involves challenges surrounding bioinformatics, cheminformatics, and drug discovery."
        ],
        [
            "Who is this event for?",
            "Students from all backgrounds are welcome at PharmaHacks. No extensive knowledge of programming or biomedical sciences is necessary."
        ],
    [
            "Is the event free?",
            "Yes! The event will be free thanks to our amazing sponsors."
        ],
            [
            "Can students from all universities participate?",
            "Yes, PharmaHacks is open to students from all universities and CEGEPs."
        ],
    [
            "What’s the duration of the event?",
            "The event will be during the weekend of March 16-17, 2024."
        ],
    [
            "Will there be prizes?",
            "Yes!"
        ]
    ];


        return <div className="faq-container" id = "FAQ">
            <div className="faq-title">We're often asked</div>

            {data.map((item, index) => (
                <AccordionItem key={index}
                    i={index}
                    open={index === OPen}
                    tog={toggleDetails}
                    title={item[0]}
                    text={item[1]}
                />
            ))}

            <div className="faq-additional">Don't see your question? Ask us <a href="https://www.m.me/StudentPharma" target="_blank" rel="noopener noreferrer">here</a></div>
           
        </div>;
}
