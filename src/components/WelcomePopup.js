import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const PopupContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--secondary-color);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: var(--transition);
  
  &:hover {
    color: white;
    transform: scale(1.2);
  }
`;

const PopupContent = styled(motion.div)`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 3rem 2rem;
  text-align: center;
  max-width: 900px;
  width: 95%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  margin: 1rem;
  max-height: 80vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  h1 {
    color: var(--secondary-color);
    margin-bottom: 2rem;
    font-size: 2.2rem;
  }

  .paragraph {
    color: white;
    margin-bottom: 1.5rem;
    line-height: 1.6;
    font-size: 1rem;
  }

  button {
    background: none;
    border: 1px solid var(--secondary-color);
    color: var(--secondary-color);
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 400;
    border-radius: 4px;
    cursor: pointer;
    transition: var(--transition);
    
    &:hover {
      background-color: var(--secondary-color);
      color: var(--primary-color);
    }
  }
`;

const WelcomePopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  if (!showPopup) return null;

  return (
    <AnimatePresence>
      <PopupContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <PopupContent
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CloseButton onClick={() => setShowPopup(false)}>&times;</CloseButton>
          <h1>Edito par Patrick ROCHAS-DUPERIER, petit-fils du 3ème commandant de l'EC n°2 "340 Free French".</h1>
          <div className="paragraph">
            Le 23 juin 2022, avec le retrait de service du Mirage 2000 C RDI, l'escadron de chasse 2/5 "Ile de France", dernière unité dotée de ce glorieux appareil mis en service en 1988, a été mis en sommeil.
          </div>
          <div className="paragraph">
            Un chapitre prestigieux de l'Armée de l'Air et de l'Espace, illustré par un peu plus de 80 ans d'opérations en temps de guerre comme en temps de paix s'est fermé.
          </div>
          <div className="paragraph">
            Le réveil de l'unité, conditionné par la contrainte industrielle de la livraison en chasseurs "Rafale" nécessitait également d'importantes modifications sur la base aérienne 115 d'Orange-Caritat.
          </div>
          <div className="paragraph">
            Une fois ces changements d'infrastructure effectués, l'escadron de chasse 1/5 "Vendée", dissout depuis 2007, a été réactivé le 18 juillet 2024.
          </div>
          <div className="paragraph">
            La volonté de l'Etat-Major était la recréation d'une véritable 5ème Escadre. La réactivation du "Vendée", avant le réveil du 2/5, rentrait dans ce cadre. Jusqu'en 2007 les deux escadrons ont longtemps travaillé ensemble et il paraissait plus judicieux de réactiver une unité disparue depuis plus longtemps afin de pouvoir accueillir dignement le 2/5 ultérieurement.
          </div>
          <div className="paragraph">
            L'héritier du "340 Free French" de 1941, une des 18 unités combattantes décorées de la "Croix de la Libération" est donc toujours en sommeil alors que le ciel d'Orange est de nouveau survolé par des oiseaux de fer et de feu.
          </div>
          <div className="paragraph">
            L'escadron disposait d'un domaine et d'un site internet. Avec la mise en sommeil, la suppression de certaines lignes budgétaires, la dispersion et le compréhensible report d'activités des personnels ont provoqué le non-renouvellement et la mise en rédemption du domaine.
          </div>
          <div className="paragraph">
            Très attaché familialement à l'escadron et à son histoire, je ne pouvais le laisser (presque) totalement disparaître de la toile. Avec l'accord du dernier patron de l'unité et l'aide du webmaster de l'époque, j'ai repris à mon compte le domaine et le site. Ce dernier a été refondu (avec notamment la suppression de la boutique qui n'a plus aucune raison d'être) par un de mes étudiants, Quentin OTT que je remercie infiniment pour tout le travail fourni.
          </div>
          <div className="paragraph">
            Le jour du réveil de l'unité, je remettrai les "clés" à l'officier Tradition.
          </div>
          <div className="paragraph">
            Longue vie au glorieux escadron de chasse 2/5 "Ile de France" et … A LA CHASSE !!!
          </div>
          <button onClick={() => setShowPopup(false)}>Commencer l'exploration</button>
        </PopupContent>
      </PopupContainer>
    </AnimatePresence>
  );
};

export default WelcomePopup;
