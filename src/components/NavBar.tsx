import { useState, useEffect } from 'react';
import logo from '/images/logo.webp';
import "@theme-toggles/react/css/Within.css";
import { Within } from "@theme-toggles/react";

function NavBar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const logoStyle = {
        height: windowWidth >= 768 ? '50px' : '30px',
    };

    const withinStyle = {
        transform: windowWidth < 768 ? 'scale(1)' : 'scale(1.5)', 
    };

    return (
        <nav className="navbar navbar-expand-md bg-dark px-1 px-md-5">
            <a className="navbar-brand" href="#top">
                <img src={logo} alt="Logo" style={logoStyle} />
            </a>

            <button
                className="navbar-toggler text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{
                    backgroundColor: '#ffffff',
                    borderColor: '#ffffff',
                    padding: '2px',
                }}
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <div className={`d-flex ${windowWidth < 768 ? 'flex-column align-items-end' : 'flex-md-row ms-auto'}`}> 
                    <a className="nav-link text-white my-2 me-4" href="#top">Experiencia</a>
                    <a className="nav-link text-white my-2 me-4" href="#projects">Proyectos</a>
                    <a className="nav-link text-white my-2 me-4" href="#contact">Contacto</a>

                    <div className="my-2 me-4" style={withinStyle}>
                        <Within
                            color="white"
                            duration={800}
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
