import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const HeroContent = styled(motion.div)`
  max-width: 800px; 
  padding: 0 20px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 20px;
  font-family: 'Orbitron', sans-serif;
  color: white;

  span {
    color: #d8a71e;
    display: block;
    font-size: 3rem;
    letter-spacing: 8px;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    
    span {
      font-size: 2rem;
      letter-spacing: 4px;
    }
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255,255,255,0.9);
  margin-bottom: 40px;
  max-width: 600px;
  margin: 0 auto 40px;
`;

const HeroButton = styled(motion.button)`
  background: #d8a71e;
  color: #000;
  border: none;
  padding: 15px 40px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #b38f1a;
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(216, 167, 30, 0.3);
  }
`;

interface HeroProps {
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <HeroSection id="home">
      <HeroContent
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <HeroTitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          LA CAR CENTER
          <span>PRIME</span>
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Excelência em mecânica automotiva com tecnologia de ponta
        </HeroSubtitle>
        <HeroButton
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          onClick={(e) => scrollToSection(e as any, 'contact')}
        >
          AGENDAR SERVIÇO
        </HeroButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;