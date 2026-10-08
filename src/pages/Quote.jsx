import React, { useState } from 'react';
import { ArrowRight, Check, LayoutGrid, Utensils, Bed, Home as HomeIcon, Briefcase, Hammer, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import TypewriterText from '../components/TypewriterText';
import bgImage from '../assets/home-cta.jpg';
import './pages.css';

const Quote = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppSubmit = () => {
    const { name, phone, email } = formData;
    if (!name || !phone) {
      alert("Please fill in your Name and Phone Number.");
      return;
    }

    let serviceNames = services
      .filter(s => selectedServices.includes(s.id))
      .map(s => s.name)
      .join(', ');
    
    if (!serviceNames) serviceNames = 'None selected';

    const message = `Hello Eco Home Interiors!\n\nI would like to get a quote.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email || 'N/A'}\n*Services Interested In:* ${serviceNames}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919885256868?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    { id: 'wardrobes', name: 'Modular Wardrobes', icon: <LayoutGrid size={28} /> },
    { id: 'kitchens', name: 'Modular Kitchens', icon: <Utensils size={28} /> },
    { id: 'bedroom', name: 'Bedroom Interiors', icon: <Bed size={28} /> },
    { id: 'living', name: 'Living Room Interiors', icon: <HomeIcon size={28} /> },
    { id: 'office', name: 'Office Interiors', icon: <Briefcase size={28} /> },
    { id: 'custom', name: 'Custom Wood Works', icon: <Hammer size={28} /> }
  ];

  return (
    <div className="quote-page animate-fade-in">
      <div className="page-header" style={{
        paddingBottom: '120px', 
        backgroundImage: `linear-gradient(to bottom, rgba(36,4,20,0.8), rgba(36,4,20,0.9)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container text-center">
          <span className="subtitle" style={{ color: 'var(--accent-color)' }}>Get a Quote</span>
          <TypewriterText 
            Component={motion.h1}
            className="page-title" 
            style={{ color: 'var(--text-light)' }} 
            text="Your Dream Space<br/>Starts Here" 
          />
          <p className="page-desc" style={{ color: '#eaeaea' }}>Fill in the details below and get a personalized quote for your interior project. It's quick, easy and completely free.</p>
        </div>
      </div>

      <div className="container" style={{marginTop: '-60px', position: 'relative', zIndex: 10}}>
        <div className="quote-form-container quote-form-card">
          
          <div className="quote-steps">
            <div className="quote-step active">
              <div className="quote-step-number">1</div>
              <div className="quote-step-text">Details & Services</div>
            </div>
            <div className="quote-step">
              <div className="quote-step-number">2</div>
              <div className="quote-step-text">Get Quote on WhatsApp</div>
            </div>
          </div>

          <div className="form-section" style={{ marginTop: '3rem' }}>
            <h3 style={{marginBottom: '2rem', color: '#222', fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '10px'}}>
              <span style={{ color: 'var(--accent-color)', fontSize: '1.2rem' }}>01.</span> Tell Us About You
            </h3>
            
            <div className="form-row" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
              <div className="form-group">
                <label style={{display: 'block', marginBottom: '0.8rem', fontSize: '0.95rem', fontWeight: 'bold', color: '#444'}}>Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="form-control" style={{background: '#f9f9f9', border: '1px solid #e0e0e0', color: '#333', padding: '15px', borderRadius: '15px'}} placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label style={{display: 'block', marginBottom: '0.8rem', fontSize: '0.95rem', fontWeight: 'bold', color: '#444'}}>Phone Number *</label>
                <div style={{display: 'flex'}}>
                  <span style={{padding: '15px', background: '#f0f0f0', border: '1px solid #e0e0e0', borderRight: 'none', borderRadius: '15px 0 0 15px', color: '#666', fontWeight: 'bold'}}>+91</span>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="form-control" style={{background: '#f9f9f9', border: '1px solid #e0e0e0', borderRadius: '0 15px 15px 0', color: '#333', padding: '15px'}} placeholder="10-digit number" />
                </div>
              </div>
              <div className="form-group">
                <label style={{display: 'block', marginBottom: '0.8rem', fontSize: '0.95rem', fontWeight: 'bold', color: '#444'}}>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-control" style={{background: '#f9f9f9', border: '1px solid #e0e0e0', color: '#333', padding: '15px', borderRadius: '15px'}} placeholder="Enter your email" />
              </div>
            </div>

            <h3 style={{marginBottom: '2rem', color: '#222', fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '10px'}}>
              <span style={{ color: 'var(--accent-color)', fontSize: '1.2rem' }}>02.</span> Select Your Service
            </h3>
            
            <div className="service-selector" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              {services.map(service => (
                <div 
                  key={service.id} 
                  className={`service-option ${selectedServices.includes(service.id) ? 'selected' : ''}`}
                  onClick={() => toggleService(service.id)}
                  style={{ 
                    border: selectedServices.includes(service.id) ? '2px solid var(--accent-color)' : '1px solid #e0e0e0',
                    padding: '1.5rem', 
                    borderRadius: '15px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem', 
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backgroundColor: selectedServices.includes(service.id) ? 'rgba(216, 170, 90, 0.05)' : '#fff',
                    boxShadow: selectedServices.includes(service.id) ? '0 5px 15px rgba(216, 170, 90, 0.1)' : 'none'
                  }}
                >
                  <div className="service-option-icon" style={{ color: selectedServices.includes(service.id) ? 'var(--accent-color)' : '#888', transition: 'all 0.3s ease' }}>
                    {service.icon}
                  </div>
                  <div style={{flex: 1, fontWeight: '600', color: selectedServices.includes(service.id) ? 'var(--primary-color)' : '#444'}}>{service.name}</div>
                  <div style={{ 
                    width: '24px', 
                    height: '24px', 
                    borderRadius: '50%', 
                    border: selectedServices.includes(service.id) ? 'none' : '2px solid #ddd',
                    backgroundColor: selectedServices.includes(service.id) ? 'var(--accent-color)' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {selectedServices.includes(service.id) && <Check size={16} color="#fff" strokeWidth={3} />}
                  </div>
                </div>
              ))}
            </div>

            <div className="quote-footer-row">
              <div style={{color: '#666', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '10px'}}>
                <Shield size={20} color="var(--accent-color)" />
                <span>Your information is safe with us. We never share your details.</span>
              </div>
              <button type="button" onClick={handleWhatsAppSubmit} className="btn btn-primary" style={{padding: '1rem 3rem', fontSize: '1.1rem', borderRadius: '30px'}}>
                Get Quote via WhatsApp <ArrowRight size={18} style={{marginLeft: '8px'}}/>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Quote;
