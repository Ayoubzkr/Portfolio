// components/projects/EducationDetails.jsx
import React from 'react';

const EducationDetails = () => {
  return (
    <section className="section bg-zinc-900 py-16">
      <div className="container">
        {/* Titre principal */}
        <h2 className="headline-1 text-white mb-4">Système de Gestion des Missions Éducatives</h2>
        
        {/* Vidéo de démonstration */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-300 mb-4">Regardez la démo :</h3>
          <div className="relative pb-[40.25%] mb-8">
            <iframe 
              src="/videos/atm.webm" 
              title="Démo du système de gestion éducative"
              className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
              allowFullScreen
            />
          </div>
        </div>

        {/* Grille de présentation : image et description */}
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Image principale */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="/images/edu2.png" alt="Système de gestion des missions éducatives" className="w-full h-auto object-cover" />
          </div>
          
          {/* Description et fonctionnalités */}
          <div className="text-white">
            <p className="text-lg mb-6">
              Le système de gestion des missions éducatives est une plateforme PHP qui permet de gérer les différentes entités du système éducatif. Vous pouvez ajouter, supprimer, et gérer des professeurs, des écoles, des devoirs, des examens, des étudiants, des groupes, et même gérer les paiements associés. L'interface est simple, intuitive, et permet de suivre les missions éducatives de manière efficace.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4">Technologies utilisées :</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>PHP</li>
              <li>MySQL</li>
              <li>HTML/CSS/JavaScript</li>
              <li>Gestion des utilisateurs et authentification</li>
              <li>Système de notification et de gestion des paiements</li>
            </ul>
            <p className="mt-6 text-lg">
              Ce projet permet aux administrateurs et enseignants de gérer toutes les tâches administratives et pédagogiques d'une institution éducative, en assurant une gestion fluide et sans erreur des différentes missions éducatives.
            </p>
          </div>
        </div>

        {/* Fonctionnalités supplémentaires */}
        <div className="mt-12 text-white">
          <h3 className="text-2xl font-semibold mb-4">Fonctionnalités et avantages :</h3>
          <ul className="list-decimal pl-6 space-y-2 text-gray-300">
            <li>Gestion des professeurs, écoles, et groupes d'étudiants</li>
            <li>Ajout, modification, et suppression des devoirs et examens</li>
            <li>Gestion des paiements pour les étudiants et génération des factures</li>
            <li>Suivi en temps réel de l'état des missions éducatives et de la progression des étudiants</li>
            <li>Interface conviviale pour une gestion centralisée et rapide</li>
          </ul>
        </div>

        {/* Galerie d'images supplémentaires */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-white mb-4">Captures d'écran du projet :</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/images/edu1.png" alt="Capture d'écran 1" className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/images/edu3.png" alt="Capture d'écran 2" className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/images/edu4.png" alt="Capture d'écran 3" className="w-full h-auto object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationDetails;
