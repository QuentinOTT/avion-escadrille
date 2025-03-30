import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Section from '../components/Section';

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  &::before {
    content: '';
    position: absolute;
    width: 6px;
    background-color: var(--primary-color);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    border-radius: 3px;

    @media (max-width: 768px) {
      left: 31px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  left: ${props => props.position === 'right' ? '50%' : '0'};

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;
  }
`;

const TimelineContent = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: var(--secondary-color);
    border: 4px solid var(--primary-color);
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    ${props => props.position === 'right' ? 'left: -57px;' : 'right: -57px;'}

    @media (max-width: 768px) {
      left: -45px;
    }
  }
`;

const TimelineDate = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 20px;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const TimelineTitle = styled.h3`
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const TimelineText = styled.p`
  color: var(--gray-color);
  line-height: 1.6;
`;

const TimelineImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin: 1rem 0;
`;

const Histoire = () => {
  const timelineEvents = [
    {
      date: '20 Octobre 1941',
      title: 'Création du Groupe de chasse "Air Marine"',
      text: 'Décret signé par le Général de Gaulle créant les FAFL (Forces Aériennes Françaises Libres) avec le squadron 340 en Écosse, composé des escadrilles Paris et Versailles sur Spitfire Mk2/Mk9/Mk16.',
      image: '/images/fafl.jpg',
      position: 'left'
    },
    {
      date: '7 Novembre 1941',
      title: 'Squadron 340 opérationnel',
      text: 'Première mission opérationnelle du squadron 340 à Turnhouse (Écosse) avec les Spitfire.',
      image: '/images/histoire1.jpg',
      position: 'right'
    },
    {
      date: '1944-1945',
      title: 'Participation à la Libération',
      text: 'L\'escadron participe activement aux opérations de libération du territoire français et aux campagnes en Europe.',
      image: '/images/liberation.jpg',
      position: 'left'
    },
    {
      date: '1956-1962',
      title: 'Opérations en Afrique du Nord',
      text: 'Déploiement de l\'escadron pour des missions de soutien et de reconnaissance.',
      image: '/images/histoire2.jpg',
      position: 'right'
    },
    {
      date: '1970-1980',
      title: 'Modernisation',
      text: 'Transition vers des appareils plus modernes et adaptation aux nouvelles technologies.',
      image: '/images/histoire3.jpg',
      position: 'left'
    },
    {
      date: '1990-2000',
      title: 'Opérations internationales',
      text: 'Participation à de nombreuses opérations de maintien de la paix et missions humanitaires.',
      image: '/images/histoire4.jpg',
      position: 'right'
    },
    {
      date: '2023',
      title: 'Mise en sommeil',
      text: 'L\'escadron entre en période de mise en sommeil, tout en préservant son riche héritage pour les générations futures.',
      image: '/images/histoire5.jpg',
      position: 'left'
    }
  ];

  return (
    <>
      <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <img 
          src="/images/avionsnoirblanc.jpg" 
          alt="Notre Histoire"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '500px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: '2rem'
          }}
        />

      </div>

      <Section 
        title="Une Histoire Riche en Exploits" 
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
          Depuis sa création pendant la Seconde Guerre mondiale, notre escadron a participé 
          à de nombreux événements historiques majeurs. Cette chronologie retrace les moments 
          clés qui ont façonné notre identité et notre héritage.
        </p>
        
        <TimelineContainer>
          {timelineEvents.map((event, index) => (
            <TimelineItem 
              key={index}
              position={event.position}
              initial={{ opacity: 0, x: event.position === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TimelineContent position={event.position}>
                <TimelineDate>{event.date}</TimelineDate>
                <TimelineTitle>{event.title}</TimelineTitle>
                <TimelineText>{event.text}</TimelineText>
                <TimelineImage src={event.image} alt={event.title} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>

        <div style={{ 
          maxWidth: '800px', 
          margin: '3rem auto',
          padding: '2rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ 
            color: 'var(--primary-color)', 
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Cahiers de Marche
          </h3>
          <p style={{ 
            textAlign: 'center', 
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            Découvrez l'histoire détaillée de notre escadrille à travers nos cahiers de marche historiques.
          </p>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '1rem',
            marginBottom: '2rem' 
          }}>
            <a 
              href="/downloads/TOME-1.pdf" 
              download
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--primary-color)',
                color: 'white',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                margin: '0.5rem'
              }}
            >
              PÉRIODE 1941-1945
            </a>
            <a 
              href="/downloads/TOME-2.pdf" 
              download
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--primary-color)',
                color: 'white',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                margin: '0.5rem'
              }}
            >
              PÉRIODE 1945-1951
            </a>
            <a 
              href="/downloads/TOME-3.pdf" 
              download
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--primary-color)',
                color: 'white',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                margin: '0.5rem'
              }}
            >
              PÉRIODE 1951-1954
            </a>
            <a 
              href="/downloads/TOME-4.pdf" 
              download
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--primary-color)',
                color: 'white',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                margin: '0.5rem'
              }}
            >
              PÉRIODE 1954-1956
            </a>
          </div>
          
          <h3 style={{ 
            color: 'var(--primary-color)', 
            marginBottom: '1.5rem',
            marginTop: '3rem',
            textAlign: 'center'
          }}>
            Titres d'Homologations Escadrilles
          </h3>
          <p style={{ 
            textAlign: 'center', 
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            Consultez les documents officiels d'homologation de notre escadrille.
          </p>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '1rem' 
          }}>
            <a 
              href="/downloads/A592-SPA84.pdf" 
              download
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--secondary-color)',
                color: 'white',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                margin: '0.5rem'
              }}
            >
              Homologation 1
            </a>
            <a 
              href="/downloads/A619-C46.pdf" 
              download
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--secondary-color)',
                color: 'white',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                margin: '0.5rem'
              }}
            >
              Homologation 2
            </a>
            <a 
              href="/downloads/A1098-SPA124.pdf" 
              download
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--secondary-color)',
                color: 'white',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                margin: '0.5rem'
              }}
            >
              Homologation 3
            </a>
          </div>
        </div>
      </Section>

      {/* <Section 
        title="Notre Devise" 
        bgColor="var(--primary-color)"
        titleColor="white"
      >
        <div style={{ 
          textAlign: 'center', 
          color: 'white',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '2rem',
            color: 'var(--secondary-color)'
          }}>
            "Faire Face"
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            lineHeight: '1.8',
            marginBottom: '2rem'
          }}>
            Cette devise, héritée de nos prédécesseurs, incarne l'esprit de détermination 
            et de résilience qui a toujours caractérisé notre escadron. Quelles que soient 
            les circonstances, nous avons toujours su faire face aux défis avec courage et 
            professionnalisme.
          </p>
        </div>
      </Section> */}
    </>
  );
};

export default Histoire; 