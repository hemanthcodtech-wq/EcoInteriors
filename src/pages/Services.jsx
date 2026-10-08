import React from 'react';
import { ArrowRight, LayoutGrid, Utensils, Bed, Home as HomeIcon, Briefcase, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TypewriterText from '../components/TypewriterText';
import gallery4 from '../assets/gallery4.jpg';
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import afterLiving from '../assets/after.jpg';
import aboutImg from '../assets/home-about.jpg';
import './pages.css';

const Services = () => {
  const services = [
    { title: 'Modular Wardrobes', desc: 'Smart storage solutions with premium finishes and modern designs.', image: gallery4, icon: <LayoutGrid size={24}/> },
    { title: 'Modular Kitchens', desc: 'Stylish, functional and space-efficient kitchens for every home.', image: gallery1, icon: <Utensils size={24}/> },
    { title: 'Bedroom Interiors', desc: 'Comfortable, elegant and personalized bedroom designs.', image: gallery2, icon: <Bed size={24}/> },
    { title: 'Living Room Interiors', desc: 'Modern and timeless designs for your living spaces.', image: gallery3, icon: <HomeIcon size={24}/> },
    { title: 'Office Interiors', desc: 'Productive and inspiring workspaces for modern businesses.', image: afterLiving, icon: <Briefcase size={24}/> },
    { title: 'Custom Wood Works', desc: 'Bespoke wood creations for unique spaces and furniture.', image: aboutImg, icon: <Hammer size={24}/> }
  ];

  return (
    <div className="services-page animate-fade-in">
      <div className="page-header" style={{ backgroundImage: `linear-gradient(to bottom, rgba(36,4,20,0.8), rgba(36,4,20,0.9)), url(${aboutImg})` }}>
        <div className="container text-center">
          <span className="subtitle" style={{ color: 'var(--accent-color)' }}>Our Services</span>
          <TypewriterText 
            Component={motion.h1}
            className="page-title" 
            style={{ color: 'var(--text-light)' }} 
            text="Tailored Interiors<br/>for Every Space" 
          />
          <p className="page-desc" style={{ color: '#eaeaea' }}>From modular solutions to custom wood works, we offer a complete range of interior services to make your space truly yours.</p>
        </div>
      </div>

      <div className="container section">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card animate-fade-in" style={{animationDelay: `${index * 0.1}s`, overflow: 'hidden', borderRadius: '15px', backgroundColor: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
              <div style={{ height: '250px', overflow: 'hidden' }}>
                <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="service-img-hover" />
              </div>
              <div className="service-content" style={{ padding: '2rem', position: 'relative' }}>
                <div className="service-icon" style={{ backgroundColor: 'var(--accent-color)', color: '#fff', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: '-30px', right: '2rem', boxShadow: '0 5px 15px rgba(216, 170, 90, 0.4)' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '1rem', color: '#222' }}>{service.title}</h3>
                <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>{service.desc}</p>
                <Link to="/quote" className="service-link" style={{ color: 'var(--accent-color)', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                  Get a Quote <ArrowRight size={16} style={{marginLeft: '5px'}}/>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-banner">
        <div className="container">
          <div className="cta-banner-content">
            <div className="cta-text">
              <div className="cta-icon">🏠</div>
              <h3>Every Space Has a Story.<br/>We Design Yours.</h3>
            </div>
            <a href="/quote" className="btn btn-primary">Get a Quote <ArrowRight size={18} style={{marginLeft: '8px'}}/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
