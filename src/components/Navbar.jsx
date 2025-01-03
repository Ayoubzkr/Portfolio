import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { HashLink } from 'react-router-hash-link';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ navOpen }) => {
  const [activeId, setActiveId] = useState('home');
  const activeBox = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const updateActiveBox = (element) => {
    if (activeBox.current && element) {
      activeBox.current.style.top = element.offsetTop + "px";
      activeBox.current.style.left = element.offsetLeft + "px";
      activeBox.current.style.width = element.offsetWidth + "px";
      activeBox.current.style.height = element.offsetHeight + "px";
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const activeElement = document.querySelector(`.nav-link[href="/#${activeId}"]`);
      updateActiveBox(activeElement);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeId]);

  useEffect(() => {
    // Vérifie si nous sommes sur une page de projet
    const isProjectPage = location.pathname.startsWith('/projects/');
    
    if (!isProjectPage) {
      // Si nous sommes sur la page d'accueil, utiliser le hash
      const hash = location.hash.replace('#', '') || 'home';
      setActiveId(hash);
      const activeElement = document.querySelector(`.nav-link[href="/#${hash}"]`);
      updateActiveBox(activeElement);
    } else {
      // Si nous sommes sur une page de projet, garder la section "work" active
      setActiveId('work');
      const activeElement = document.querySelector(`.nav-link[href="/#work"]`);
      updateActiveBox(activeElement);
    }
  }, [location]);

  const handleClick = (event, id) => {
    event.preventDefault();
    const hash = id.replace('/#', '');
    setActiveId(hash);
    
    // Si nous sommes sur une page de projet, d'abord naviguer vers la page d'accueil
    if (location.pathname.startsWith('/projects/')) {
      navigate('/', { state: { scrollTo: hash } });
    }

    // Attendre un court instant pour que la navigation soit terminée
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
    { label: "Contact", link: "/#contact", className: "md:hidden" }
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
  navOpen: PropTypes.bool.isRequired
};

export default Navbar;