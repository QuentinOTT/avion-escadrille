import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--primary-color);
  color: white;
  padding: 3rem 0 1rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: var(--secondary-color);
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const FooterLink = styled(Link)`
  color: #ccc;
  transition: var(--transition);
  
  &:hover {
    color: var(--secondary-color);
    transform: translateX(5px);
  }
`;

const FooterText = styled.p`
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--secondary-color);
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #aaa;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Escadron de Chasse</FooterTitle>
          <FooterText>
            Un escadron d'élite de l'Armée de l'Air française, 
            avec une histoire riche et un héritage prestigieux.
            Actuellement en mise en sommeil, nous préservons notre patrimoine.
          </FooterText>
          <FooterTitle><a href="https://devenir-aviateur.fr">Devenir Aviateur <i className="fas fa-external-link-alt"></i></a></FooterTitle>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Navigation</FooterTitle>
          <FooterLinks>
            <FooterLink to="/">Accueil</FooterLink>
            <FooterLink to="/histoire">Histoire</FooterLink>
            <FooterLink to="/missions">Missions</FooterLink>
            <FooterLink to="/avions">Avions</FooterLink>
            <FooterLink to="/mecaniciens">Mécaniciens</FooterLink>
            <FooterLink to="/musee">Musée</FooterLink>
            <FooterLink to="/simulateurs">Simulateurs</FooterLink>
            <FooterLink to="/pilotes">Pilotes</FooterLink>
          </FooterLinks>
        </FooterSection>

        
        
        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterText>
            Base Aérienne XXX<br />
            XXXXX Ville, France<br />
            <br />
            Email: escadron.idf@gmail.com<br />
            Adresse : Cellule Traditions Base aérienne 115<br />
            Code postal : 84871 ORANGE CEDEX<br />
            Téléphone: +33 X XX XX XX XX
          </FooterText>
          <SocialLinks>
            <SocialIcon href="https://www.facebook.com/ec25iledefrance/" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>&copy; {new Date().getFullYear()} Escadron de Chasse - Armée de l'Air. <br /> Tous droits réservés.
          Designed by QUENTIN OTT</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 