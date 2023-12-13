import React from 'react'

const AboutBox = () => {
    return (
        <div className="about___boxes grid">
            <div className="about___box">
                <i className="about___icon icon-fire"></i>
                <div>
                    <h3 className="about___title">198</h3>
                    <span className="about___title">Project completed</span>
                </div>
            </div>
            <div className="about___box">
                <i className="about___icon icon-cup"></i>
                <div>
                    <h3 className="about___title">5670</h3>
                    <span className="about___title">Cup of coffee</span>
                </div>
            </div>
            <div className="about___box">
                <i className="about___icon icon-people"></i>
                <div>
                    <h3 className="about___title">427</h3>
                    <span className="about___title">Satisfied clients</span>
                </div>
            </div> 
            <div className="about___box">
                <i className="about___icon icon-badge"></i>
                <div>
                    <h3 className="about___title">35</h3>
                    <span className="about___title">Nominees winner</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox
