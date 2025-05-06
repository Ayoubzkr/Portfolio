/**
 * @copyright 2024 ayoubzokri
 * @license Apache-2.0
 */
import { motion } from "framer-motion";
import { FaGithub, FaDatabase, FaCode } from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si';

const StockMasterDetails = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">StockMaster - Gestion de Stock</h1>
        
        <div className="flex gap-4 mb-8">
          <a
            href="https://github.com/Ayoubzkr/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg"
          >
            <FaGithub size={20} />
            <span>Voir sur GitHub</span>
          </a>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg">
            <FaCode size={20} className="text-purple-500" />
            <span>C#</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg">
            <SiDotnet size={20} className="text-blue-500" />
            <span>.NET</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg">
            <FaDatabase size={20} className="text-yellow-500" />
            <span>SQL Server</span>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="mb-6">
            AGC est une application de bureau complète pour la gestion de stock, développée en C# avec .NET. 
            L'application permet de gérer efficacement les inventaires, les fournisseurs, les commandes et les rapports 
            pour les entreprises de toutes tailles.
          </p>

          <h2 className="text-2xl font-bold mb-4">Démonstration</h2>
          <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full"
              controls
              src="/videos/convert.mp4"
              title="StockMaster Demo"
            />
          </div>

          <h2 className="text-2xl font-bold mb-4">Fonctionnalités</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Gestion complète des produits et catégories</li>
            <li>Suivi des stocks en temps réel</li>
            <li>Gestion des fournisseurs et des commandes</li>
            <li>Système d'alerte pour les stocks bas</li>
            <li>Génération de rapports détaillés</li>
            <li>Gestion des utilisateurs et des permissions</li>
            <li>Interface utilisateur intuitive et responsive</li>
            <li>Export des données en différents formats</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Technologies Utilisées</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Backend: C#, .NET Framework</li>
            <li>Interface: Windows Forms, WPF</li>
            <li>Base de données: SQL Server</li>
            <li>ORM: Entity Framework</li>
            <li>Reporting: Crystal Reports</li>
            <li>Architecture: MVVM Pattern</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Fonctionnalités Avancées</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Scanner de codes-barres intégré</li>
            <li>Calcul automatique des coûts</li>
            <li>Gestion des promotions et des remises</li>
            <li>Suivi des mouvements de stock</li>
            <li>Génération de factures</li>
            <li>Intégration avec des imprimantes d'étiquettes</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Défis et Solutions</h2>
          <p className="mb-6">
            Le principal défi était de créer une application performante capable de gérer de grandes quantités de données 
            tout en maintenant une interface utilisateur réactive. La solution a été d'implémenter une architecture 
            MVVM avec Entity Framework pour une gestion efficace des données, et d'utiliser des techniques de mise en cache 
            pour optimiser les performances.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default StockMasterDetails; 