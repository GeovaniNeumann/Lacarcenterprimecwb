import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const heroBg = "https://i.ibb.co/84NggqS2/Design-sem-nome-3.jpg"

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #d8a71e;
    --dark: #0a0a0a;
    --light: #ddd7d7;
    --gray: #1a1a1a;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* CORREÇÃO PARA SCROLL LATERAL */
  html, body {
    max-width: 100%;
    overflow-x: hidden;
    position: relative;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--dark);
    color: var(--light);
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    width: 100%;
  }

  #root {
    width: 100%;
    overflow-x: hidden;
    position: relative;
  }

  h1, h2, h3, h4 {
    font-family: 'Orbitron', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--dark);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 15px;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 0 12px;
    }
  }
`;

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const BgImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${heroBg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: -2;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(10,10,10,0.9) 0%, rgba(0,0,0,0.7) 100%);
  z-index: -1;
`;

const FloatBtn = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background: #25D366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
  transition: all 0.3s ease;
  z-index: 999;
  text-decoration: none; /* Remove underline do link */

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
    text-decoration: none;
  }

  i, svg {
    text-decoration: none;
  }
`;

const Modal = styled.div<{ $show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  opacity: ${props => props.$show ? 1 : 0};
  pointer-events: ${props => props.$show ? 'all' : 'none'};
  transition: opacity 0.3s ease;
`;

const ModalImg = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 5px;
`;

const ModalClose = styled.span`
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 3rem;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary);
    transform: rotate(90deg);
  }
`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (imgSrc: string) => {
    setModalImage(imgSrc);
    setModalOpen(true);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <BgImage />
        <Overlay />

        <Header 
          menuOpen={menuOpen} 
          setMenuOpen={setMenuOpen} 
          scrollToSection={scrollToSection} 
        />
        
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Services />
        <Gallery openModal={openModal} />
        <Testimonials />
        <Contact />
        <Footer scrollToSection={scrollToSection} />

        <FloatBtn href="https://wa.me/554135013045" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </FloatBtn>

        <Modal $show={modalOpen} onClick={() => setModalOpen(false)}>
          <ModalClose onClick={() => setModalOpen(false)}>×</ModalClose>
          <ModalImg src={modalImage} alt="Gallery" />
        </Modal>
      </AppContainer>
    </>
  );
}

export default App;