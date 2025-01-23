import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { HashLink } from 'react-router-hash-link';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ navOpen }) => {
  const [activeId, setActiveId] = useState('home');
  const activeBox = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const sections = [
    { id: "home", offset: 0 },
    { id: "about" },
    { id: "competences" },
    { id: "work" },
    { id: "contact" },
  ];

  const updateActiveBox = (element) => {
    if (activeBox.current && element) {
      activeBox.current.style.top = element.offsetTop + "px";
      activeBox.current.style.left = element.offsetLeft + "px";
      activeBox.current.style.width = element.offsetWidth + "px";
      activeBox.current.style.height = element.offsetHeight + "px";
    }
  };

  // Met à jour la position de la box active sur redimensionnement
  useEffect(() => {
    const handleResize = () => {
      const activeElement = document.querySelector(`.nav-link[href="/#${activeId}"]`);
      updateActiveBox(activeElement);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeId]);

  // Gère l'activation automatique au défilement
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let currentActiveId = 'home';

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop - 100; // Marge pour ajuster l'activation
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentActiveId = section.id;
          }
        }
      });

      setActiveId(currentActiveId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gère l'activation via clic
  const handleClick = (event, id) => {
    event.preventDefault();
    const hash = id.replace('/#', '');
    setActiveId(hash);

    // Si nous sommes sur une page de projet, naviguer vers l'accueil
    if (location.pathname.startsWith('/projects/')) {
      navigate('/', { state: { scrollTo: hash } });
    }

    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      updateActiveBox(event.currentTarget);
    }, 100);
  };

  const navItems = [
    { label: "Accueil", link: "/#home" },
    { label: "À propos", link: "/#about" },
    { label: "Compétences", link: "/#competences" },
    { label: "Projets", link: "/#work" },
    { label: "Contact", link: "/#contact", className: "md:hidden" },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className = "" }, index) => (
        <HashLink
          smooth
          key={index}
          to={link}
          onClick={(e) => handleClick(e, link)}
          className={`nav-link ${link === `/#${activeId}` ? 'active' : ''} ${className}`}
        >
          {label}
        </HashLink>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
