import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: var(--primary-color);
  overflow: hidden;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/M2000N-11-low.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    opacity: 0.1;
    z-index: 0;
  }
`;

const PageContainer = styled.div`
  position: relative;
  z-index: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  color: white;
  min-height: 100vh;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const EscadrillesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const EscadrilleCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid var(--secondary-color);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  position: relative;
  overflow: hidden;
  color: white;
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.2rem;
    margin-top: 1rem;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 400;
    letter-spacing: 1px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--secondary-color);
  }
`;

const EscadrilleImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  
  ${EscadrilleCard}:hover & {
    transform: scale(1.05);
  }
`;

const EscadrilleName = styled.h2`
  color: var(--secondary-color);
  margin: 1rem 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const LearnMoreButton = styled(Link)`
  display: inline-block;
  background: transparent;
  color: white;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid var(--secondary-color);
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.9rem;

  &:hover {
    background: var(--secondary-color);
    color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(var(--secondary-color-rgb), 0.2);
  }
`;

const Escadrilles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const escadrilles = [
    {
      id: 1,
      name: "C46 'Trident'",
      image: "/images/escadrille1.jpg",
      title: "1ère ESCADRILLE"
    },
    {
      id: 2,
      name: "SPA 84 'Tête de renard'",
      image: "/images/escadrille2.jpg",
      title: "2ème ESCADRILLE",
      hasDetails: true
    },
    {
      id: 3,
      name: "SPA 124 'Jeanne d\'arc'",
      image: "/images/escadrille3.jpg",
      title: "3ème ESCADRILLE"
    }
  ];

  return (
    <PageWrapper>
      <PageContainer>
      <Title>Nos Escadrilles</Title>
      <EscadrillesGrid>
        {escadrilles.map((escadrille) => (
          <EscadrilleCard
            key={escadrille.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: escadrille.id * 0.2 }}
          >
            <EscadrilleImage
              src={escadrille.image}
              alt={escadrille.name}
            />
            <EscadrilleName>{escadrille.title}</EscadrilleName>
            <h3>{escadrille.name}</h3>
            {escadrille.hasDetails && (
              <LearnMoreButton to="/escadrilles/spa84">
                En savoir plus
              </LearnMoreButton>
            )}
          </EscadrilleCard>
        ))}
      </EscadrillesGrid>
      </PageContainer>
    </PageWrapper>
  );
};

export default Escadrilles;
