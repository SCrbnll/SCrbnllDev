import SCrbnll from '/images/SCrbnll.jpg';  // Asegúrate de tener tu imagen en esta ruta

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer
      className="d-flex justify-content-between align-items-center py-4 px-3 px-md-5 border-top"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        position: 'inherit',              
    }}
    >
      <div className="d-flex align-items-center">
        <img
          src={SCrbnll}
          alt="Myself"
          className="rounded-circle"
          style={{ width: '80px', height: '80px', objectFit: 'cover' }}
        />
      </div>

      <div className="text-center text-white mx-3">
        <p className="mb-0">"El conocimiento es el camino hacia el progreso"</p>
      </div>

      <div className="d-flex align-items-center">
        <a
          href="https://linkedin.com/in/samuu-crbnll"
          target="_blank"
          className="btn btn-outline-light rounded-circle me-3"
          style={{ width: '45px', height: '42px', border: '2px solid white',}}
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" style={{ alignSelf: 'center' }}/>
        </a>

        <a
          href="https://github.com/SCrbnll"
          target="_blank"
          className="btn btn-outline-light rounded-circle"
          style={{ width: '45px', height: '42px', border: '2px solid white' }}
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
