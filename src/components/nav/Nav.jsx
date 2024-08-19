import React from 'react';
import { useState, useEffect } from 'react';
import './nav.css';
import sectionsList from '../../utilities/sectionList';
import iconsDictionarie from '../../utilities/iconsDictionarie';

// hook personalizado para destacar dinâmicamente a seção da página na barra de navegação
function useScrollWatcher(sections) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Ajusta para a altura visível da janela
        const scrollPosition = window.scrollY + window.innerHeight / 2; 
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, [sections]);

  return activeSection;
}

const Nav = () => {
  const activeSection = useScrollWatcher(sectionsList)
  

  return (
    <nav>
      {sectionsList.map(section => (
        <a 
        href={`#${section}`}
        className={activeSection === section ? 'active' : ''}
        >
          {iconsDictionarie[section]}
        </a>
      ))}
      
    </nav>
  );
};

export default Nav;
