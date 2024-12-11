import { useState, useEffect } from 'react';
import ExperienceItem from './ExperienceItem';

function Experience() {
    const EXPERIENCE = [
        {
            id: '1',
            date: 'Mar. 2024 - Jun. 2024',
            job: 'Junior Programmer & Data Analyst',
            company: 'Mercanza',
            description: 'Realicé mis prácticas en Mercanza como Programador Junior y Analista de Datos, lo que me brindó una valiosa oportunidad para sumergirme en el mundo de la programación y el análisis de datos.',
        },
    ];

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const availableToWorkStyle = {
        marginLeft: windowWidth >= 768 ? '-650px' : '0px',
    };


    return (
        <div id="experience" className="container text-white py-5">
            <div className="row align-items-center mx-3 mx-md-0 my-5">
                <h2 className="col-6 col-md-8 text-start">
                    Experiencia
                </h2>
                <div className="col-6 col-md-4 text-md-start mt-0" style={availableToWorkStyle}>
                    <button className="btn btn-danger text-white rounded-pill" style={{'fontSize': windowWidth >= 768 ? '16px' : '10px',}}>
                        Disponible para trabajar
                    </button>
                </div>
            </div>

            <section className="px-4" style={{ marginTop: '-20px' }}>
                <ol className="list-unstyled">
                    {EXPERIENCE.map((experience) => (
                        <ExperienceItem key={experience.id} {...experience} />
                    ))}
                </ol>
            </section>
        </div>
    );
}

export default Experience;
