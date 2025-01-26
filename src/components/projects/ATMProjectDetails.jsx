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
        <h6 className="headline-1 text-white mb-8 display-6">Système de Gestion des Guichets Automatiques (ATM)</h6>

        {/* Vidéo de démonstration */}
        <div className="flex justify-center mt-12">
          <div className="w-full max-w-3xl">
            <h3 className="text-2xl font-semibold text-gray-300 mb-4">Regardez la démonstration :</h3>
            <div className="relative pb-[56.25%] h-0 mb-8">
              <iframe 
                src="/videos/ATM.mp4" 
                title="Démonstration du système de gestion ATM"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                allowFullScreen
              />
            </div>
          </div>
        </div>
          {/* Description et fonctionnalités */}
          <div className="space-y-8 text-white">
            <p className="text-lg mb-6">
              Mon projet ATM en langage C est un système complet de gestion des guichets automatiques. Il permet aux utilisateurs de gérer leurs transactions bancaires, notamment les retraits, dépôts, virements et consultations de solde, tout en garantissant une sécurité avancée.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4">Technologies utilisées :</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Langage C</li>
              <li>Sécurité avancée pour les transactions</li>
              <li>Gestion efficace des données utilisateur</li>
              <li>Support multi-utilisateurs</li>
            </ul>
            <p className="mt-4 text-lg">
              Ce projet est conçu pour être robuste et sécurisé, offrant une gestion fluide des transactions et des fonctionnalités pour garantir une expérience utilisateur optimale.
            </p>
          </div>

        {/* Fonctionnalités supplémentaires */}
        <div className="space-y-4 mt-12 text-white">
          <h3 className="text-2xl font-semibold mb-4">Fonctionnalités et avantages :</h3>
          <ul className="list-decimal pl-6 space-y-2 text-gray-300">
            <li>Retraits d'argent rapides et sécurisés</li>
            <li>Dépôts d'argent avec enregistrement des transactions</li>
            <li>Consultation instantanée du solde</li>
            <li>Virements bancaires simples et fiables</li>
            <li>Protection avancée contre les accès non autorisés</li>
          </ul>
        </div>

        {/* Galerie d'images supplémentaires */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-white mt-6">Captures d'écran</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <Screenshot 
                key={n}
                src={`/images/execution${n}.png`}
                alt={`Capture d'écran ${n} du système ATM`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ATMProjectDetails;
