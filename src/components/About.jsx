/**
 * @copyright 2024 ayoubzokri
 * @license Apache-2.0
 */
const aboutItems = [
    {
      label: 'Projet',
      number: 10
    },
    {
      label: 'Ans experience',
      number: 2
    }
  ];
const About = () => {
    return (
        <section
            id="about"
            className="section">
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-8">
                    <p className=" text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    &nbsp;Je suis Ayoub Zokri, un développeur informatique passionné, 
                    spécialisé dans la création de solutions technologiques innovantes<span className="text-sky-400"> pour répondre aux besoins des utilisateurs</span>. <br />
                    Mon expertise couvre le développement web, la programmation orientée objet, 
                    la conception de bases de données et l'intégration de technologies externes. <br />
                    Ma passion pour l'informatique et mon engagement envers l'innovation me motivent à constamment élargir mes compétences et à rester à jour avec les dernières avancées technologiques. 
                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({label,number},key)=>(
                                <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }
                        <img src="images/file (1).svg" alt="Logo" width={80} height={80} className="ml-auto md:w-[40px] md:h-[40px]"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About