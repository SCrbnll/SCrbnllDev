import { useState, useEffect } from 'react';
import mySelf from '/images/myself.jpg';

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
