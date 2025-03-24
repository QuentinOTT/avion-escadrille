import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import HomeHero from '../components/HomeHero';
import Section from '../components/Section';
import Card from '../components/Card';

const HeroButton = styled(motion.button)`
  background-color: var(--secondary-color);
  color: var(--primary-color);
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  margin-top: 2rem;
  cursor: pointer;
  transition: var(--transition);
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    background-color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const StatNumber = styled.h3`
  font-size: 3rem;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
`;

const StatTitle = styled.p`
  font-size: 1rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 1rem;
  }
`;

const FeatureItem = styled(motion.div)`
  text-align: center;
  padding: 2rem;
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

const FeatureDescription = styled.p`
  color: var(--gray-color);
  line-height: 1.6;
`;

const QuoteSection = styled.div`
  background-color: var(--primary-color);
  color: white;
  padding: 5rem 0;
  text-align: center;
`;

const Quote = styled.blockquote`
  font-size: 1.8rem;
  font-style: italic;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const QuoteAuthor = styled.cite`
  display: block;
  margin-top: 2rem;
  font-size: 1.2rem;
  font-style: normal;
  color: var(--secondary-color);
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <HomeHero 
        title="Escadron de Chasse" 
        subtitle="Un héritage d'excellence et de courage au service de la France"
        bgImage="/images/M2000N-11-low.jpg"
      >
        <Link to="/histoire">
          <HeroButton
            initial={{ opacity: 1, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Découvrir notre histoire
          </HeroButton>
        </Link>
        
        
      </HomeHero>
      
        {/* <FeatureGrid>
          <FeatureItem
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          >
          <FeatureIcon>🛩️</FeatureIcon>
          <FeatureTitle>Nos Avions</FeatureTitle>
          <FeatureDescription>
          De l'emblématique Mirage aux modernes Rafale, découvrez les aéronefs qui ont fait notre histoire.
          </FeatureDescription>
          </FeatureItem>
          
          <FeatureItem
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          >
          <FeatureIcon>🎖️</FeatureIcon>
          <FeatureTitle>Nos Missions</FeatureTitle>
          <FeatureDescription>
          Protection du territoire, opérations extérieures, missions humanitaires : notre engagement au service de la paix.
          </FeatureDescription>
          </FeatureItem>
          
          <FeatureItem
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          >
          <FeatureIcon>👨‍✈️</FeatureIcon>
          <FeatureTitle>Nos Pilotes</FeatureTitle>
          <FeatureDescription>
          Rencontrez les hommes et femmes d'exception qui ont porté haut les couleurs de notre escadron.
          </FeatureDescription>
          </FeatureItem>
          </FeatureGrid> */}

            <section>
            <QuoteSection>
              <div className="container">
                <Quote>
                  "Le ciel n'est pas une limite, c'est une invitation à l'excellence. Notre escadron a toujours relevé ce défi avec honneur et détermination."
                </Quote>
                <QuoteAuthor>Colonel Jean Dupont, ancien commandant de l'escadron</QuoteAuthor>
              </div>
            </QuoteSection>
            </section>
            
          <Section 
            title="Notre Héritage" 
            bgColor="#f5f5f5"
            pattern={true}
          >
            <FeatureGrid>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                <Card 
                  image="/images/avionsnoirblanc.jpg"
                  title="Notre Histoire"
                  description="De sa création à sa mise en sommeil, découvrez le parcours exceptionnel de notre escadron à travers les décennies."
                  buttonText="En savoir plus"
                  onClick={() => navigate('/histoire')}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card 
                  image="/images/avions.jpg"
                  title="Nos Avions"
                  description="Des premiers chasseurs aux appareils de dernière génération, explorez l'évolution de notre flotte aérienne."
                  buttonText="Découvrir"
                  onClick={() => navigate('/avions')}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card 
                  image="/images/musée-9.jpg"
                  title="Notre Musée"
                  description="Visitez notre espace muséographique et plongez dans l'histoire vivante de l'aviation militaire française."
                  buttonText="Visiter"
                  onClick={() => navigate('/musee')}
                />
              </motion.div>
            </FeatureGrid>
            
      </Section>


      

    </>
  );
};

export default Home; 