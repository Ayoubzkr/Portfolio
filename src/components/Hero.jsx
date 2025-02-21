import { motion } from "framer-motion";
import { ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <motion.section 
      id="home" 
      className="pt-28 lg:pt-36"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avat.png"
                width={40}
                height={40}
                alt="Ayoub Zokri"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              À l'écoute d'opportunités
            </div>
          </div>
          <motion.h2 
            className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Ayoub Zokri | Développeur Full Stack
          </motion.h2>
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a
              href="/images/cv.pdf"
              download="Ayoub_Zokri_CV.pdf"
              className="btn btn-primary flex items-center gap-2"
            >
              <span className="material-symbols-rounded">download</span>
              Télécharger CV
            </a>

            <ButtonOutline
              href="#about"
              label="Voir plus"
              icon="arrow_downward"
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <figure className="w-full max-w-[400px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 tp-65% rounded-[60px] overflow-hidden">
            <img
              src="/images/file (2).png"
              width={1527}
              height={1937}
              alt="Ayoub Zokri"
              className="w-full"
            />
          </figure>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
