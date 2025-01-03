// components/projects/DentalCabinetDetails.jsx
import React from 'react';

const DentalCabinetDetails = () => {
  return (
    <section className="section bg-zinc-900 py-16">
      <div className="container">
        {/* Titre principal */}
        <h2 className="headline-1 text-white mb-4">Dental Cabinet Management System</h2>
        
        {/* Vidéo de démonstration */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-300 mb-4">Regardez la démo :</h3>
          <div className="relative pb-[40.25%] mb-8">
            <iframe 
              src="/videos/atm.webm" 
              title="Démo du système de gestion de cabinet dentaire"
              className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
              allowFullScreen
            />
          </div>
        </div>

        {/* Grille de présentation : image et description */}
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Image principale */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="/images/cab1.png" alt="Système de gestion de cabinet dentaire" className="w-full h-auto object-cover" />
          </div>
          
          {/* Description et fonctionnalités */}
          <div className="text-white">
            <p className="text-lg mb-6">
              Le système de gestion de cabinet dentaire est un logiciel développé en Visual Basic .NET pour aider à gérer les opérations courantes d'un cabinet dentaire. Il facilite la gestion des rendez-vous, des dossiers des patients, des traitements et de la facturation, tout en offrant une interface conviviale.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4">Technologies utilisées :</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Visual Basic .NET</li>
              <li>SQL Server</li>
              <li>Windows Forms</li>
              <li>Gestion de la base de données SQL</li>
            </ul>
            <p className="mt-6 text-lg">
              Ce projet est conçu pour offrir une gestion complète et centralisée des opérations quotidiennes dans un cabinet dentaire, permettant ainsi aux praticiens de se concentrer sur les soins des patients tout en simplifiant l’administration.
            </p>
          </div>
        </div>

        {/* Fonctionnalités supplémentaires */}
        <div className="mt-12 text-white">
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
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-white mb-4">Captures d'écran du projet :</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/images/vb1.png" alt="Capture d'écran 1" className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/images/vb2.png" alt="Capture d'écran 2" className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/images/vb3.png" alt="Capture d'écran 3" className="w-full h-auto object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalCabinetDetails;
