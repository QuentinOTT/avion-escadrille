import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionContainer = styled.section`
  padding: 3rem 0;
  background-color: ${props => props.bgColor || 'transparent'};
  position: relative;
  overflow: hidden;

  ${props => props.pattern && `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('/images/section-pattern.png');
      opacity: 0.05;
      z-index: 0;
    }
  `}

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const SectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  color: ${props => props.titleColor || 'var(--primary-color)'};

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--secondary-color);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const SectionContent = styled(motion.div)`
  display: ${props => props.grid ? 'grid' : 'block'};
  grid-template-columns: ${props => props.columns || 'repeat(auto-fit, minmax(300px, 1fr))'};
  gap: ${props => props.gap || '2rem'};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Section = ({ 
  title, 
  children, 
  bgColor, 
  titleColor, 
  pattern = false, 
  grid = false,
  columns,
  gap,
  id
}) => {
  return (
    <SectionContainer bgColor={bgColor} pattern={pattern} id={id}>
      <SectionInner>
        {title && (
          <SectionTitle 
            titleColor={titleColor}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </SectionTitle>
        )}
        <SectionContent 
          grid={grid}
          columns={columns}
          gap={gap}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </SectionContent>
      </SectionInner>
    </SectionContainer>
  );
};

export default Section; 