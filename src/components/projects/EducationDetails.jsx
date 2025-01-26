// components/projects/ATMProjectDetails.jsx
import React from 'react';
const Screenshot = ({ src, alt }) => (
  <div className="relative aspect-video bg-zinc-800 rounded-xl overflow-hidden hover:scale-105 transition-all">
    <img 
      src={src} 
      alt={alt}
      className="w-full h-full object-cover hover:opacity-90 transition-opacity"
    />
  </div>
);
const ATMProjectDetails = () => {
  return (
    <section className="section bg-zinc-900 py-16">
      <div className="container">
        <h6 className="headline-1 text-white mb-8 display-6">Système de Gestion des Missions Éducatives</h6>

        {/* Vidéo de démonstration */}
        <div className="flex justify-center mt-12">
          <div className="w-full max-w-3xl">
            <h3 className="text-2xl font-semibold text-gray-300 mb-4">Regardez la démonstration :</h3>
            <div className="relative pb-[56.25%] h-0 mb-8">
              <iframe 
                src="/videos/edutasker.mp4" 
                title="Démo du système de gestion éducative"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                allowFullScreen
              />
            </div>
          </div>
        </div>
          {/* Description et fonctionnalités */}
          <div className="space-y-8 text-white">
            <p className="text-lg mb-6">
            Le système de gestion des missions éducatives est une plateforme PHP qui permet de gérer les différentes entités du système éducatif. Vous pouvez ajouter, supprimer, et gérer des professeurs, des écoles, des devoirs, des examens, des étudiants, des groupes, et même gérer les paiements associés. L'interface est simple, intuitive, et permet de suivre les missions éducatives de manière efficace.            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4">Technologies utilisées :</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>PHP</li>
              <li>MySQL</li>
              <li>HTML/CSS/JavaScript</li>
              <li>Gestion des utilisateurs et authentification</li>
              <li>Système de notification et de gestion des paiements</li>
            </ul>
            <p className="mt-4 text-lg">
            Ce projet permet aux administrateurs et enseignants de gérer toutes les tâches administratives et pédagogiques d'une institution éducative, en assurant une gestion fluide et sans erreur des différentes missions éducatives.
            </p>
          </div>

        {/* Fonctionnalités supplémentaires */}
        <div className="space-y-4 mt-12 text-white">
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
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-white mt-6">Captures d'écran</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[2, 3,1].map((n) => (
              <Screenshot 
                key={n}
                src={`/images/edu${n}.png`}
                alt={`Capture d'écran ${n} du système OPTIRENT`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ATMProjectDetails;
