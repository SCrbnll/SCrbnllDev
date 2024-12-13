import { useState, useEffect } from 'react';
import mySelf from '/images/myself.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function AboutMe() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerStyle = {
        marginTop: windowWidth >= 768 ? '120px' : '80px',
    };

    const mySelfStyle = {
        maxWidth: windowWidth >= 768 ? '400px' : '200px',
        borderRadius: '50%',
        border: '5px solid #FF6F00',
    };

    return (
        <>
            <div className="container text-white" style={containerStyle}>
                <div className="row mx-3 mx-md-0 my-4">
                    <div className="col-md-8 col-12 my-auto">
                        <h2 style={{ color: '#fcdac0' }}>Samuel Carbonell Gonçalves</h2>
                        <h4 style={{ color: '#FF9100', textShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)' }}>
                            Desarrollador Junior | Front & Back Developer
                        </h4>
                        <br />
                        <p style={{ color: '#fab682', textWrap: 'balance' }}>
                            ¡Hola! Soy <b>Samuel Carbonell</b>, un apasionado del desarrollo de software y la programación.
                            Siempre en busca de aprender y enfrentar nuevos retos, me entusiasma seguir creciendo
                            profesionalmente y contribuir al éxito de un equipo.
                        </p>    
                        <div className="d-flex justify-content-start mt-4">
                            <a
                                href="https://linkedin.com/in/samuu-crbnll"
                                target="_blank"
                                className="btn btn-outline-light rounded-circle me-3"
                                style={{ width: '45px', height: '42px', border: '2px solid white' }}
                            >
                                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                            </a>

                            <a
                                href="https://github.com/SCrbnll"
                                target="_blank"
                                className="btn btn-outline-light rounded-circle me-3"
                                style={{ width: '45px', height: '42px', border: '2px solid white' }}
                            >
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                            </a>

                            <a
                                href="/Curriculum Vitae.pdf" 
                                target="_blank"
                                className="btn btn-outline-light rounded-circle"
                                style={{ width: '45px', height: '42px', border: '2px solid white', textAlign: 'center' }}
                            >
                                <b>CV</b>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 text-center">
                        <img src={mySelf} alt="About Me" className="img-fluid" style={mySelfStyle} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;
