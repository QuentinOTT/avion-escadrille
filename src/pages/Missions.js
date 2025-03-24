import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';

const MissionCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
  height: 100%;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const MissionImage = styled.div`
  height: 250px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${MissionCard}:hover img {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  }
`;

const MissionContent = styled.div`
  padding: 2rem;
`;

const MissionTitle = styled.h3`
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const MissionDescription = styled.p`
  color: var(--gray-color);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const MissionStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: var(--gray-color);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Missions = () => {
  const missions = [
    {
      title: "Défense Aérienne",
      description: "Nos pilotes sont en alerte 24h/24h et 365 jours par an pour décoller sous très court délai avec leur Mirage 2000…",
      image: "/images/mission1.jpg",
      stats: {
        missions: "500+",
        heures: "2500+"
      }
    },
    {
      title: "Opérations Extérieures",
      description: "L’Escadron de chasse 2/5 “Ile de France” est engagé au Sahel dans l’Opération BARKHANE.",
      image: "/images/mission3.jpg",
      stats: {
        pays: "15+",
        operations: "30+"
      }
    },
    {
      title: "L'instruction en vol ",
      description: "Nos Instructeurs pilotes forment les jeunes affectés de tous les Escadrons Mirage de France et de Navarre… ",
      image: "/images/mission2.jpg",
      stats: {
        spécialité: "air / sol",
        élèves: "50+"
      }
    }
  ];

  const capacites = [
    {
      title: "Interception",
      description: "Capacité d'interception rapide de tout aéronef suspect dans l'espace aérien national.",
    },
    {
      title: "Combat Aérien",
      description: "Excellence dans les missions de combat air-air et supériorité aérienne.",
    },
    {
      title: "Reconnaissance",
      description: "Missions de reconnaissance tactique et stratégique.",
    },
    {
      title: "Support au Sol",
      description: "Appui aérien rapproché pour les forces terrestres.",
    }
  ];

  return (
    <>
      <Hero 
        title="Nos Missions" 
        subtitle="Excellence opérationnelle au service de la nation"
        bgImage="/images/missions-hero.jpg"
      />

      <Section 
        title="Missions Principales" 
        bgColor="#f5f5f5"
        pattern={true}
      >
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {missions.map((mission, index) => (
            <MissionCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MissionImage>
                <img src={mission.image} alt={mission.title} />
              </MissionImage>
              <MissionContent>
                <MissionTitle>{mission.title}</MissionTitle>
                <MissionDescription>{mission.description}</MissionDescription>
                <MissionStats>
                  {Object.entries(mission.stats).map(([key, value], i) => (
                    <StatItem key={i}>
                      <StatNumber>{value}</StatNumber>
                      <StatLabel>{key}</StatLabel>
                    </StatItem>
                  ))}
                </MissionStats>
              </MissionContent>
            </MissionCard>
          ))}
        </div>
      </Section>

      <Section 
        title="Nos Capacités" 
        bgColor="var(--primary-color)"
        titleColor="white"
      >
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem' 
        }}>
          {capacites.map((capacite, index) => (
            <Card
              key={index}
              title={capacite.title}
              description={capacite.description}
              badge={capacite.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Section>

      <Section title="Engagement et Excellence">
        <div style={{ 
          textAlign: 'center', 
          maxWidth: '800px', 
          margin: '0 auto' 
        }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              fontSize: '1.2rem', 
              lineHeight: '1.8', 
              marginBottom: '2rem' 
            }}
          >
            Notre escadron s'est toujours distingué par son professionnalisme et son 
            engagement sans faille dans l'exécution de ses missions. Que ce soit dans 
            la protection du territoire national ou lors d'opérations internationales, 
            nos équipages ont démontré leur excellence et leur dévouement au service 
            de la France.
          </motion.p>
        </div>
      </Section>
    </>
  );
};

export default Missions; 