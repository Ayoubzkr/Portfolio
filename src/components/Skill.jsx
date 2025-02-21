/**
 * @copyright 2024 ayoubzokri
 * @license Apache-2.0
 */
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const skillItem = [
   
    {
        imgSrc: '/images/html-5.svg',
        label: 'HTML',
        desc: 'Structure web'
    }, 
    {
        imgSrc: '/images/css3.svg',
        label: 'CSS',
        desc: 'Style web'
    },
    {
        imgSrc: '/images/javascript.svg',
        label: 'JavaScript',
        desc: 'Dynamique web'
    },
    ,
    {
        imgSrc: '/images/bootstrap.svg',
        label: 'Bootstrap',
        desc: 'Style web'
    },
    {
        imgSrc: '/images/tailwind-css-2.svg',
        label: 'TailwindCSS',
        desc: 'Framework CSS'
    },
    {
        imgSrc: '/images/c.svg',
        label: 'C',
        desc: 'Système'
    },
    {
        imgSrc: '/images/java.svg',
        label: 'Java',
        desc: 'Applications'
    },
    {
        imgSrc: '/images/vbnet.svg',
        label: 'VB.Net',
        desc: 'Applications .NET'
    },
    {
        imgSrc: '/images/csharp.svg',
        label: 'C#',
        desc: 'Applications .NET'
    },
    {
        imgSrc: '/images/php.svg',
        label: 'PHP',
        desc: 'Serveur web'
    },
    {
        imgSrc: '/images/react.svg',
        label: 'React',
        desc: 'Interface web'
    },
    {
        imgSrc: '/images/angular.svg',
        label: 'Angular',
        desc: 'Framework front-end'
    },
    {
        imgSrc: '/images/python.svg',
        label: 'Python',
        desc: 'Polyvalent'
    },
    ,
    {
        imgSrc: '/images/mysql.svg',
        label: 'Mysql',
        desc: 'Basse Donée '
    },
];

const Skill = () => {
    return (
        <motion.section
            className="section"
            id="competences"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <div className="container">
                <motion.h2
                    className="headline-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Technologies clés que j'utilise
                </motion.h2>
                <motion.p
                    className="text-zinc-400 mt-3 mb-8 max-w-[50ch]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    Découvrez les outils et technologies puissants que j'utilise pour créer des sites web et des applications exceptionnels et performants.
                </motion.p>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {skillItem.map(({ imgSrc, label, desc }, key) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: key * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <SkillCard imgSrc={imgSrc} label={label} desc={desc} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Skill;
