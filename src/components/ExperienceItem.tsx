import { useState } from 'react';

interface ExperienceItemProps {
  job: string;
  company: string;
  date: string;
  description: string;}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  job,
  company,
  date,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="mb-4 d-flex position-relative">
      <div
        className="position-absolute top-0 start-0 bottom-0 mx-2 mx-md-0 border-start border-2"
        style={{ borderColor: '#616161' }}
      ></div>

      {/* Icono de maleta */}
      <div
        className="position-absolute ms-3 ms-md-3"
        style={{ cursor: 'pointer' }}
        onClick={handleToggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="20"
          height="20"
          style={{
            fill: '#ffffff',
          }}
        >
          <path d="M176 56l0 40 160 0 0-40c0-4.4-3.6-8-8-8L184 48c-4.4 0-8 3.6-8 8zM128 96l0-40c0-30.9 25.1-56 56-56L328 0c30.9 0 56 25.1 56 56l0 40 0 32 0 352-256 0 0-352 0-32zM64 96l32 0 0 384-32 0c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64zM448 480l-32 0 0-384 32 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64z"/>
        </svg>
      </div>

      <div className="ms-5">
        <h3 className=" h5 text-warning">{job}</h3>
        <h4 className="h6 text-white">Empresa: {company}</h4>

        <div className={`collapse ${isOpen ? 'show' : ''}`}>
        <time className="text-white d-block mb-2" style={{ fontSize: '14px' }}>{date}</time>
          <p className="text-light" style={{ textWrap: 'balance'}}>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default ExperienceItem;
