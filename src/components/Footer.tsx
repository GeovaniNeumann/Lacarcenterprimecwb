import React from 'react';
import styled from 'styled-components';

const logo = "https://i.ibb.co/XrcnZ96x/Design-sem-nome-4.png";

const FooterSection = styled.footer`
  background: #0a0a0a;
  padding: 50px 20px 20px;
  border-top: 1px solid #d8a71e;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const FooterLogo = styled.img`
  height: 60px; /* Aumentei um pouco para dar mais destaque */
  display: block;
  margin: 0 auto 20px; /* O auto nas laterais centraliza o bloco */
  object-fit: contain;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: #1a1a1a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    background: #d8a71e;
    color: #000;
    transform: translateY(-3px);
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

const FooterLink = styled.a`
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    color: #d8a71e;
  }
`;

const Copyright = styled.div`
  color: rgba(255,255,255,0.5);
  font-size: 0.85rem;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.1);

  a {
    color: #d8a71e;
    text-decoration: none;
  }
`;

interface FooterProps {
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <FooterSection>
      <Container>
        <FooterLogo src={logo} alt="LA Car Center Prime" />
        <SocialLinks>
          <SocialLink href="https://www.facebook.com/L.Acarcenterprime" target="_blank">
            <i className="fab fa-facebook-f"></i>
          </SocialLink>
          <SocialLink href="https://www.instagram.com/lacarcenter_prime/" target="_blank">
            <i className="fab fa-instagram"></i>
          </SocialLink>
          <SocialLink href="https://wa.me/554135013045" target="_blank">
            <i className="fab fa-whatsapp"></i>
          </SocialLink>
        </SocialLinks>
        <FooterLinks>
          <FooterLink href="#home" onClick={(e) => scrollToSection(e, 'home')}>Início</FooterLink>
          <FooterLink href="#about" onClick={(e) => scrollToSection(e, 'about')}>Sobre</FooterLink>
          <FooterLink href="#services" onClick={(e) => scrollToSection(e, 'services')}>Serviços</FooterLink>
          <FooterLink href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')}>Galeria</FooterLink>
          <FooterLink href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contato</FooterLink>
        </FooterLinks>
        <Copyright>
          <p>© LA Car Center Prime - Todos os direitos reservados.</p>
          <div>Desenvolvido por <a href="https://portifoliogeovani.netlify.app/" target="_blank">Geovani Neumann</a></div>
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer;