import React from 'react';
import ExperienceItem from './ExperienceItem';
import experienceData from '../assets/experience.json';

const Experience: React.FC = () => {
    return (
        <div id="experience" className="container text-white">
            <div className="mx-3 mx-md-0 my-5">
                <h2 className="col-6 col-md-8 text-start">
                    Experiencia
                </h2>
            </div>

            <section className="px-4" style={{ marginTop: '-20px' }}>
                <ol className="list-unstyled">
                    {experienceData.map((experience) => (
                        <ExperienceItem key={experience.id} {...experience} />
                    ))}
                </ol>
            </section>
        </div>
    );
}

export default Experience;
