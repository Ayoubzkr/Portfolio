/**
 * @copyright 2024 Ayoub Zokri
 * @license Apache-2.0 
 */
/**
 * 
 * Node Modules
 */
import PropTypes from "prop-types";
/**
 * 
 * Primary Button
 */
const ButtonPrimary = ({
  href = '#about',
  target = 'self',
  label,
  icon,
  classes
}) => {
  if (href) {
    return (
      <a href={href}
        target={target}
        className={`btn btn-primary ${classes} hover:bg-blue-500 hover:text-white`}
      >
        {label}
        {icon ?
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </a>
    );
  } else {
    return (
      <button className={`btn btn-primary ${classes} hover:bg-blue-500 hover:text-white`}>
        {label}

        {icon ?
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </button>
    );
  }

}

ButtonPrimary.PropTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
}

/**
 * 
 * Outline Button
 */
const ButtonOutline = ({
  href = 'about',
  target = 'self',
  label,
  icon,
  classes
}) => {
  // Fonction pour faire défiler la page jusqu'à la section 'about'
  const handleScrollToAbout = (e) => {
    e.preventDefault(); // Prévenir le comportement par défaut du lien
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  if (href) {
    return (
      <a href={href}
        target={target}
        onClick={handleScrollToAbout} // Ajouter la fonction de défilement
        className={`btn btn-outline ${classes}`}
      >
        {label}
        {icon ?
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </a>
    );
  } else {
    return (
      <button onClick={handleScrollToAbout} className={`btn btn-outline ${classes}`}>
        {label}

        {icon ?
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </button>
    );
  }
}

ButtonOutline.PropTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
}

export {
  ButtonPrimary,
  ButtonOutline
}
