import React from 'react';
import '../styles/Welcome.css';

export default class Welcome extends React.Component {
    render() {
        return (
            <div className="welcome-container" id="welcome">
                <div className="w-background-container">
                    {/* Background SVGs, animations omitted for brevity */}
                </div>
                <div className="w-title-section">
                    <img src="./images/welcome/pharma2025.png" alt="Pharmahacks 2024" className="w-title-text" />
                    
                    {/* Refined Thematic Text */}
                    <div className="thematic-text">
                        <div>
                            <span role="img" aria-label="calendar">📅</span> Event Dates:<br />
                            Saturday, March 15, 2025<br />
                            Sunday, March 16, 2025
                        </div>
                        <br />
                        <div>
                            <span role="img" aria-label="clock">⏰</span> Time:<br />
                            09:00 AM – 06:00 PM
                        </div>
                        <br />
                        <div>
                            <span role="img" aria-label="location">📍</span> Location:<br />
                            <div>1250 Rue Guy Suite</div>
                            600 Montréal, QC<br />
                            H3H 2L3
                        </div>
                    </div>


                    {/* Button to the application form */}
                    {/* UNCOMMENT WHEN APPLICATIONS OPEN! */}
                    {/* This is the current button that is stay tuned, remove this and uncomment the one below when apps are open. Then HREF the google form link */}
                    
                    <div className="application-link">
                        <a
                            href="https://forms.office.com/Pages/ResponsePage.aspx?id=cZYxzedSaEqvqfz4-J8J6lvG0cUUYTVNm7ol7OXrtutUM0dFNDlTVDRZWDRLVVVDMlE0MU9FMjFYNC4u"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="apply-button"
                        >
                            Register Now!
                        </a>
                    </div>
                </div>

                <img className="w-dna-gif" src="./images/welcome/DNA.gif" alt="DNA gif" />
            </div>
        );
    }
}
