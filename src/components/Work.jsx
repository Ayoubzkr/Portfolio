/**
 * @copyright 2024 ayoubzokri
 * @license Apache-2.0
 */
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { lazy, Suspense } from 'react';
import { FaGithub } from 'react-icons/fa';
import CarpoolingPlatformDetails from "./projects/CarpoolingPlatformDetails";

const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'Un système de gestion du guichet automatique',
    tags: ['C', 'Finance', 'Development'],
    projectLink: '/projects/atm-management',
    githubLink: 'https://github.com/yourusername/atm-management'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'CABDTR : gestion de cabinet dentaire',
    tags: ['VB.NET', 'CRUD', 'Desktop Application'],
    projectLink: '/projects/dental-cabinet-management',
    githubLink: 'https://github.com/yourusername/dental-cabinet'
  },
  {
    imgSrc: '/images/project-3.jpg',
    title: 'Gestion intégrée pour les cabinets des opticiens',
    tags: ['PHP', 'CRUD', 'Printing'],
    projectLink: '/projects/optician-management',
    githubLink: 'https://github.com/yourusername/optician-management'
  },
  {
    imgSrc: '/images/project-4.jpg',
    title: 'Gestion des tâches ou missions éducatives',
    tags: ['PHP', 'Education', 'CRUD', 'Printing'],
    projectLink: '/projects/educational-task-management',
    githubLink: 'https://github.com/yourusername/educational-tasks'
  },
  {
    imgSrc: '/images/project-5.jpg',
    title: 'Tic Tac Toe Game',
    tags: ['Java', 'Game Development'],
    projectLink: '/projects/tic-tac-toe-game',
    githubLink: 'https://github.com/yourusername/tic-tac-toe'
  },
  {
    imgSrc: '/images/project-8.png',
    title: 'Gestionnaire de Mots de Passe',
    tags: ['Java', 'Java Application'],
    projectLink: '/projects/password-manager',
    githubLink: 'https://github.com/yourusername/password-manager'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'Site Web Nouvelle',
    tags: ['HTML', 'CSS', 'Web Design'],
    projectLink: '/projects/news-updates',
    githubLink: 'https://github.com/yourusername/news-website'
  },
  {
    imgSrc: '/images/project-7.png',
    title: 'Convertisseur de fichies texte en SQL',
    tags: ['C', 'Development'],
    projectLink: '/projects/convert-text-to-sql',
    githubLink: 'https://github.com/yourusername/text-to-sql-converter'
  },
  {
    imgSrc: '/images/forum.avif',
    title: 'DevForum - Forum pour Développeurs',
    tags: ['Python', 'Flask', 'Tailwind CSS', 'Web Development'],
    projectLink: '/projects/dev-forum',
    githubLink: 'https://github.com/Ayoubzkr/forum'
  },
  {
    imgSrc: '/images/AKDITAl.png',
    title: 'AKDITAL - Application Médicale',
    tags: ['Java', 'Spring Boot', 'React', 'Tailwind CSS', 'Full Stack'],
    projectLink: '/projects/medibook',
    githubLink: 'https://github.com/Ayoubzkr/application_medical/'
  },
  {
    imgSrc: '/images/logoagc.png',
    title: 'AGC - Gestion de Stock',
    tags: ['C#', '.NET', 'Desktop Application', 'Database'],
    projectLink: '/projects/stock-master',
    githubLink: 'https://github.com/Ayoubzkr/'
  },
  {
    imgSrc: '/images/cotrajets.png',
    title: 'Plateforme Web de Gestion de Covoiturage',
    tags: ['React', 'Laravel', 'SQL', 'Web App'],
    projectLink: '/projects/carpooling-platform',
    githubLink: 'https://github.com/Ayoubzkr/cotrajets'
  }
];
const Work = () => {
  return (
    <motion.section 
      className="section" 
      id="work"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, margin: "-200px" }}
    >
      <div className="container">
        <motion.h2 
          className="headline-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          Mes réalisations
        </motion.h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink, githubLink }, key) => (
            <motion.div 
              key={key}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: key * 0.03 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Suspense fallback={<div className="w-full h-48 bg-zinc-800 animate-pulse rounded-lg" />}>
                <ProjectCard 
                  imgSrc={imgSrc} 
                  title={title} 
                  tags={tags} 
                  projectLink={projectLink}
                  githubLink={githubLink}
                />
              </Suspense>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
export default Work;