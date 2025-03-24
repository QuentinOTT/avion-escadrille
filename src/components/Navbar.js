import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavContainer = styled.nav`
  background-color: var(--primary-color);
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  gap: 10px;
  text-decoration: none;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  .logo-text {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 0;
      line-height: 1.2;
    }
  }

  span {
    color: var(--secondary-color);
  }

  &:hover {
    transform: scale(1.05);
    transition: var(--transition);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: white;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--secondary-color);
    transition: var(--transition);
  }
  
  &:hover::after, &.active::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  display: none;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100vh;
  background-color: var(--primary-color);
  padding: 2rem;
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  align-self: flex-end;
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MobileNavLink = styled(Link)`
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &.active {
    color: var(--secondary-color);
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled(motion.button)`
  background: var(--primary-color);
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
  font-weight: 600;
  cursor: pointer;
  padding: 0.6rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  clip-path: polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%);

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: transparent;
    clip-path: polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%);
    border: 1px solid var(--secondary-color);
    transition: all 0.3s ease;
  }

  &:hover {
    color: white;
    background: var(--secondary-color);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(var(--secondary-color-rgb), 0.3);
  }

  &:hover::before {
    background: var(--secondary-color);
  }
`;

const DropdownContent = styled(motion.div)`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  background-color: var(--primary-color);
  min-width: 220px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  border: 2px solid var(--secondary-color);
  clip-path: polygon(0 0, 100% 0, calc(100% - 15px) 100%, 15px 100%);
  padding: 0.5rem 0;
  z-index: 1000;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    right: 20px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid var(--secondary-color);
  }
`;

const DropdownLink = styled(Link)`
  color: white;
  padding: 0.8rem 1.5rem;
  display: block;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
  position: relative;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.5px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 4px;
    height: 0;
    background: var(--secondary-color);
    transition: height 0.3s ease;
    transform: translateY(-50%);
  }

  &:hover {
    background-color: rgba(var(--secondary-color-rgb), 0.1);
    color: var(--secondary-color);
    padding-left: 2rem;
  }

  &:hover::before {
    height: 70%;
  }

  &.active {
    color: var(--secondary-color);
    background-color: rgba(var(--secondary-color-rgb), 0.15);
    padding-left: 2rem;

    &::before {
      height: 70%;
    }
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 150;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu and dropdown when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const mainNavItems = [
    { path: '/', label: 'Accueil' },
    { path: '/histoire', label: 'Histoire' },
    { path: '/missions', label: 'Missions' },
    { path: '/avions', label: 'Avions' },

  ];

  const dropdownItems = [
    { path: '/mecaniciens', label: 'Mécaniciens' },
    { path: '/escadrilles', label: 'Escadrilles' },
    { path: '/musee', label: 'Musée' },
    { path: '/pilotes', label: 'Pilotes' }
  ];

  return (
    <NavContainer>
      <NavInner>
        <Logo to="/">
          <img src="/images/blazon-ecu-25.png" alt="nav-logo" />
          <div className="logo-text">
            <div>Escadron</div>
            <span>De Chasse 2/5</span>
          </div>
        </Logo>
        
        <NavLinks>
          {mainNavItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
            >
              {item.label}
            </NavLink>
          ))}
          <DropdownContainer className="dropdown-container">
            <DropdownButton
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Autres <span style={{ fontSize: '0.9em', marginLeft: '4px', color: 'inherit' }}>{isDropdownOpen ? '▲' : '▼'}</span>
            </DropdownButton>
            {isDropdownOpen && (
              <DropdownContent
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {dropdownItems.map((item) => (
                  <DropdownLink 
                    key={item.path} 
                    to={item.path}
                    className={location.pathname === item.path ? 'active' : ''}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {item.label}
                  </DropdownLink>
                ))}
              </DropdownContent>
            )}
          </DropdownContainer>
        </NavLinks>
        
        <MobileMenuButton onClick={toggleMenu}>
          ☰
        </MobileMenuButton>
      </NavInner>

      {isOpen && (
        <Overlay 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleMenu}
        />
      )}
      
      <MobileMenu
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        <CloseButton onClick={toggleMenu}>✕</CloseButton>
        <MobileNavLinks>
          {[...mainNavItems, ...dropdownItems].map((item) => (
            <MobileNavLink 
              key={item.path} 
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </MobileNavLink>
          ))}
        </MobileNavLinks>
      </MobileMenu>
    </NavContainer>
  );
};

export default Navbar; 