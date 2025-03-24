import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Section from '../components/Section';

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TeamCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: var(--transition);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const TeamImage = styled.div`
  height: 200px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${TeamCard}:hover img {
    transform: scale(1.1);
  }
`;

const TeamInfo = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const TeamName = styled.h3`
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const TeamRole = styled.p`
  color: var(--gray-color);
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ExpertiseCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ExpertiseIcon = styled.div`
  font-size: 2.5rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
`;

const ExpertiseTitle = styled.h3`
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const ExpertiseDescription = styled.p`
  color: var(--gray-color);
  line-height: 1.6;
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

const StatCard = styled(motion.div)`
  background: var(--primary-color);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  color: white;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Mecaniciens = () => {
  const teams = [
    {
      name: "Équipe Cellule",
      role: "Maintenance structurelle",
      image: "/images/pistard.jpg",
      description: "Experts en maintenance de la structure des aéronefs"
    },
    {
      name: "Équipe Moteur",
      role: "Maintenance propulsion",
      image: "/images/armuriers.jpg",
      description: "Spécialistes des systèmes de propulsion"
    },
    {
      name: "Équipe Avionique",
      role: "Systèmes électroniques",
      image: "/images/electique.jpg",
      description: "Techniciens en systèmes électroniques embarqués"
    },
    {
      name: "Équipe Armement",
      role: "Systèmes d'armes",
      image: "/images/armuriers.jpg",
      description: "Experts en systèmes d'armement"
    }
  ];

  const expertises = [
    {
      icon: "🔧",
      title: "Maintenance Préventive",
      description: "Inspections régulières et maintenance programmée pour assurer la disponibilité maximale des appareils."
    },
    {
      icon: "⚡",
      title: "Intervention Rapide",
      description: "Capacité d'intervention 24/7 pour maintenir la disponibilité opérationnelle de l'escadron."
    },
    {
      icon: "🔍",
      title: "Diagnostic Avancé",
      description: "Utilisation d'outils de diagnostic de dernière génération pour une maintenance précise."
    },
    {
      icon: "📊",
      title: "Gestion de la Qualité",
      description: "Application rigoureuse des normes de qualité et de sécurité aéronautiques."
    }
  ];

  return (
    <>
      <Hero 
        title="Nos Mécaniciens" 
        subtitle="L'excellence technique au service de la sécurité aérienne"
        bgImage="/images/mecaniciens.jpg"
      />

      <Section 
        title="Nos Équipes Spécialisées" 
        bgColor="#f5f5f5"
        pattern={true}
      >
        <p style={{ 
          textAlign: 'center', 
          maxWidth: '800px', 
          margin: '0 auto 3rem auto', 
          lineHeight: '1.8', 
          fontSize: '1.1rem' 
        }}>
          Nos équipes de maintenance sont composées de techniciens hautement qualifiés, 
          chacun spécialisé dans un domaine spécifique de l'entretien des aéronefs.
        </p>

        <TeamGrid>
          {teams.map((team, index) => (
            <TeamCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TeamImage>
                <img src={team.image} alt={team.name} />
              </TeamImage>
              <TeamInfo>
                <TeamName>{team.name}</TeamName>
                <TeamRole>{team.role}</TeamRole>
                <p>{team.description}</p>
              </TeamInfo>
            </TeamCard>
          ))}
        </TeamGrid>
      </Section>

      <Section 
        title="Notre Expertise" 
        bgColor="white"
      >
        <ExpertiseGrid>
          {expertises.map((expertise, index) => (
            <ExpertiseCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ExpertiseIcon>{expertise.icon}</ExpertiseIcon>
              <ExpertiseTitle>{expertise.title}</ExpertiseTitle>
              <ExpertiseDescription>{expertise.description}</ExpertiseDescription>
            </ExpertiseCard>
          ))}
        </ExpertiseGrid>
      </Section>

      <Section 
        title="En Chiffres" 
        bgColor="var(--primary-color)"
        titleColor="white"
      >
        <StatsContainer>
          <StatCard
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <StatNumber>50+</StatNumber>
            <StatLabel>Techniciens</StatLabel>
          </StatCard>
          <StatCard
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <StatNumber>10K+</StatNumber>
            <StatLabel>Heures de maintenance</StatLabel>
          </StatCard>
          <StatCard
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <StatNumber>99%</StatNumber>
            <StatLabel>Taux de disponibilité</StatLabel>
          </StatCard>
          <StatCard
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <StatNumber>0</StatNumber>
            <StatLabel>Incident technique</StatLabel>
          </StatCard>
        </StatsContainer>
      </Section>

      <Section title="Formation Continue">
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
            Nos mécaniciens suivent régulièrement des formations pour maintenir leurs 
            compétences à jour avec les dernières évolutions technologiques. Cette 
            formation continue garantit le plus haut niveau de sécurité et de fiabilité 
            dans la maintenance de nos aéronefs.
          </motion.p>
        </div>
      </Section>
    </>
  );
};

export default Mecaniciens; 