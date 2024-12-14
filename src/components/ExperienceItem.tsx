import { useState } from 'react';

interface ExperienceItemProps {
  job: string;
  company: string;
  date: string;
  description: string;
}

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

      <div
        className="position-absolute ms-3 ms-md-3"
        style={{ cursor: 'pointer' }}
        onClick={handleToggle}
      >
        <span
          className={`material-icons`}
          style={{
            fontSize: '30px',
            transition: 'transform 0.3s ease-in-out',
            transform: isOpen ? 'rotate(360deg)' : 'rotate(270deg)',
          }}
        >
          arrow_drop_down_circle
        </span>
      </div>

      <div className="ms-5">
        <h3 className="h5">{job}</h3>
        <h4 className="h6 text-white">{date}</h4>

        <div className={`collapse ${isOpen ? 'show' : ''}`}>
          <time className="d-block mb-2" style={{ fontSize: '14px' }}>
            <b>{company}</b>
          </time>
          <p className="text-light" style={{ textWrap: 'balance' }}>
            {description}
          </p>
        </div>
      </div>
    </li>
  );
};

export default ExperienceItem;
