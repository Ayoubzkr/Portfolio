import { motion } from "framer-motion";

const aboutItems = [
  { label: "Projets", number: 10 },
  { label: "Ans d'expérience", number: 3 },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Animation de la section principale */}
        <motion.div
          className="bg-zinc-800/50 p-7 rounded-2xl md:p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Animation du texte */}
          <motion.p
            className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            &nbsp;Je suis <strong className="text-sky-400">Ayoub Zokri</strong>,
            un développeur informatique passionné, spécialisé dans la création
            de solutions technologiques innovantes{" "}
            <span className="text-sky-400">pour répondre aux besoins des utilisateurs</span>. <br />
            Mon expertise couvre le développement web, la programmation orientée objet, 
            la conception de bases de données et l'intégration de technologies externes.
          </motion.p>

          {/* Animation des chiffres */}
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: key * 0.2 + 0.4, duration: 0.5 }}
                className="text-center"
              >
                <div className="flex items-center justify-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                  <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </motion.div>
            ))}

            {/* Animation du logo */}
            <motion.img
              src="images/file (1).svg"
              alt="Logo"
              width={80}
              height={80}
              className="ml-auto md:w-[40px] md:h-[40px]"
              initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
