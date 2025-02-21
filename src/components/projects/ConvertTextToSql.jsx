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
const ConvertTextToSql = () => {
  return (
    <section className="section bg-zinc-900 py-16">
      <div className="container">
        <h6 className="headline-1 text-white mb-8 display-6">
          Convertisseur de fichiers texte en SQL
        </h6>
        <div className="flex justify-center mt-12">
          <div className="w-full max-w-3xl">
            <h3 className="text-2xl font-semibold text-gray-300 mb-4">Regardez la démonstration :</h3>
            <div className="relative pb-[56.25%] h-0 mb-8">
              <iframe 
                src="/videos/convert.mp4" 
                title="Démonstration du convertisseur des fichiers textes"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <div className="w-full max-w-3xl">
            
            <p className="text-lg mb-6 text-white">
              Cet outil prend un fichier texte contenant des données structurées
              (comme des valeurs séparées par des virgules ou des tabulations) et
              génère des instructions SQL prêtes à être exécutées dans une base
              de données. Idéal pour les développeurs et les administrateurs de
              base de données.
            </p>
          </div>
        </div>

        <div className="space-y-4 mt-12 text-white">
          <h3 className="text-2xl font-semibold mb-4">
            Fonctionnalités clés :
          </h3>
          <ul className="list-decimal pl-6 space-y-2 text-gray-300">
            <li>Importer des fichiers texte (CSV, TSV, etc.).</li>
            <li>Personnaliser les noms de tables et les types de colonnes.</li>
            <li>Générer des scripts SQL pour MySQL, PostgreSQL, SQLite, etc.</li>
            <li>Prévisualiser les instructions SQL générées.</li>
          </ul>
        </div>
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-white mt-6">Captures d'écran</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <Screenshot 
                key={n}
                src={`/images/conv${n}.png`}
                alt={`Capture d'écran ${n} du convertisseur SQL`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConvertTextToSql;
