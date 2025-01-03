/**
 * @copyright 2024 ayoubzokri
 * @license Apache-2.0
 */
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
        <section className="section" id="competences">
            <div className="container">
                <h2 className="headline-2">Technologies clés que j'utilise</h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                Découvrez les outils et technologies puissants que j'utilise pour créer des sites web et des applications exceptionnels et performants.
                </p>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        skillItem.map(({imgSrc,label,desc},key)=>(
                            <SkillCard
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Skill