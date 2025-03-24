import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PilotesHero from '../components/PilotesHero';
import Section from '../components/Section';

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 3rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const SimulatorSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const SimulatorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SimulatorCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const SimulatorGallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
    }
  }
`;

const InfoBox = styled.div`
  background: var(--primary-color);
  color: white;
  padding: 2rem;
  border-radius: 10px;
  margin: 2rem 0;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  
  li {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;
    
    &:before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--secondary-color);
    }
  }
`;

export default function Pilotes() {
  const simulatorMissions = [
    'Entrainement aux procédures normales (Check verte)',
    'Entrainement aux procédures secours (Check rouge)',
    'Vol Sans Visibilité',
    'Formation initiale',
    'Entrainement aux Interceptions Air/Air',
    'Entrainement aux passes de tir Air Sol'
  ];

  const ejectionFacts = [
    'Une explosion de sa verrière',
    '16G',
    'Un Blast de 300kt (dans les conditions les plus favorables)',
    'Une ouverture de parachute',
    'Un atterrissage à 7m/s'
  ];

  return (
    <>
      <PilotesHero
        title="Nos Pilotes"
        subtitle="L'excellence et l'expertise au service de l'armée de l'air"
        bgImage="/images/pilote.jpg"
      />

      <Section title="Formation et Expertise" bgColor="#f5f5f5">
        <ContentWrapper>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            Les pilotes "chefs de patrouilles" de l'escadron sont tous instructeurs. Avec plusieurs milliers d'heures de vol, 
            ils ont pour mission de former les futurs pilotes de Mirage 2000 de France et de Navarre.
          </p>
          
          <ImageGrid>
            <StyledImage src="/images/pilote.jpg" alt="Pilote de chasse" />
            <StyledImage src="/images/pilote2.jpg" alt="Formation des pilotes" />
          </ImageGrid>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            Les jeunes pilotes de chasse affectés à l'EC 2/5 suivent une formation les amenant jusqu'à la qualification 
            de chef de patrouille (leader de 4 Mirage). Cette progression interne dure environ 4 ans.
          </p>

          <InfoBox>
            <h3 style={{ marginBottom: '1rem' }}>Formation Continue</h3>
            <p>
              Des promotions de jeunes pilotes de chasse (environ 20 par an) sont de passage dans nos murs. 
              Ils suivent une formation en vol d'environ 4 mois avant de continuer leur progression dans leur Escadron d'affectation.
            </p>
          </InfoBox>
        </ContentWrapper>
      </Section>

      <Section title="Entraînement sur Simulateurs">
        <ContentWrapper>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            Les simulateurs de l'Escadron sont mis en œuvre par une équipe de moniteurs simulateurs (MOSIM).
          </p>

          <SimulatorSection>
            <SimulatorInfo>
              <SimulatorCard>
                <h3>Simulateur C3</h3>
                <p>Simulateur 3D sur vérins offrant une expérience immersive pour l'entraînement.</p>
              </SimulatorCard>

              <SimulatorCard>
                <h3>Types de Missions</h3>
                <StyledList>
                  {simulatorMissions.map((mission, index) => (
                    <li key={index}>{mission}</li>
                  ))}
                </StyledList>
              </SimulatorCard>

              <SimulatorCard>
                <h3>Simulateur d'éjection</h3>
                <p>
                  Mensuellement, les pilotes s'entrainent aux procédures d'évacuation rapide au sol et d'éjection. 
                  La mécanisation des gestes d'évacuation d'urgence est indispensable.
                </p>
            <InfoBox style={{ marginTop: '3rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Impact sur le Corps lors d'une Éjection</h3>
            <p style={{ marginBottom: '1rem' }}>Le poids du pilote lors d'une éjection est de 1.600kg. Lors d'une éjection le corps du pilote subira:</p>
            <StyledList>
              {ejectionFacts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </StyledList>
            </InfoBox>
              </SimulatorCard>
            </SimulatorInfo>



            <SimulatorGallery>
              <motion.img 
                src="/images/simulateur3d.jpg" 
                alt="Simulateur C3"
                whileHover={{ scale: 1.02 }}
              />
              <motion.img 
                src="/images/simulateur3d2.jpg" 
                alt="Simulateur en action"
                whileHover={{ scale: 1.02 }}
              />
              <motion.img 
                src="/images/ejection.jpg" 
                alt="Simulateur d'éjection"
                whileHover={{ scale: 1.02 }}
              />
            </SimulatorGallery>
          </SimulatorSection>
        </ContentWrapper>
      </Section>
    </>
  );
}
