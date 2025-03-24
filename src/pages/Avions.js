import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import Section from '../components/Section';

const AircraftGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const AircraftCard = styled(motion.div)`
  background: var(--card-bg);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`;

const AircraftImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: var(--border-radius);
  overflow: hidden;
  margin-bottom: 1.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const AircraftName = styled.h3`
  color: var(--text-color);
  margin-bottom: 0.5rem;
`;

const SpecsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const SpecItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border-color);

  &:last-child {
    border-bottom: none;
  }
`;

const aircraftData = [
  {
    id: 1,
    name: 'Mirage 2000C',
    image: '/images/mirage2000C.jpg',
    specs: {
      'Vitesse max': 'Mach 2.2',
      'Plafond': '59,000 ft',
      'Motorisation': 'SNECMA M53-P2',
      'Armement': 'Canon DEFA 554, missiles'
    }
  },
  {
    id: 2,
    name: 'Mirage 2000B',
    image: '/images/mirage2000B.jpg',
    specs: {
      'Vitesse max': 'Mach 2.2',
      'Plafond': '59,000 ft',
      'Motorisation': 'SNECMA M53-P2',
      'Configuration': 'Double commande'
    }
  }
];

const Avions = () => {
  const [selectedAircraft, setSelectedAircraft] = useState(null);

  return (
    <>
      <Hero title="Nos Avions" />
      <Section>
        <AircraftGrid>
          <AnimatePresence>
            {aircraftData.map(aircraft => (
              <AircraftCard
                key={aircraft.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedAircraft(aircraft)}
              >
                <AircraftImage>
                  <img src={aircraft.image} alt={aircraft.name} />
                </AircraftImage>
                <AircraftName>{aircraft.name}</AircraftName>
                <SpecsList>
                  {Object.entries(aircraft.specs).map(([key, value]) => (
                    <SpecItem key={key}>
                      <span>{key}</span>
                      <span>{value}</span>
                    </SpecItem>
                  ))}
                </SpecsList>
              </AircraftCard>
            ))}
          </AnimatePresence>
        </AircraftGrid>
      </Section>
    </>
  );
};

export default Avions;