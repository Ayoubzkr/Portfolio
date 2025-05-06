/**
 * @copyright 2024 ayoubzokri
 * @license Apache-2.0
 */
import { motion } from "framer-motion";
import { FaGithub, FaJava, FaReact } from 'react-icons/fa';
import { SiSpringboot, SiTailwindcss } from 'react-icons/si';

const MediBookDetails = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">MediBook - Application Médicale</h1>
        
        <div className="flex gap-4 mb-8">
          <a
            href="https://github.com/Ayoubzkr/application_medical/"
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
            <FaJava size={20} className="text-red-500" />
            <span>Java</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg">
            <SiSpringboot size={20} className="text-green-500" />
            <span>Spring Boot</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg">
            <FaReact size={20} className="text-blue-500" />
            <span>React</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg">
            <SiTailwindcss size={20} className="text-cyan-500" />
            <span>Tailwind CSS</span>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="mb-6">
            AKDITAL est une application médicale complète qui permet aux patients de prendre rendez-vous en ligne 
            avec leurs médecins. L'application comprend trois interfaces distinctes : patient, médecin et administrateur, 
            chacune avec ses fonctionnalités spécifiques.
          </p>

          <h2 className="text-2xl font-bold mb-4">Démonstration</h2>
          <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full"
              controls
              src="/videos/convert.mp4"
              title="MediBook Demo"
            />
          </div>

          <h2 className="text-2xl font-bold mb-4">Fonctionnalités</h2>
          <h3 className="text-xl font-bold mb-2">Interface Patient</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Inscription et authentification</li>
            <li>Recherche de médecins par spécialité</li>
            <li>Prise de rendez-vous en ligne</li>
            <li>Historique des rendez-vous</li>
            <li>Notifications par email</li>
          </ul>

          <h3 className="text-xl font-bold mb-2">Interface Médecin</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Gestion du calendrier de rendez-vous</li>
            <li>Historique des patients</li>
            <li>Notes médicales</li>
            <li>Statistiques de consultation</li>
          </ul>

          <h3 className="text-xl font-bold mb-2">Interface Administrateur</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Gestion des médecins et des spécialités</li>
            <li>Statistiques globales</li>
            <li>Gestion des utilisateurs</li>
            <li>Configuration du système</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Technologies Utilisées</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Backend: Java, Spring Boot, Spring Security</li>
            <li>Frontend: React, Tailwind CSS, Redux</li>
            <li>Base de données: PostgreSQL</li>
            <li>Authentification: JWT, OAuth2</li>
            <li>API: RESTful, Swagger</li>
            <li>Déploiement: Docker, AWS</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Défis et Solutions</h2>
          <p className="mb-6">
            Le principal défi était de créer une architecture robuste et sécurisée tout en maintenant une expérience 
            utilisateur fluide. La solution a été d'implémenter une architecture microservices avec Spring Boot pour 
            le backend et une application React moderne pour le frontend. L'utilisation de JWT et Spring Security 
            a permis de garantir la sécurité des données sensibles.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MediBookDetails; 