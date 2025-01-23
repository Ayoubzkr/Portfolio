/**
 * @copyright 2024 ayoubzokri
 * @license Apache-2.0
 */
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

const Work=()=>{
    return(
        <section className="section" id="work">
            <div className="container">
                <h2 className="headline-2 mb-8 ">
                Mes réalisations
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({imgSrc,title,tags,projectLink},key)=>(
                        <ProjectCard
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Work