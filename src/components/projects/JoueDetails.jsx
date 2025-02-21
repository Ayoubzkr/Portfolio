// components/projects/JoueDetails.jsx
import React from 'react';

const JoueDetails = () => {
  return (
    <section className="section bg-zinc-900 py-16">
      <div className="container">
        {/* Titre principal */}
        <h2 className="headline-1 text-white mb-4">Tic Tac Toe en Java</h2>
        
        {/* Vidéo de démonstration */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-300 mb-4">Regardez la démo :</h3>
          <div className="relative pb-[40.25%] mb-8">
            <iframe 
              src="/videos/.webm" 
              title="Démo du jeu Tic Tac Toe"
              className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
              allowFullScreen
            />
          </div>
        </div>

        {/* Grille de présentation : image et description */}
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Image principale */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="/images/tic4.png" alt="Jeu Tic Tac Toe" className="w-full h-auto object-cover" />
          </div>
          
          {/* Description et fonctionnalités */}
          <div className="text-white">
            <p className="text-lg mb-6">
              Mon projet Tic Tac Toe en Java est un jeu interactif permettant à deux joueurs de s'affronter dans une grille 3x3. Le jeu vérifie automatiquement les conditions de victoire et affiche "Win" lorsqu'un joueur remporte la partie. L'interface est simple et permet de jouer en mode joueur contre joueur.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4">Technologies utilisées :</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Java</li>
              <li>Swing (pour l'interface graphique)</li>
              <li>Gestion de la logique de jeu et des conditions de victoire</li>
              <li>Détection automatique des alignements horizontal, vertical et diagonal</li>
            </ul>
            <p className="mt-6 text-lg">
              Ce projet est conçu pour offrir une expérience de jeu fluide et rapide, avec des fonctionnalités telles que la réinitialisation du jeu et l'affichage du message de victoire lorsque l'un des joueurs gagne.
            </p>
          </div>
        </div>

        {/* Fonctionnalités supplémentaires */}
        <div className="mt-12 text-white">
          <h3 className="text-2xl font-semibold mb-4">Fonctionnalités et avantages :</h3>
          <ul className="list-decimal pl-6 space-y-2 text-gray-300">
            <li>Grille 3x3 pour jouer au Tic Tac Toe</li>
            <li>Deux modes : joueur contre joueur</li>
            <li>Détection automatique des conditions de victoire (horizontal, vertical, diagonal)</li>
            <li>Affichage du message "Win" pour le gagnant</li>
            <li>Option de réinitialisation pour rejouer rapidement</li>
            <li>Interface utilisateur simple et conviviale avec Swing</li>
          </ul>
        </div>

        {/* Galerie d'images supplémentaires */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-white mb-4">Captures d'écran du projet :</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/images/tic1.png" alt="Capture d'écran 1" className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/images/tic2.png" alt="Capture d'écran 2" className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/images/tic3.png" alt="Capture d'écran 3" className="w-full h-auto object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoueDetails;
