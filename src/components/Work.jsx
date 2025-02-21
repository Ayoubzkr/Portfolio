/**
 * @copyright 2024 ayoubzokri
 * @license Apache-2.0
 */
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'Un système de gestion du guichet automatique',
    tags: ['C#', 'Finance', 'Development'],
    projectLink: '/projects/atm-management'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'CABDTR : gestion de cabinet dentaire',
    tags: ['VB.NET', 'CRUD', 'Desktop Application'],
    projectLink: '/projects/dental-cabinet-management'
  },
  {
    imgSrc: '/images/project-3.jpg',
    title: 'Gestion intégrée pour les cabinets des opticiens',
    tags: ['PHP', 'CRUD', 'Printing'],
    projectLink: '/projects/optician-management'
  },
  {
    imgSrc: '/images/project-4.jpg',
    title: 'Gestion des tâches ou missions éducatives',
    tags: ['PHP', 'Education', 'CRUD', 'Printing'],
    projectLink: '/projects/educational-task-management'
  },
  {
    imgSrc: '/images/project-5.jpg',
    title: 'Tic Tac Toe Game',
    tags: ['Java', 'Game Development'],
    projectLink: '/projects/tic-tac-toe-game'
  },{
    imgSrc: '/images/project-8.png',
    title: 'Gestionnaire de Mots de Passe',
    tags: ['Java', 'Java Application'],
    projectLink: '/projects/password-manager'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'Site Web Nouvelle',
    tags: ['HTML', 'CSS', 'Web Design'],
    projectLink: '/projects/news-updates'
  },
  {
    imgSrc: '/images/project-7.png',
  title: 'Convertisseur de fichies texte en SQL',
  tags: ['C#', 'Development'],
  projectLink: '/projects/convert-text-to-sql'
  },
];

const Work = () => {
  return (
    <motion.section 
      className="section" 
      id="work"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.h2 
          className="headline-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Mes réalisations
        </motion.h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <motion.div 
              key={key}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: key * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Work;