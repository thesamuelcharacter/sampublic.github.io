import React from 'react';

export default function Resume(props) {

    if (props.data) {
        var skillmessage = props.data.skillmessage;
        var education = props.data.education.map(function (education) {
            return <div key={education.school}><h3>{education.school}</h3>
                <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
                <p>{education.description}</p></div>
        })
        var work = props.data.work.map(function (work) {
            return <div key={work.company}><h3>{work.company}</h3>
                <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                <p>{work.description}</p>
            </div>
        })

        var skills = props.data.skills.map((skills) => {
            var className = 'bar-expand ' + skills.name.toLowerCase();
            return (
                <li key={skills.name}>
                    <span style={{ width: skills.level, backgroundColor: '#740001' }} className={className}></span><em>{skills.name}</em>
                </li>
            )
        })
    }

    return (
        <section id="resume">
            
        </section>
    );
}
