/**
 * @copyright 2024 ayoubzokri
 * @license Apache-2.0
 */
import { motion } from "framer-motion";
import { FaGithub, FaPython, FaFlask } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const DevForumDetails = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">DevForum - Forum pour Développeurs</h1>
        
        <div className="flex gap-4 mb-8">
          <a
            href="https://github.com/Ayoubzkr/forum"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg"
          >
            <FaGithub size={20} />
            <span>Voir sur GitHub</span>
          </a>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg">
            <FaPython size={20} className="text-blue-500" />
            <span>Python</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg">
            <FaFlask size={20} className="text-green-500" />
            <span>Flask</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg">
            <SiTailwindcss size={20} className="text-cyan-500" />
            <span>Tailwind CSS</span>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="mb-6">
            DevForum est une plateforme communautaire dédiée aux développeurs, permettant de partager des questions, 
            des solutions et des expériences. Le projet utilise Flask comme backend et Tailwind CSS pour une interface 
            utilisateur moderne et responsive.
          </p>

          <h2 className="text-2xl font-bold mb-4">Démonstration</h2>
          <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full"
              controls
              src="/videos/convert.mp4"
              title="DevForum Demo"
            />
          </div>

          <h2 className="text-2xl font-bold mb-4">Fonctionnalités</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Système d'authentification complet</li>
            <li>Création et gestion de posts</li>
            <li>Système de commentaires et réponses</li>
            <li>Catégorisation des questions par langages et technologies</li>
            <li>Recherche avancée avec filtres</li>
            <li>Markdown support pour le formatage du contenu</li>
            <li>Notifications en temps réel</li>
            <li>Interface responsive et moderne</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Technologies Utilisées</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Backend: Python, Flask, SQLAlchemy</li>
            <li>Frontend: HTML, Tailwind CSS, JavaScript</li>
            <li>Base de données: PostgreSQL</li>
            <li>Authentification: Flask-Login, JWT</li>
            <li>Déploiement: Docker, Nginx</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Défis et Solutions</h2>
          <p className="mb-6">
            Le principal défi était de créer une interface utilisateur intuitive tout en maintenant les performances. 
            La solution a été d'implémenter une architecture modulaire et d'utiliser Tailwind CSS pour un design 
            cohérent et performant. L'utilisation de Flask nous a permis de développer rapidement tout en gardant 
            le code maintenable et évolutif.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default DevForumDetails; 