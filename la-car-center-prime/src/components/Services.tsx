import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';

const ServicesSection = styled.section`
  padding: 80px 20px;
  background: #111111;
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ServiceCard = styled(motion.div)`
  background: #1a1a1a;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(216, 167, 30, 0.2);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .content {
    padding: 25px;
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: #d8a71e;
  }

  p {
    color: rgba(255,255,255,0.8);
    line-height: 1.6;
    font-size: 0.95rem;
  }
`;

const Services: React.FC = () => {
  return (
    <ServicesSection id="services">
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Nossos Serviços
        </Title>
        <ServicesGrid>
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <img src={service.icon} alt={service.title} />
              <div className="content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services;