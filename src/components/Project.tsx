import React from 'react';
import ProjectItem from './ProjectItem';  // Importa el componente ProjectItem

const projects = [
        {
            title: 'RoadBeat',
            technologies: ['Expo', 'JavaScript', 'Java', 'Spring Framework', 'Hibernate', 'Node.js'],
            description: 'Proximamente...',
        },
        {
            title: 'Porfolio',
            technologies: ['React', 'JavaScript', 'Tailwind CSS'],
            description: 'Este mismo Porfolio que estás visualizando está desarrollado en React. Desarrollado desde cero como un proyecto ' + 
            'de aprendizaje, ofrece una experiencia intuitiva y atractiva para los visitantes. Muestra mi experiencia y proyectos de manera sencilla y eficiente',
            githubUrl: 'https://github.com/SCrbnll/SCrbnllDev/',
            imgUrl: 'https://raw.githubusercontent.com/SCrbnll/SCrbnllDev/main/porfolio.png'
        },
        {
            title: 'Pokédex',
            technologies: ['Angular', 'TypeScript'],
            description: 'Una Pokédex web para explorar y aprender sobre Pokémon. Desarrollada con Angular y conectada a la API gratuita de PokeApi. ' + 
            'Interfaz intuitiva para buscar, filtrar y descubrir información detallada sobre los Pokémon.',
            githubUrl: 'https://github.com/SCrbnll/Pokedex/',
            previewUrl: 'https://scrbnll-pokedex.netlify.app/',
            imgUrl: 'https://raw.githubusercontent.com/SCrbnll/Pokedex/main/pokedex.png',
        },
        {
            title: 'Knight Fate',
            technologies: ['Unity', 'C#'],
            description: 'Knight Fate: un juego de aventuras Pixelart en Unity. Embárcate en la épica travesía de un caballero atrapado en una mazmorra.' + 
            ' Supera desafíos, resuelve enigmas y derrota enemigos para encontrar la salida y asegurar tu libertad. ¿Tienes lo necesario para forjar tu destino ' + 
            'como un verdadero héroe?',
            githubUrl: 'https://github.com/SCrbnll/KnightFate/',
            previewUrl: 'https://youtu.be/rqjld6bgV-k',
            imgUrl: 'https://raw.githubusercontent.com/SCrbnll/KnightFate/main/knight_fate.png'
        },
    
    ];

const Projects: React.FC = () => {
  return (
    <div className="container text-white py-5" id='projects'>
      <h2 className="mx-3 mx-md-0 my-5">Mis Proyectos</h2>
      <div className="row">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            imgUrl={project.imgUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
