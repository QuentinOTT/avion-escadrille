import React, { useEffect } from 'react';
import styled from 'styled-components';
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
    background-image: url('/images/escadrille2.jpg');
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

const Content = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid var(--secondary-color);
  padding: 2rem;
  border-radius: 8px;
  margin-top: 2rem;
  color: white;
  line-height: 1.6;

  p {
    margin-bottom: 1.5rem;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  li {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;

    &::before {
      content: '•';
      color: var(--secondary-color);
      position: absolute;
      left: 0;
    }
  }

  blockquote {
    border-left: 4px solid var(--secondary-color);
    padding-left: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    background: rgba(255, 255, 255, 0.05);
    padding: 1.5rem;
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: var(--secondary-color);
  margin-bottom: 1rem;
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Timeline = styled.div`
  margin: 2rem 0;
`;

const TimelineItem = styled.div`
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  border-left: 2px solid var(--secondary-color);
  color: white;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -5px;
    top: 0;
    width: 8px;
    height: 8px;
    background: var(--secondary-color);
    border-radius: 50%;
  }
`;

const Year = styled.span`
  color: var(--secondary-color);
  font-weight: bold;
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 8px;
  margin: 2rem auto;
  display: block;
`;

const Spa84 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageWrapper>
      <PageContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Title>SPA 84 "Tête de renard"</Title>
        <Content>
          <Section>
            <SectionTitle>Histoire</SectionTitle>
            <p>La N84 est formée le 03 Janvier 1917 à Lyon Bron.</p>
            <p>L'escadrille N 84 adopte une tête de renard pendant le 1er trimestre 1917. Le dessin a été proposé par le soldat Gaston Meunier, un armurier, au Cne Paul Gastin, le commandant de l'escadrille, qui l'a adopté pour son unité. Le choix du canidé semblait évident car la 84 possédait à l'époque deux renards comme mascottes.</p>
            <p>La N84 devient SPA 84 le 10 Mars 1918 lorsqu'elle reçoit ses avions SPAD VII et XIII.</p>
          </Section>

          <Section>
            <SectionTitle>Unités d'appartenance</SectionTitle>
            <Timeline>
              <TimelineItem>
                <Year>1917-1920:</Year> Groupe de combat 13
              </TimelineItem>
              <TimelineItem>
                <Year>1920:</Year> 106ème escadrille du 2ème Régiment de chasse
              </TimelineItem>
              <TimelineItem>
                <Year>1920-1933:</Year> 6ème escadrille du 2ème Régiment d'Aviation de Chasse
              </TimelineItem>
              <TimelineItem>
                <Year>2013-Aujourd'hui:</Year> 2ème escadrille de l'EC 2/5 "Ile de France"
              </TimelineItem>
            </Timeline>
          </Section>

          <Section>
            <SectionTitle>Les As de la Grande Guerre</SectionTitle>
            <ul>
              <li>DEMEULDRE: 13 Victoires</li>
              <li>GASTIN: 6 Victoires</li>
              <li>BONNEFOY: 6 Victoires</li>
              <li>CAYOL: 5 Victoires</li>
              <li>WERTHEIMER: 5 Victoires</li>
            </ul>
          </Section>

          <Section>
            <SectionTitle>Décorations</SectionTitle>
            <p>Citation à l'ordre de l'armée du 10 septembre 1918:</p>
            <blockquote>
              "Unité de combat particulièrement brillante, animée du plus pur esprit de sacrifice et du plus ardent enthousiasme. [...] Malgré des pertes cruelles, n'a cessé à aucun moment de donner un magnifique exemple par sa ténacité et sa foi dans la victoire."
            </blockquote>
            <p>Croix de guerre 14-18 avec palme de bronze</p>
          </Section>
        </Content>
      </motion.div>
      </PageContainer>
    </PageWrapper>
  );
};

export default Spa84;
