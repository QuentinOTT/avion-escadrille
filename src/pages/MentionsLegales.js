import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled(motion.div)`
  min-height: 100vh;
  background-color: var(--primary-color);
  color: white;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background-color: var(--secondary-color);
  }
`;

const Content = styled.div`
  max-width: 800px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--secondary-color);
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;
`;

const MentionsLegales = () => {
  return (
    <Container
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Mentions légales</Title>

      <Content>
        <Section>
          <SectionTitle>1. Éditeur du site</SectionTitle>
          <Text>Responsable de la publication : Quentin OTT</Text>
          <Text>Adresse : [https://quentinott.com/]</Text>
          <Text>Email : [quentin.ott2511@gmail.com]</Text>
        </Section>

        <Section>
          <SectionTitle>2. Hébergeur</SectionTitle>
          <Text>Hébergeur : [Render]</Text>
          <Text>Adresse : [https://render.com]</Text>
        </Section>

        <Section>
          <SectionTitle>3. Propriété intellectuelle</SectionTitle>
          <Text>Le contenu du site, incluant les textes, images, vidéos et autres éléments, est la propriété exclusive de Quentin OTT.</Text>
          <Text>Toute reproduction totale ou partielle est interdite sans autorisation écrite préalable.</Text>
        </Section>

        <Section>
          <SectionTitle>4. Protection des données personnelles</SectionTitle>
          <Text>Conformément à la réglementation en vigueur, ce site ne collecte aucune donnée personnelle.</Text>
          <Text>Les informations personnelles ne sont collectées que si vous les partagez volontairement via le formulaire de contact.</Text>
        </Section>

        <Section>
          <SectionTitle>5. Liens hypertextes</SectionTitle>
          <Text>Les liens hypertextes mis en place dans le cadre du site internet vers d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Quentin OTT.</Text>
        </Section>

        <Section>
          <SectionTitle>6. Responsabilité</SectionTitle>
          <Text>Quentin OTT ne peut être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur lors de l'accès au site.</Text>
          <Text>Le site est mis à jour régulièrement pour assurer une information à jour.</Text>
        </Section>

        <Section>
          <SectionTitle>7. Droit applicable et juridiction compétente</SectionTitle>
          <Text>Les présentes conditions d'utilisation sont régies par les lois françaises.</Text>
          <Text>En cas de litige, les tribunaux français seront seuls compétents.</Text>
        </Section>
      </Content>
    </Container>
  );
};

export default MentionsLegales;
