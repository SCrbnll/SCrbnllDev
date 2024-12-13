import React from 'react';
import skillsData from '../assets/skills.json';

const Skills: React.FC = () => {
  return (
    <div className="container text-white py-5" id="skills">
      <h2 className="mx-3 mx-md-0 my-3 my-md-5">Skills</h2>
      <div className="row mx-3 mx-md-0">
        {skillsData.map((category, index) => (
          <div key={index} className="col-12 col-md-4 mb-5">
            <h4>{category.category}</h4>
            <div className="row">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="col-2 col-md-2 col-lg-2 mx-0 mx-md-1 mx-lg-0 text-center skill-item mb-3">
                  <img
                    alt={skill.name}
                    src={skill.icon}
                    height="40"
                    style={{ width: 'auto', height: '40px' }}
                  />
                  <span className="skill-tooltip">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .skill-item {
          position: relative;
          display: inline-block;
        }

        .skill-tooltip {
          visibility: hidden;
          width: 120px;
          background-color: rgba(0, 0, 0, 0.7);
          color: #fff;
          text-align: center;
          border-radius: 5px;
          padding: 5px;
          position: absolute;
          top: 120%;
          left: 50%;
          margin-left: -60px;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .skill-item:hover .skill-tooltip {
          visibility: visible;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Skills;
