import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const testimonials = [
  { text: "Serviço de qualidade e preço justo, super indico!!!", author: "Dhouglas Oliveira" },
  { text: "Pessoal honesto e dedicado, lugar seguro e atendimento excelente eu recomendo...", author: "Jessy Baruck" },
  { text: "Em menos de uma semana eu tava com o carro, tranquilo até hoje.", author: "Ademir Ribas" }
];

const TestimonialsSection = styled.section`
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

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const TestimonialCard = styled(motion.div)`
  background: #1a1a1a;
  border-radius: 10px;
  padding: 30px;
  position: relative;

  &::before {
    content: '"';
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 4rem;
    color: #d8a71e;
    opacity: 0.2;
    font-family: serif;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.8;
    margin-bottom: 20px;
    font-style: italic;
    color: rgba(255,255,255,0.9);
  }

  h4 {
    color: #d8a71e;
    font-size: 1rem;
    text-align: right;
  }
`;

const Testimonials: React.FC = () => {
  return (
    <TestimonialsSection id="testimonials">
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Depoimentos
        </Title>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <p>"{testimonial.text}"</p>
              <h4>{testimonial.author}</h4>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;