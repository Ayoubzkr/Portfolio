/**
 * @copyright 2024 ayoubzokri
 * @license Apache-2.0
 */
import { motion } from "framer-motion";
import { FaGithub, FaReact, FaLaravel, FaDatabase } from 'react-icons/fa';
const CarpoolingPlatformDetails = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Plateforme Web de Gestion de Covoiturage</h1>
        <div className="flex gap-4 mb-8">
          <a
            href="https://github.com/yourusername/carpooling-platform"
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
            <FaReact size={20} className="text-blue-400" />
            <span>React</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg">
            <FaLaravel size={20} className="text-red-500" />
            <span>Laravel</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg">
            <FaDatabase size={20} className="text-yellow-500" />
            <span>SQL</span>
          </div>
        </div>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="mb-6">
            Cette plateforme web de gestion de covoiturage permet aux utilisateurs de proposer, rechercher et réserver des trajets en toute simplicité. Elle vise à faciliter le partage de trajets entre particuliers, optimiser les déplacements et réduire l'empreinte carbone. L'application offre une interface moderne et intuitive, développée en React pour le front-end et Laravel pour le back-end, avec une base de données SQL pour la gestion des informations.
          </p>
          <h2 className="text-2xl font-bold mb-4">Fonctionnalités</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Création et gestion de trajets par les conducteurs</li>
            <li>Recherche de trajets disponibles par les passagers</li>
            <li>Réservation en ligne et gestion des demandes</li>
            <li>Messagerie intégrée entre conducteurs et passagers</li>
            <li>Gestion des profils utilisateurs et des avis</li>
            <li>Tableau de bord personnalisé pour chaque utilisateur</li>
            <li>Système de notifications pour les réservations et messages</li>
            <li>Interface responsive adaptée à tous les supports</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Technologies Utilisées</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Front-end : React.js</li>
            <li>Back-end : Laravel (PHP)</li>
            <li>Base de données : MySQL</li>
            <li>Authentification sécurisée</li>
            <li>API RESTful</li>
            <li>Gestion des notifications en temps réel</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Galerie d'images</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <img src="/images/cotrajets.png" alt="Accueil plateforme covoiturage" className="rounded-lg shadow-lg" />
            <img src="/images/conv1.png" alt="Liste des trajets" className="rounded-lg shadow-lg" />
            <img src="/images/conv2.png" alt="Réservation d'un trajet" className="rounded-lg shadow-lg" />
            <img src="/images/conv3.png" alt="Profil utilisateur" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default CarpoolingPlatformDetails;