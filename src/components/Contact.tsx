import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
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

const ContactContainer = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
`;

const ContactInfo = styled(motion.div)`
  flex: 1;
  min-width: 300px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 30px;

  i {
    font-size: 1.5rem;
    color: #d8a71e;
    min-width: 40px;
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 5px;
    color: #d8a71e;
  }

  p {
    color: rgba(255,255,255,0.9);
    line-height: 1.6;
  }
`;

const ContactForm = styled(motion.form)`
  flex: 1;
  min-width: 300px;
  background: #1a1a1a;
  border-radius: 10px;
  padding: 40px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormControl = styled.input`
  width: 100%;
  padding: 12px 15px;
  background: #2a2a2a;  /* Fundo mais claro para destacar */
  border: 1px solid #444;
  border-radius: 5px;
  color: #ffffff;  /* Texto branco */
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;

  &:focus {
    outline: none;
    border-color: #d8a71e;
    background: #333;
  }

  &::placeholder {
    color: #aaa;  /* Placeholder cinza claro */
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  background: #2a2a2a;  /* Fundo mais claro para destacar */
  border: 1px solid #444;
  border-radius: 5px;
  color: #ffffff;  /* Texto branco */
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  min-height: 120px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #d8a71e;
    background: #333;
  }

  &::placeholder {
    color: #aaa;  /* Placeholder cinza claro */
  }
`;

const FormBtn = styled.button`
  width: 100%;
  padding: 15px;
  background: #d8a71e;
  color: #000;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #b38f1a;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(216, 167, 30, 0.3);
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*Novo contato do site LA Car Center Prime*%0A%0A
*Nome:* ${formData.nome}%0A
*Email:* ${formData.email}%0A
*Telefone:* ${formData.telefone}%0A
*Mensagem:* ${formData.mensagem}`;

    const whatsappUrl = `https://wa.me/554135013045?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <ContactSection id="contact">
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contato
        </Title>
        <ContactContainer>
          <ContactInfo
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <InfoItem>
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>ENDEREÇO</h3>
                <p>R. Ten. Tito Teixeira de Castro, 750 - Boqueirão, Curitiba - PR</p>
              </div>
            </InfoItem>
            <InfoItem>
              <i className="fas fa-phone-alt"></i>
              <div>
                <h3>TELEFONE</h3>
                <p>(41) 3501-3045</p>
              </div>
            </InfoItem>
            <InfoItem>
              <i className="fas fa-envelope"></i>
              <div>
                <h3>EMAIL</h3>
                <p>Lacarcenterprime@gmail.com</p>
              </div>
            </InfoItem>
            <InfoItem>
              <i className="fas fa-clock"></i>
              <div>
                <h3>HORÁRIO</h3>
                <p>Segunda a Sexta: 08:00 - 18:00</p>
              </div>
            </InfoItem>
          </ContactInfo>
          <ContactForm
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <FormGroup>
              <FormControl
                type="text"
                name="nome"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                type="email"
                name="email"
                placeholder="Seu email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                type="tel"
                name="telefone"
                placeholder="Seu telefone"
                value={formData.telefone}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <TextArea
                name="mensagem"
                placeholder="Sua mensagem"
                value={formData.mensagem}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormBtn type="submit">Enviar via WhatsApp</FormBtn>
          </ContactForm>
        </ContactContainer>
      </Container>
    </ContactSection>
  );
};

export default Contact;