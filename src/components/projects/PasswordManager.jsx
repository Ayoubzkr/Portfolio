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

const PasswordManagerDetails = () => {
  return (
    <section className="section bg-zinc-900 py-16">
      <div className="container">
        <h6 className="headline-1 text-white mb-8 display-6">Gestionnaire de mots de passe en Java</h6>

        {/* Vidéo de démonstration */}
        <div className="flex justify-center mt-12">
          <div className="w-full max-w-3xl">
            <h3 className="text-2xl font-semibold text-gray-300 mb-4">Regardez la démonstration :</h3>
            <div className="relative pb-[56.25%] h-0 mb-8">
              <iframe 
                src="/videos/.webm" 
                title="Démonstration du gestionnaire de mots de passe"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Description et fonctionnalités */}
        <div className="space-y-8 text-white">
          <p className="text-lg mb-6">
            Ce projet est une application de gestion de mots de passe développée en Java avec une interface graphique intuitive. Il permet aux utilisateurs de stocker, gérer et générer des mots de passe sécurisés tout en protégeant leurs données grâce au chiffrement AES.
          </p>
          <h3 className="text-2xl font-semibold mt-6 mb-4">Technologies utilisées :</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Java</li>
            <li>Java Swing (pour l'interface graphique)</li>
            <li>Cryptographie AES pour sécuriser les mots de passe</li>
            <li>Stockage sécurisé des données</li>
          </ul>
          <p className="mt-4 text-lg">
            L'application est compatible avec Windows, Mac OS et Linux et propose une fonctionnalité de mot de passe principal pour sécuriser l'accès aux données stockées.
          </p>
        </div>

        {/* Fonctionnalités supplémentaires */}
        <div className="space-y-4 mt-12 text-white">
          <h3 className="text-2xl font-semibold mb-4">Fonctionnalités et avantages :</h3>
          <ul className="list-decimal pl-6 space-y-2 text-gray-300">
            <li>Stockage sécurisé des mots de passe</li>
            <li>Génération de mots de passe forts et aléatoires</li>
            <li>Mot de passe principal pour sécuriser l'accès</li>
            <li>Chiffrement et déchiffrement avec AES</li>
            <li>Interface utilisateur graphique intuitive</li>
            <li>Recherche et gestion facile des mots de passe enregistrés</li>
          </ul>
        </div>

        {/* Galerie d'images supplémentaires */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-white mt-6">Captures d'écran</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <Screenshot 
                key={n}
                src={`/images/password${n}.png`}
                alt={`Capture d'écran ${n} du gestionnaire de mots de passe`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PasswordManagerDetails;
