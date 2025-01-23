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
        <h6 className="headline-1 text-white mb-8 display-6">Dental Cabinet Management System</h6>

        {/* Vidéo de démonstration */}
        <div className="flex justify-center mt-12">
          <div className="w-full max-w-3xl">
            <h3 className="text-2xl font-semibold text-gray-300 mb-4">Regardez la démonstration :</h3>
            <div className="relative pb-[56.25%] h-0 mb-8">
              <iframe 
                src="/videos/cabdtr.mp4" 
                title="Démonstration du système cabinet dentaire"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                allowFullScreen
              />
            </div>
          </div>
        </div>
          {/* Description et fonctionnalités */}
          <div className="space-y-8 text-white">
            <p className="text-lg mb-6">
            Le système de gestion de cabinet dentaire est un logiciel développé en Visual Basic .NET pour aider à gérer les opérations courantes d'un cabinet dentaire. Il facilite la gestion des rendez-vous, des dossiers des patients, des traitements et de la facturation, tout en offrant une interface conviviale.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4">Technologies utilisées :</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Visual Basic .NET</li>
              <li>Sécurité avancée pour les transactions</li>
              <li>MYSQL Server</li>
            </ul>
            <p className="mt-4 text-lg">
            Ce projet est conçu pour offrir une gestion complète et centralisée des opérations quotidiennes dans un cabinet dentaire, permettant ainsi aux praticiens de se concentrer sur les soins des patients tout en simplifiant l’administration.
            </p>
          </div>

        {/* Fonctionnalités supplémentaires */}
        <div className="space-y-4 mt-12 text-white">
          <h3 className="text-2xl font-semibold mb-4">Fonctionnalités et avantages :</h3>
          <ul className="list-decimal pl-6 space-y-2 text-gray-300">
          <li>Gestion des rendez-vous et planification des consultations</li>
            <li>Gestion des dossiers des patients avec informations médicales et personnelles</li>
            <li>Suivi des traitements et soins effectués</li>
            <li>Gestion de la facturation et génération de factures</li>
            <li>Rapports et statistiques sur les performances du cabinet</li>
            <li>Interface conviviale et intuitive pour faciliter l’utilisation quotidienne</li>
          </ul>
        </div>

        {/* Galerie d'images supplémentaires */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-white mt-6">Captures d'écran</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <Screenshot 
                key={n}
                src={`/images/vb${n}.png`}
                alt={`Capture d'écran ${n} du système CABDTR`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ATMProjectDetails;
