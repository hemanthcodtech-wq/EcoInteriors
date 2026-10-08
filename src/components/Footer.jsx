import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import logoImg from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <Link to="/" className="logo footer-logo">
              <img src={logoImg} alt="ECO Home Interiors" style={{ height: '140px', width: 'auto', marginBottom: '1rem' }} />
            </Link>
            <p className="footer-desc">
              Design • Build • Transform
            </p>
            <p className="footer-about">
              Premium interiors and custom wood works for beautiful spaces and lasting impressions.
            </p>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-links">
              <li><Link to="/services">Modular Wardrobes</Link></li>
              <li><Link to="/services">Modular Kitchens</Link></li>
              <li><Link to="/services">Bedroom Interiors</Link></li>
              <li><Link to="/services">Living Room Interiors</Link></li>
              <li><Link to="/services">Office Interiors</Link></li>
              <li><Link to="/services">Custom Wood Works</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/quote">Get a Quote</Link></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="contact-info">
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+91 98852 56866</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>krishna9885256866@gmail.com</span>
              </li>
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>D no-87/1392-B-C-11, shop no 2, opp- Omega hospital,<br/>100ft road, vasavi nagar, kurnool city, AP-518002</span>
              </li>
            </ul>

            <div className="social-links">
              <h4 className="social-heading">Follow Us</h4>
              <div className="social-icons">
                <a href="#"><FaFacebookF size={20} /></a>
                <a href="#"><FaInstagram size={20} /></a>
                <a href="#"><FaTwitter size={20} /></a>
                <a href="#"><FaLinkedinIn size={20} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ECO Home Interiors and Wood Works. All Rights Reserved.</p>
          <div className="footer-signature">A Spaces for a Better Tomorrow</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
