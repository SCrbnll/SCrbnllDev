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
      <div className="col-6 col-md-3 col-lg-4 mb-4">
        <div className="card h-100" onClick={handleShow} style={{ cursor: 'pointer' }}>
          {imgUrl && (
            <img src={imgUrl} alt={title} className="card-img-top" style={{ objectFit: 'cover', height: '200px' }} />
          )}
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
    </>
  );
};

export default ProjectItem;
