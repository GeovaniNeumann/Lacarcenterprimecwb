import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { galleryImages } from '../data/gallery';

const GallerySection = styled.section`
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

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 4/3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }

    .overlay {
      opacity: 1;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    display: flex;
    align-items: flex-end;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;

interface GalleryProps {
  openModal: (img: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ openModal }) => {
  return (
    <GallerySection id="gallery">
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Galeria
        </Title>
        <GalleryGrid>
          {galleryImages.map((img, index) => (
            <GalleryItem
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => openModal(img)}
            >
              <img src={img} alt={`Veículo ${index + 1}`} />
              <div className="overlay">
                <i className="fas fa-search-plus" style={{ color: '#d8a71e', fontSize: '1.5rem' }}></i>
              </div>
            </GalleryItem>
          ))}
        </GalleryGrid>
      </Container>
    </GallerySection>
  );
};

export default Gallery;