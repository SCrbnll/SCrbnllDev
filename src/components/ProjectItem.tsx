import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import TechIcons from './TechIcons';

interface ProjectItemProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  imgUrl?: string; 
  previewUrl?: string; 
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  technologies,
  githubUrl,
  imgUrl,
  previewUrl,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 mb-4">
        <div className="card h-100 project-card" onClick={handleShow} style={{ cursor: 'pointer' }}>
          {imgUrl && (
            <img src={imgUrl} alt={title} className="card-img-top" style={{ objectFit: 'cover', height: '200px' }} />
          )}
          <div className="overlay">
            <p className="overlay-text">Haz click para ver detalles</p>
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <TechIcons techList={technologies} />
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {imgUrl && (
            <img src={imgUrl} alt={title} className="img-fluid mb-3" />
          )}
          <p><strong>Descripción:</strong> {description}</p>
          <TechIcons techList={technologies} />
        </Modal.Body>
        <Modal.Footer>
          {githubUrl && (
            <Button variant="primary" href={githubUrl} target="_blank">
              Ver en GitHub
            </Button>
          )}
          {previewUrl && (
            <Button variant="secondary" href={previewUrl} target="_blank">
              Ver Previa
            </Button>
          )}
        </Modal.Footer>
      </Modal>

      <style>{`
        .project-card {
          position: relative;
          overflow: hidden;
        }

        .project-card .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .project-card .overlay-text {
          color: white;
          font-size: 18px;
          font-weight: bold;
          text-align: center;
          padding: 10px;
        }

        .project-card:hover .overlay {
          opacity: 1;
        }
      `}</style>
    </>
  );
};

export default ProjectItem;
