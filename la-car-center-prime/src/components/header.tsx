import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const logo = "https://i.ibb.co/p6bqfcTQ/Design-sem-nome-4-removebg-preview.png"

const Navbar = styled(motion.nav)<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${props => props.scrolled ? '15px 0' : '20px 0'};
  z-index: 1000;
  transition: all 0.3s ease;
  background: ${props => props.scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent'};
  border-bottom: ${props => props.scrolled ? '1px solid #d8a71e' : 'none'};
`;

const NavbarContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
`;

const NavMenu = styled.ul<{ isOpen: boolean }>`
  display: flex;
  gap: 30px;
  list-style: none;

  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    left: ${props => props.isOpen ? '0' : '-100%'};
    width: 100%;
    height: calc(100vh - 80px);
    background: #0a0a0a;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
  }
`;

const NavItem = styled.li`
  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 1px;
    transition: color 0.3s;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: #d8a71e;
      transition: width 0.3s ease;
    }

    &:hover {
      color: #d8a71e;
      
      &::after {
        width: 100%;
      }
    }
  }
`;

const MenuToggle = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`;

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ menuOpen, setMenuOpen, scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar scrolled={scrolled}>
      <NavbarContainer>
        <Logo src={logo} alt="LA Car Center Prime" />
        <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fas fa-${menuOpen ? 'times' : 'bars'}`}></i>
        </MenuToggle>
        <NavMenu isOpen={menuOpen}>
          <NavItem><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>INÍCIO</a></NavItem>
          <NavItem><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>SOBRE</a></NavItem>
          <NavItem><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>SERVIÇOS</a></NavItem>
          <NavItem><a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')}>GALERIA</a></NavItem>
          <NavItem><a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')}>DEPOIMENTOS</a></NavItem>
          <NavItem><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>CONTATO</a></NavItem>
        </NavMenu>
      </NavbarContainer>
    </Navbar>
  );
};

export default Header;