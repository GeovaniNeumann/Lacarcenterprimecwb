import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const aboutImg = "https://i.ibb.co/fVWnvpg9/Design-sem-nome-4.jpg"

const AboutSection = styled.section`
  padding: 80px 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: white;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: #d8a71e;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
`;

const AboutImg = styled(motion.img)`
  flex: 1;
  min-width: 300px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
`;

const AboutContent = styled(motion.div)`
  flex: 1;
  min-width: 300px;
`;

const AboutText = styled.p`
  margin-bottom: 20px;
  color: rgba(255,255,255,0.9);
  line-height: 1.8;
  font-size: 1rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled(motion.div)`
  text-align: center;
  padding: 20px;
  background: #1a1a1a;
  border-radius: 5px;
  border-bottom: 3px solid #d8a71e;

  i {
    font-size: 2rem;
    color: #d8a71e;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 10px;
    color: white;
  }

  p {
    font-size: 0.9rem;
    color: rgba(255,255,255,0.7);
  }
`;

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Sobre Nós
        </Title>
        <AboutContainer>
          <AboutImg
            src={aboutImg}
            alt="LA Car Center Prime"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          />
          <AboutContent
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AboutText>
              A LA Car Center Prime é referência em serviços automotivos, combinando tecnologia de ponta com mão de obra especializada. Nossa equipe altamente qualificada está comprometida em oferecer o melhor atendimento e soluções personalizadas para seu veículo.
            </AboutText>
            <AboutText>
              Com anos de experiência no mercado, nos destacamos pela transparência, qualidade nos serviços e paixão por automóveis. Seu carro está em boas mãos conosco.
            </AboutText>
            <FeaturesGrid>
              {[
                { icon: 'award', title: 'Qualidade', text: 'Padrões elevados em todos os serviços' },
                { icon: 'clock', title: 'Pontualidade', text: 'Entregas no prazo combinado' },
                { icon: 'shield-alt', title: 'Garantia', text: 'Todos os serviços com garantia' }
              ].map((item, index) => (
                <FeatureItem
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <i className={`fas fa-${item.icon}`}></i>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </FeatureItem>
              ))}
            </FeaturesGrid>
          </AboutContent>
        </AboutContainer>
      </Container>
    </AboutSection>
  );
};

export default About;