// components/projects/OpticianDetails.jsx
import React from 'react';

const OpticianDetails = () => {
  return (
    <section className="section bg-zinc-900 py-16">
      <div className="container">
        {/* Titre principal */}
        <h2 className="headline-1 text-white mb-8">Système de Gestion pour Cabinet d'Opticien</h2>

        {/* Vidéo de démonstration */}
        <div className="flex justify-center mt-12">
          <div className="w-full max-w-3xl">
            <h3 className="text-2xl font-semibold text-gray-300 mb-4">Regardez la démonstration :</h3>
            <div className="relative pb-[56.25%] h-0 mb-8">
              <iframe 
                src="/videos/atm.webm" 
                title="Démonstration du système de gestion du cabinet d'opticien"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Grille de présentation : image et description */}
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Image principale */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="/images/optir1.png" alt="Système de gestion de cabinet d'opticien" className="w-full h-auto object-contain" />
          </div>

          {/* Description et fonctionnalités */}
          <div className="text-white">
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
            <p className="mt-6 text-lg">
              Ce projet permet aux opticiens de gérer facilement les informations relatives aux patients, les consultations et les commandes de lunettes, tout en assurant un suivi complet des paiements et des factures.
            </p>
          </div>
        </div>

        {/* Fonctionnalités supplémentaires */}
        <div className="mt-12 text-white">
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
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-white mb-4">Captures d'écran du projet :</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className=" rounded-lg overflow-hidden shadow-lg">
              <img src="/images/optir2.png" alt="Capture d'écran 1" className="w-full h-auto object-contain rounded-lg" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/images/optir3.png" alt="Capture d'écran 2" className="w-full h-auto object-contain rounded-lg" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/images/optir4.png" alt="Capture d'écran 3" className="w-full h-auto object-contain rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpticianDetails;
