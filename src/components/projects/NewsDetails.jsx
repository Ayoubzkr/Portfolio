// components/projects/NewsDetails.jsx
import React from 'react';

const NewsDetails = () => {
  return (
    <section className="section bg-zinc-900 py-16">
      <div className="container">
        {/* Titre principal */}
        <h2 className="headline-1 text-white mb-4">Site de Nouvelles</h2>
        
        {/* Vidéo de démonstration */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-300 mb-4">Regardez la démo :</h3>
          <div className="relative pb-[40.25%] mb-8">
            <iframe 
              src="/videos/nouvelles.mp4" 
              title="Démo du site de nouvelles"
              className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
              allowFullScreen
            />
          </div>
        </div>

        {/* Grille de présentation : image et description */}
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Image principale */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="/images/news2.png" alt="Site de nouvelles" className="w-full h-auto object-cover" />
          </div>
          
          {/* Description et fonctionnalités */}
          <div className="text-white">
            <p className="text-lg mb-6">
              Mon projet de site de nouvelles en HTML et CSS est conçu pour afficher les actualités les plus récentes des dernières 24 heures. Il met en avant un design moderne et responsive pour offrir une expérience utilisateur optimale sur tous les appareils.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4">Technologies utilisées :</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>HTML</li>
              <li>CSS</li>
              <li>Design responsive pour une lecture optimisée sur mobile et desktop</li>
              <li>Animations CSS pour un affichage dynamique des nouvelles</li>
            </ul>
            <p className="mt-6 text-lg">
              Le site met en évidence les titres importants avec des styles attractifs, tout en maintenant une interface épurée et minimaliste pour une lecture facile.
            </p>
          </div>
        </div>

        {/* Fonctionnalités supplémentaires */}
        <div className="mt-12 text-white">
          <h3 className="text-2xl font-semibold mb-4">Fonctionnalités et avantages :</h3>
          <ul className="list-decimal pl-6 space-y-2 text-gray-300">
            <li>Affichage des nouvelles triées par date et heure</li>
            <li>Mise en évidence des titres importants avec des styles attractifs</li>
            <li>Interface entièrement responsive</li>
            <li>Design épuré et minimaliste pour une lecture facile</li>
            <li>Animation CSS pour un affichage dynamique des nouvelles</li>
          </ul>
        </div>

        {/* Galerie d'images supplémentaires */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-white mb-4">Captures d'écran du projet :</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/images/news3.png" alt="Capture d'écran 1" className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/images/news4.png" alt="Capture d'écran 2" className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/images/news5.png" alt="Capture d'écran 3" className="w-full h-auto object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetails;
