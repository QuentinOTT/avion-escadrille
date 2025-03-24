import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.div`
  height: 60vh;
  min-height: 400px;
  background-image: ${props => `url('${props.bgImage}')`};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3));
  }
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
  z-index: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HomeHero = ({ title, subtitle, bgImage, children }) => {
  return (
    <HeroContainer bgImage={bgImage}>
      <HeroContent>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </HeroTitle>
        {subtitle && (
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </HeroSubtitle>
        )}
        {children}
      </HeroContent>
    </HeroContainer>
  );
};

export default HomeHero;
