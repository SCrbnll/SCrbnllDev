import React from 'react';
import technologies from '../assets/technologies.json';

interface TechIconsProps {
  techList: string[];
}

const TechIcons: React.FC<TechIconsProps> = ({ techList }) => {
  const generateBadgeUrl = (tech: string, color: string, icon: string) =>
    `https://img.shields.io/badge/${encodeURIComponent(
      tech
    )}-${color}?logo=${encodeURIComponent(
        icon.toLowerCase()
    )}&logoColor=white&style=flat`;

  return (
    <div className="d-flex flex-wrap">
      {techList.map((tech) => {
        const techData = technologies.find(
          (t) => t.name.toLowerCase() === tech.toLowerCase()
        );

        return techData ? (
          <div key={tech} className="text-center me-2">
            <img
              src={generateBadgeUrl(techData.name, techData.color, techData.icon)}
              alt={techData.name}
              width="auto"
            />
          </div>
        ) : (
          <div key={tech} className="text-white">
            Icono no encontrado
          </div>
        );
      })}
    </div>
  );
};

export default TechIcons;
