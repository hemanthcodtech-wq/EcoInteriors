import React from 'react';
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import { motion } from 'framer-motion';
import TypewriterText from '../components/TypewriterText';
import { StaggerContainer, StaggerItem, CurtainImageReveal } from '../components/ScrollAnimations';
import './pages.css';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const images = [
    { src: gallery1, title: 'Luxury Modular Kitchen', category: 'Kitchens' },
    { src: gallery2, title: 'Elegant Bedroom Interior', category: 'Bedrooms' },
    { src: gallery3, title: 'Modern Living Space', category: 'Living Rooms' },
    { src: gallery4, title: 'Custom Walk-In Wardrobe', category: 'Wardrobes' },
  ];

  return (
    <>
      <div className="gallery-page animate-fade-in">
      <div className="page-header" style={{paddingBottom: '80px'}}>
        <div className="container text-center">
          <span className="subtitle">Our Portfolio</span>
          <TypewriterText 
            Component={motion.h1}
            className="page-title" 
            text="Inspiring Designs<br/>Beautiful Spaces" 
          />
          <p className="page-desc">Browse through our collection of beautifully crafted interiors, showcasing our commitment to quality, elegance, and modern design.</p>
        </div>
      </div>

      <div className="container section">
        <StaggerContainer className="masonry-gallery">
          {images.map((img, index) => (
            <StaggerItem 
              key={index} 
              className="masonry-item" 
            >
              <div className="image-wrapper" onClick={() => setSelectedImage(img)}>
                <img src={img.src} alt={img.title} />
                <div className="hover-overlay">
                  <span className="image-category">{img.category}</span>
                  <h3 className="image-title">{img.title}</h3>
                  <button className="view-btn">View Project</button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="lightbox-modal" 
          onClick={() => setSelectedImage(null)} 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100vw', 
            height: '100vh', 
            backgroundColor: 'rgba(0, 0, 0, 0.85)', 
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 999999, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            cursor: 'zoom-out', 
            opacity: 0, 
            animation: 'fadeIn 0.3s forwards',
            padding: '1rem',
            margin: 0
          }}
        >
          <span 
            style={{ 
              position: 'absolute', 
              top: '15px', 
              right: '25px', 
              color: '#fff', 
              fontSize: '3.5rem', 
              cursor: 'pointer', 
              fontWeight: '300',
              lineHeight: '1',
              zIndex: 100000,
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}
          >
            &times;
          </span>
          
          <div 
            style={{ 
              position: 'relative', 
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title} 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '75vh', 
                objectFit: 'contain', 
                border: '3px solid var(--accent-color)', 
                borderRadius: '12px', 
                boxShadow: '0 15px 50px rgba(0,0,0,0.6)', 
                transform: 'scale(0.95)', 
                animation: 'zoomIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards' 
              }} 
            />
            <div style={{ marginTop: '1.5rem', textAlign: 'center', color: '#fff' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', marginBottom: '0.3rem', color: 'var(--accent-color)' }}>{selectedImage.title}</h3>
              <span style={{ letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', color: '#eaeaea' }}>{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
