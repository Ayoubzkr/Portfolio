/**
 * @copyright 2024 ayoubzokri
 * @license Apache-2.0
 */
import {ButtonPrimary} from "./Button";
const sitemap = [
    {
      label: 'Accueil  ',
      href: '/#home'
    },
    {
      label: 'À propos',
      href: '#about'
    },
    {
      label: 'Projets ',
      href: '#work'
    },
    {
      label: 'Compétences',
      href: '#competences'
    },
    {
      label: 'Contactez-moi',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/Ayoubzkr'
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ayoub-zokri-11ba5a156'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/Ayou__uub'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/aiu__b/?hl=fr'
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/212678197663'
    }
  ];
const Footer=()=>{
    return (
        <footer className="section">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
                        Travaillons ensemble dès aujourd'hui !
                        </h2>
                        <ButtonPrimary
                        href="mailto:ayoubzokrii@gmail.com"
                        label="Démarrez votre projet"
                        icon="chevron_right"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">

                        <div>
                            <p className="mb-2">Plan du site</p>
                            <ul>
                                {sitemap.map(({label,href},key)=>(
                                    <li key={key}>
                                        <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="">Réseaux sociaux</p>
                            <ul>
                                {socials.map(({label,href},key)=>(
                                    <li key={key}>
                                        <a href={href} target="_blank" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-10 mb-8 ">
                    <a href="">
                        <img src="/images/file (1).svg" alt="Logo" width={80} height={80} />
                    </a>
                    <p className=" text-zinc-5 text-sm">
                        &copy;2025 <span className="text-zinc-200">Ayoub zokri</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer