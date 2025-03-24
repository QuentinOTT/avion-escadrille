import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import MuseeHero from '../components/MuseeHero';
import Section from '../components/Section';

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  height: 300px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  &:hover img {
    transform: scale(1.1);
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const GalleryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3));
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  color: white;
`;

const CollectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const CollectionCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const CollectionImage = styled.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${CollectionCard}:hover img {
    transform: scale(1.1);
  }
`;

const CollectionInfo = styled.div`
  padding: 1.5rem;
`;

const MapContainer = styled.div`
  margin-top: 2rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  iframe {
    width: 100%;
    height: 400px;
    border: none;
  }
`;

const CollectionTitle = styled.h3`
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const CollectionDescription = styled.p`
  color: var(--gray-color);
  line-height: 1.6;
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  max-width: 900px;
  width: 90%;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;
`;

const ModalInfo = styled.div`
  padding: 2rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 10;
`;

const InfoSection = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
`;

const InfoTitle = styled.h3`
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const InfoContent = styled.div`
  color: var(--gray-color);
  line-height: 1.8;
  
  p {
    margin-bottom: 1rem;
  }
  
  strong {
    color: var(--primary-color);
  }
  
  a {
    color: var(--secondary-color);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const HighlightsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  
  li {
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: 0.5rem;
    
    &:before {
      content: '→';
      position: absolute;
      left: 0;
      color: var(--secondary-color);
    }
  }
`;

const Musee = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const collections = [
    {
      title: "Nos missiles",
      description: "Vous pouvez découvrir les missiles de l'escadron",
      image: "/images/musée1.jpg"
    },
    {
      title: "Salle des Traditions",
      description: "Exposition permanente sur l'histoire de l'escadron",
      image: "/images/musée2.jpg"
    },
    {
      title: "Mémorial",
      description: "Documents historiques",
      image: "/images/musée3.jpg"
    },
  ];

  return (
    <>
      <MuseeHero 
        title="Notre Musée" 
        subtitle="Un voyage dans l'histoire de l'aviation militaire française"
        bgImage="/images/muséeexterieur.jpg"
      />

      <Section 
        title="Nos salles" 
        bgColor="#f5f5f5"
        pattern={true}
      >
        <ContentWrapper>
          <p style={{ 
            textAlign: 'center', 
            maxWidth: '800px', 
            margin: '0 auto 3rem auto', 
            lineHeight: '1.8', 
            fontSize: '1.1rem' 
          }}>
            Notre musée préserve et met en valeur le riche patrimoine historique de 
            l'escadron à travers diverses collections thématiques.
          </p>

          <CollectionGrid>
            {collections.map((collection, index) => (
            <CollectionCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CollectionImage>
                <img src={collection.image} alt={collection.title} />
              </CollectionImage>
              <CollectionInfo>
                <CollectionTitle>{collection.title}</CollectionTitle>
                <CollectionDescription>{collection.description}</CollectionDescription>
              </CollectionInfo>
            </CollectionCard>
          ))}
          </CollectionGrid>
        </ContentWrapper>
      </Section>

      <Section 
        title="Informations Pratiques" 
        bgColor="#f5f5f5"
      >
        <ContentWrapper>
          <InfoSection>
            <InfoTitle>Horaires d'ouvertures</InfoTitle>
            <InfoContent>
              <p><strong>Tous les mardis</strong> de 09h00 à 12h00 et de 14h00 à 16h00</p>
              <p><strong>Entrée gratuite</strong></p>
            </InfoContent>
            <InfoTitle>Procédure d'accès</InfoTitle>
            <InfoContent>
              <p>Contactez le responsable sur: <a href="mailto:musee.caritat@laposte.net">musee.caritat@laposte.net</a></p>
              <p><strong>Pièce d'identité à présenter</strong></p>
            </InfoContent>
            <InfoSection>
            <InfoTitle>Les plus...</InfoTitle>
              <HighlightsList>
                <li>Une équipe de passionnés incollables</li>
                <li>Une grande collection d'insignes</li>
                <li>Une collection de Fanions</li>
                <li>Tenues d'époque</li>
                <li>Appareils en stèles pour les photographes</li>
              </HighlightsList>
            </InfoSection>
            <InfoTitle>Localisation</InfoTitle>
              <p>Route Bachaga Boualem, 84100 Orange</p>
              <MapContainer>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2863.098714129369!2d4.839507776412346!3d44.14320927108302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b5909d89a1fdad%3A0x7f76a56595cb119c!2sRte%20Bachaga%20Boualem%2C%2084100%20Orange!5e0!3m2!1sfr!2sfr!4v1742333422444!5m2!1sfr!2sfr" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation du musée"
                />
              </MapContainer>
          </InfoSection>
        </ContentWrapper>
      </Section>

      <AnimatePresence>
        {selectedItem && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <ModalContent
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <CloseButton onClick={() => setSelectedItem(null)}>✕</CloseButton>
              <ModalImage src={selectedItem.image} alt={selectedItem.title} />
              <ModalInfo>
                <h2>{selectedItem.title}</h2>
                <p style={{ color: 'var(--gray-color)', marginTop: '1rem', lineHeight: '1.6' }}>
                  {selectedItem.description}
                </p>
              </ModalInfo>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Musee; 