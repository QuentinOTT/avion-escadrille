import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardContainer = styled(motion.div)`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--secondary-color), var(--tertiary-color));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${CardContainer}:hover & img {
    transform: scale(1.1);
  }
`;

const CardBadge = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: ${props => props.color || 'var(--secondary-color)'};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 1;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: var(--primary-color);
`;

const CardDescription = styled.p`
  color: var(--gray-color);
  line-height: 1.6;
  margin-bottom: 1rem;
  flex: 1;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`;

const CardButton = styled.button`
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

const CardInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--gray-color);
  font-size: 0.9rem;
`;

const Card = ({ 
  image, 
  title, 
  description, 
  badge, 
  badgeColor, 
  buttonText, 
  onClick,
  info,
  delay = 0
}) => {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
    >
      {badge && <CardBadge color={badgeColor}>{badge}</CardBadge>}
      
      {image && (
        <CardImage>
          <img src={image} alt={title} />
        </CardImage>
      )}
      
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        
        {(buttonText || info) && (
          <CardFooter>
            {info && <CardInfo>{info}</CardInfo>}
            {buttonText && <CardButton onClick={onClick}>{buttonText}</CardButton>}
          </CardFooter>
        )}
      </CardContent>
    </CardContainer>
  );
};

export default Card; 