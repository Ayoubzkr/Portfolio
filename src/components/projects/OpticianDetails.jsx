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
        <h6 className="headline-1 text-white mb-8 display-6">Système de Gestion pour Cabinet d'Opticien</h6>

        {/* Vidéo de démonstration */}
        <div className="flex justify-center mt-12">
          <div className="w-full max-w-3xl">
            <h3 className="text-2xl font-semibold text-gray-300 mb-4">Regardez la démonstration :</h3>
            <div className="relative pb-[56.25%] h-0 mb-8">
              <iframe 
                src="/videos/optirent1.mp4" 
                title="Démonstration du système de gestion du cabinet d'opticien"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                allowFullScreen
              />
            </div>
          </div>
        </div>
          {/* Description et fonctionnalités */}
          <div className="space-y-8 text-white">
            <p className="text-lg mb-6">
            Mon projet de gestion de cabinet optique en PHP est une application web complète qui permet de gérer les données des patients, les consultations, et les commandes de lunettes. Il facilite également le suivi des paiements et la gestion des factures avec une interface simple et intuitive.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4">Technologies utilisées :</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>PHP</li>
              <li>MySQL</li>
              <li>HTML/CSS/JavaScript</li>
              <li>Base de données sécurisée pour la gestion des informations des patients et des commandes</li>
            </ul>
            <p className="mt-4 text-lg">
            Ce projet permet aux opticiens de gérer facilement les informations relatives aux patients, les consultations et les commandes de lunettes, tout en assurant un suivi complet des paiements et des factures.
            </p>
          </div>

        {/* Fonctionnalités supplémentaires */}
        <div className="space-y-4 mt-12 text-white">
          <h3 className="text-2xl font-semibold mb-4">Fonctionnalités et avantages :</h3>
          <ul className="list-decimal pl-6 space-y-2 text-gray-300">
          <li>Gestion des patients : ajout, affichage et mise à jour des informations des patients</li>
            <li>Suivi des consultations : enregistrement et gestion des consultations et traitements</li>
            <li>Gestion des commandes : suivi des commandes de lunettes et des paiements associés</li>
            <li>Émission des factures : génération automatique des factures après consultation ou commande</li>
            <li>Interface conviviale pour une gestion facile et rapide des données du cabinet</li>
          </ul>
        </div>

        {/* Galerie d'images supplémentaires */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-white mt-6">Captures d'écran</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[3, 1, 2].map((n) => (
              <Screenshot 
                key={n}
                src={`/images/optir${n}.png`}
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
