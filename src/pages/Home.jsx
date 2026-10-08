import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Ruler, PenTool, Image as ImageIcon, Layers, Hammer, Award, MapPin, Phone, Mail, MessageSquare, LayoutGrid, Utensils, Bed, Home as HomeIcon, Briefcase, Diamond } from 'lucide-react';
import { motion } from 'framer-motion';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TypewriterText from '../components/TypewriterText';
import { FadeInUp, StaggerContainer, StaggerItem, GoldLineDrawing } from '../components/ScrollAnimations';
import homeHeroBg from '../assets/home-hero.jpg';
import homeAboutImg from '../assets/home-about.jpg';
import homeCtaBg from '../assets/home-cta.jpg';
import beforeLiving from '../assets/before.jpg';
import afterLiving from '../assets/after.jpg';
import beforeWardrobe from '../assets/before-wardrobe.jpg';
import afterWardrobe from '../assets/gallery4.jpg';
import beforeKitchen from '../assets/before-kitchen.jpg';
import afterKitchen from '../assets/gallery1.jpg';
import beforeBedroom from '../assets/before-bedroom.jpg';
import afterBedroom from '../assets/gallery2.jpg';
import './Home.css';

const Home = () => {
  const [activeExpertise, setActiveExpertise] = useState(0);

  const transformations = [
    { title: 'Living Room TV Feature Wall', location: 'Tolichowki, Hyderabad', before: beforeWardrobe, after: afterWardrobe },
    { title: 'Modular Kitchen & Storage', location: 'Shaikpet, Hyderabad', before: beforeKitchen, after: afterKitchen },
    { title: 'Designer Living Lounge', location: 'Jubilee Hills, Hyderabad', before: beforeLiving, after: afterLiving },
    { title: 'Luxury Master Bedroom Suite', location: 'Tolichowki, Hyderabad', before: beforeBedroom, after: afterBedroom }
  ];

  const expertiseData = [
    {
      id: '01',
      name: 'Complete Interiors',
      icon: HomeIcon,
      title: 'Complete Home Interior Design',
      desc: 'From structural space planning and 3D photorealistic renderings to master carpentry, false ceilings, ambient lighting, and final styling, we craft bespoke living environments tailored to your lifestyle.',
      scope: ['Complete Home Interior Design', 'Bedroom Interior Design', 'Living Room Interior Design', 'Apartment & Villa Interiors', 'End-to-end Interior Execution'],
      buttonText: 'Book Complete Interiors'
    },
    {
      id: '02',
      name: 'Modular Kitchens',
      icon: Utensils,
      title: 'Bespoke Modular Kitchens',
      desc: 'Ergonomically designed modular kitchens that blend seamless functionality with modern aesthetics. We use high-moisture resistant marine plywood and premium European hardware for lifelong durability.',
      scope: ['Custom Cabinetry & Storage', 'Built-in Appliance Integration', 'Premium Countertops & Backsplashes', 'Under-cabinet Ambient Lighting', 'Island Kitchen Designs'],
      buttonText: 'Get Kitchen Quote'
    },
    {
      id: '03',
      name: 'Bespoke Carpentry',
      icon: Hammer,
      title: 'Master Carpentry & Woodwork',
      desc: 'True craftsmanship lies in the details. Our master carpenters create unique, made-to-measure wooden pieces, wall paneling, and architectural elements that add warmth and character to your space.',
      scope: ['Custom Furniture Fabrication', 'Intricate Wood Paneling', 'Fluted & Louvered Walls', 'Solid Wood Dining Tables', 'Handcrafted Consoles'],
      buttonText: 'Consult Our Carpenters'
    },
    {
      id: '04',
      name: 'Custom Wardrobes',
      icon: Layers,
      title: 'Intelligent Wardrobe Systems',
      desc: 'Maximize your storage without compromising on elegance. We design ceiling-height wardrobes, walk-in closets, and sliding door systems with customized internal organizers.',
      scope: ['Walk-in Closet Design', 'Sliding & Hinged Wardrobes', 'Profile Glass Shutters', 'Internal Lighting Systems', 'Custom Drawer Organizers'],
      buttonText: 'Design Your Wardrobe'
    },
    {
      id: '05',
      name: 'TV Units & Ceilings',
      icon: ImageIcon,
      title: 'Entertainment Walls & Ceilings',
      desc: 'Transform your living room into a cinematic experience with our custom media walls, featuring floating consoles, backlit marble panels, and perfectly integrated acoustic false ceilings.',
      scope: ['Backlit TV Feature Walls', 'Floating Media Consoles', 'Gypsum False Ceilings', 'Cove Lighting Design', 'Acoustic Treatment'],
      buttonText: 'Upgrade Living Room'
    },
    {
      id: '06',
      name: 'Commercial & Renovation',
      icon: Briefcase,
      title: 'Commercial Interior Execution',
      desc: 'We deliver high-performance workspace environments and complete renovation services for offices, retail stores, and cafes, ensuring minimal downtime and maximum impact.',
      scope: ['Office Workspace Design', 'Retail Showroom Interiors', 'Cafe & Restaurant Fit-outs', 'Complete Structural Renovation', 'Commercial Lighting & HVAC'],
      buttonText: 'Discuss Commercial Project'
    },
    {
      id: '07',
      name: 'Turnkey Design to Execution',
      icon: Award,
      title: 'Seamless Turnkey Delivery',
      desc: 'A single point of contact from blank canvas to move-in day. We handle civil works, plumbing, electricals, carpentry, and finishing, ensuring strict quality control at every phase.',
      scope: ['Project Management', 'Civil & MEP Works', 'Flooring & Tiling', 'Painting & Wall Finishes', 'Final Deep Cleaning'],
      buttonText: 'Start Turnkey Project'
    },
    {
      id: '08',
      name: 'Hyderabad Turnkey Studio & Workshop',
      icon: MapPin,
      title: 'Local Studio & Workshop',
      desc: 'Operating our own dedicated carpentry workshop in Hyderabad allows us to bypass middlemen, ensuring uncompromising material quality, rapid delivery times, and direct cost savings.',
      scope: ['In-house Manufacturing', 'Direct Factory Pricing', 'Material Testing Lab', 'Pre-assembly Checks', 'Local Warranty Support'],
      buttonText: 'Visit Our Workshop'
    },
    {
      id: '09',
      name: 'Complete Interiors Specialists',
      icon: CheckCircle,
      title: 'Your Dedicated Interior Partners',
      desc: 'We are a passionate team of designers, engineers, and craftsmen dedicated to creating spaces that tell your unique story through flawless execution and premium materials.',
      scope: ['Dedicated Design Team', 'Expert Master Craftsmen', 'Transparent Costing', 'Timeline Guarantee', 'After-sales Service'],
      buttonText: 'Meet The Team'
    }
  ];

  const testimonialsData = [
    {
      text: "ECO Home Interiors completely transformed our bare 3BHK into a luxury home. Their carpentry finishes are flawless, and they delivered exactly what they promised in the 3D renders. Highly recommend their turnkey services!",
      initials: "SA",
      name: "Syed Ali",
      location: "Tolichowki, Hyderabad"
    },
    {
      text: "We needed a quick turnaround for our modular kitchen and wardrobes. The team not only delivered on time but the quality of the marine ply and hardware was top-notch. Very professional workflow.",
      initials: "RK",
      name: "Ravi Kumar",
      location: "Shaikpet, Hyderabad"
    },
    {
      text: "The customized TV unit and false ceiling work in my living room is stunning. The lighting integration is exactly what I wanted. Best interior carpenters in Hyderabad by far!",
      initials: "MF",
      name: "Mohammed Farooq",
      location: "Jubilee Hills, Hyderabad"
    },
    {
      text: "Our office renovation was handled perfectly. They worked around our schedule to minimize downtime, and the modern workstations they built are incredibly sturdy. Highly impressed.",
      initials: "NS",
      name: "Neha Sharma",
      location: "Banjara Hills, Hyderabad"
    },
    {
      text: "I hired them for custom wardrobes, and the sliding systems they used are so smooth. The internal organization they designed for my wife's walk-in closet is a lifesaver.",
      initials: "AR",
      name: "Abdul Rahman",
      location: "Mehdipatnam, Hyderabad"
    },
    {
      text: "From civil works to the final coat of paint, everything was seamless. We didn't have to hire separate contractors. ECO Home Interiors managed the entire turnkey project brilliantly.",
      initials: "VD",
      name: "Vikram Desai",
      location: "Gachibowli, Hyderabad"
    }
  ];

  const currentExpertise = expertiseData[activeExpertise];

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero" style={{ 
        backgroundImage: `linear-gradient(to right, rgba(36,4,20,0.95) 0%, rgba(36,4,20,0.7) 40%, transparent 100%), url(${homeHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container hero-container">
          <div className="hero-content" style={{ maxWidth: '600px' }}>
            <span className="subtitle" style={{ color: 'var(--accent-color)' }}>Transform Your Space</span>
            <TypewriterText 
              Component={motion.h1}
              className="hero-title" 
              style={{ color: 'var(--text-light)' }} 
              text="Beautiful Interiors<br/>for a Better Life" 
            />
            <p className="hero-desc" style={{ color: '#eaeaea' }}>
              Custom modular interiors, premium wood works, and elegant designs that bring comfort, style, and value to your home and workspace.
            </p>
            <div className="hero-actions">
              <Link to="/quote" className="btn btn-primary">Get a Quote</Link>
              <Link to="/services" className="btn btn-outline" style={{ borderColor: 'var(--text-light)', color: 'var(--text-light)' }}>
                Our Services <ArrowRight size={18} style={{marginLeft: '8px'}}/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Slider Section */}
      <section className="section" style={{ backgroundColor: '#fcfcf7', padding: '6rem 0' }}>
        <div className="container">
          <FadeInUp className="text-center" style={{ marginBottom: '4rem' }}>
            <span className="subtitle" style={{ color: 'var(--accent-color)', letterSpacing: '3px', fontSize: '0.9rem', fontWeight: 'bold' }}>TRANSFORMATIONS</span>
            <h2 className="section-title" style={{ color: '#222', fontSize: '3rem', marginTop: '1rem', marginBottom: '1rem', fontFamily: 'Playfair Display, serif' }}>Before & After Showcase</h2>
            <GoldLineDrawing width="100px" direction="center" style={{ margin: '0 auto 1.5rem auto' }} />
            <p style={{ color: '#666', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
              Drag the golden divider to see the structural conversion from bare rooms to customized designer living.
            </p>
          </FadeInUp>
          
          <StaggerContainer className="transformations-grid">
            {transformations.map((item, index) => (
              <StaggerItem key={index} className="transformation-card" style={{display: 'flex', flexDirection: 'column'}}>
                <div className="service-slider" style={{ width: '100%', marginBottom: '1rem' }}>
                  <BeforeAfterSlider beforeImage={item.before} afterImage={item.after} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 5px' }}>
                  <h3 style={{ color: '#222', fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', margin: 0, fontWeight: 'bold' }}>{item.title}</h3>
                  <span style={{ color: '#888', fontSize: '0.9rem' }}>{item.location}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <FadeInUp className="text-center" style={{ marginBottom: '4rem' }}>
            <span className="subtitle" style={{ color: 'var(--accent-color)', letterSpacing: '3px', fontSize: '0.9rem', fontWeight: 'bold' }}>OUR EXPERTISE</span>
            <h2 className="section-title" style={{ color: '#222', fontSize: '3rem', marginTop: '1rem', marginBottom: '1rem', fontFamily: 'Playfair Display, serif' }}>From Vision to Reality</h2>
            <GoldLineDrawing width="100px" direction="center" style={{ margin: '0 auto 1.5rem auto' }} />
            <p style={{ color: '#666', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
              From handcrafted furniture to complete turnkey interiors, every detail is designed and executed with precision.
            </p>
          </FadeInUp>
          
          <div className="expertise-grid">
            <div className="expertise-list">
              <ul className="custom-check-list expertise-tabs">
                {expertiseData.map((item, index) => {
                  const IconComponent = item.icon || CheckCircle;
                  return (
                  <li 
                    key={index} 
                    onClick={() => setActiveExpertise(index)}
                    className={`expertise-tab-item ${activeExpertise === index ? 'active' : ''}`}
                    style={{ 
                      cursor: 'pointer', 
                      padding: '12px 20px', 
                      borderRadius: '8px', 
                      transition: 'all 0.3s ease',
                      backgroundColor: activeExpertise === index ? 'rgba(216, 170, 90, 0.1)' : 'transparent',
                      color: activeExpertise === index ? 'var(--primary-color)' : '#666',
                      fontWeight: activeExpertise === index ? 'bold' : 'normal',
                      display: 'flex',
                      alignItems: 'center',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <IconComponent 
                      size={20} 
                      className="expertise-icon" 
                      style={{ 
                        color: activeExpertise === index ? 'var(--accent-color)' : '#ccc',
                        marginRight: '12px',
                        minWidth: '20px'
                      }} 
                    /> 
                    {item.name}
                  </li>
                )})}
              </ul>
            </div>
            <div className="expertise-highlight animate-fade-in" key={currentExpertise.id}>
              <span style={{ color: 'var(--accent-color)', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px' }}>SERVICE VERTICAL {currentExpertise.id}</span>
              <h3 style={{ fontSize: '2rem', fontFamily: 'Playfair Display, serif', color: '#222', marginTop: '0.5rem', marginBottom: '1rem' }}>{currentExpertise.title}</h3>
              <p style={{ color: '#666', marginBottom: '2rem', lineHeight: '1.8' }}>
                {currentExpertise.desc}
              </p>
              
              <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: '#222' }}>Scope & Capabilities Included:</h4>
              <ul className="custom-bullet-list">
                {currentExpertise.scope.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              
              <Link to="/quote" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>
                {currentExpertise.buttonText} <ArrowRight size={18} style={{marginLeft: '8px'}}/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Roadmap Section */}
      <section className="section" style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '6rem 0' }}>
        <div className="container">
          <FadeInUp className="text-center" style={{ marginBottom: '5rem' }}>
            <h2 className="section-title" style={{ color: '#fff', fontSize: '3.5rem', marginBottom: '1rem', fontFamily: 'Playfair Display, serif' }}>From Vision to Reality</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '1.5rem' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--accent-color)' }}></div>
              <Diamond size={12} color="var(--accent-color)" />
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--accent-color)' }}></div>
            </div>
            <p style={{ color: '#ccc', maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.6' }}>
              Our structured 6-step turnkey workflow guarantees architectural precision, total cost transparency, and on-time handover.
            </p>
          </FadeInUp>

          <StaggerContainer className="roadmap-grid">
            {/* Step 1 */}
            <StaggerItem className="roadmap-step dark-step">
              <div className="step-header">
                <div className="step-num-icon">
                  <span className="step-number-dark">01</span>
                  <div className="step-icon-dark"><Ruler size={18} /></div>
                </div>
                <span className="step-duration-dark">DAY 1 - 2</span>
              </div>
              <h3 className="step-title-dark">Site Visit & Measurement</h3>
              <p className="step-subtitle-dark">Complimentary on-site consultation</p>
              <p className="step-desc-dark">Our master carpenter and design lead visit your property to take millimeter-exact laser measurements, assess room orientations, and understand your lifestyle requirements.</p>
              <div className="step-output-dark">
                <p><CheckCircle size={14} style={{color:'var(--accent-color)', marginRight:'8px'}}/> Output: Accurate site dimensions & functional requirement brief</p>
                <p><MapPin size={14} style={{color:'var(--accent-color)', marginRight:'8px'}}/> Free visit in Tolichowki, Shaikpet & across Hyderabad</p>
              </div>
            </StaggerItem>

            {/* Step 2 */}
            <StaggerItem className="roadmap-step dark-step">
              <div className="step-header">
                <div className="step-num-icon">
                  <span className="step-number-dark">02</span>
                  <div className="step-icon-dark"><LayoutGrid size={18} /></div>
                </div>
                <span className="step-duration-dark">DAY 3 - 5</span>
              </div>
              <h3 className="step-title-dark">2D Space Layout & Blueprint</h3>
              <p className="step-subtitle-dark">Ergonomic space planning</p>
              <p className="step-desc-dark">We develop optimized floor layouts, furniture placement drawings, electrical point maps, and internal wardrobe/cabinet organization blueprints for maximum space utility.</p>
              <div className="step-output-dark">
                <p><CheckCircle size={14} style={{color:'var(--accent-color)', marginRight:'8px'}}/> Output: Detailed 2D layout plans & structural blueprints</p>
                <p><MapPin size={14} style={{color:'var(--accent-color)', marginRight:'8px'}}/> Customized for apartments, villas & commercial spaces</p>
              </div>
            </StaggerItem>

            {/* Step 3 */}
            <StaggerItem className="roadmap-step dark-step">
              <div className="step-header">
                <div className="step-num-icon">
                  <span className="step-number-dark">03</span>
                  <div className="step-icon-dark"><ImageIcon size={18} /></div>
                </div>
                <span className="step-duration-dark">DAY 6 - 9</span>
              </div>
              <h3 className="step-title-dark">3D Visualization & Render Approval</h3>
              <p className="step-subtitle-dark">Photorealistic digital preview</p>
              <p className="step-desc-dark">We generate ultra-realistic 3D walkthrough views of your living rooms, modular kitchen, and bedrooms showing actual materials, lighting tones, and furniture dimensions.</p>
              <div className="step-output-dark">
                <p><CheckCircle size={14} style={{color:'var(--accent-color)', marginRight:'8px'}}/> Output: HD 3D visual renders & client sign-off</p>
                <p><MapPin size={14} style={{color:'var(--accent-color)', marginRight:'8px'}}/> See your exact finishes before a single nail is hammered</p>
              </div>
            </StaggerItem>

            {/* Step 4 */}
            <StaggerItem className="roadmap-step dark-step">
              <div className="step-header">
                <div className="step-num-icon">
                  <span className="step-number-dark">04</span>
                  <div className="step-icon-dark"><Layers size={18} /></div>
                </div>
                <span className="step-duration-dark">DAY 10 - 12</span>
              </div>
              <h3 className="step-title-dark">Material & Wood Selection</h3>
              <p className="step-subtitle-dark">Direct workshop touch & feel</p>
              <p className="step-desc-dark">Together, we select authentic marine-grade plywood, high-gloss acrylics, natural veneers, quartz slabs, and branded hardware with full transparency.</p>
              <div className="step-output-dark">
                <p><CheckCircle size={14} style={{color:'var(--accent-color)', marginRight:'8px'}}/> Output: Material approval sample board & final BOQ bill</p>
                <p><MapPin size={14} style={{color:'var(--accent-color)', marginRight:'8px'}}/> Genuine IS:710 Marine Plywood & German hardware</p>
              </div>
            </StaggerItem>

            {/* Step 5 */}
            <StaggerItem className="roadmap-step dark-step">
              <div className="step-header">
                <div className="step-num-icon">
                  <span className="step-number-dark">05</span>
                  <div className="step-icon-dark"><Hammer size={18} /></div>
                </div>
                <span className="step-duration-dark">DAY 13 - 35</span>
              </div>
              <h3 className="step-title-dark">Workshop Carpentry & Assembly</h3>
              <p className="step-subtitle-dark">Master craftsmanship in action</p>
              <p className="step-desc-dark">Our veteran carpenters craft your custom furniture, cabinets, wall panels, and doors in our precision workshop with seamless edge-banding and strict quality checks.</p>
              <div className="step-output-dark">
                <p><CheckCircle size={14} style={{color:'var(--accent-color)', marginRight:'8px'}}/> Output: Factory-finish carpentry & on-site modular installation</p>
                <p><MapPin size={14} style={{color:'var(--accent-color)', marginRight:'8px'}}/> Direct workshop fabrication in Hyderabad</p>
              </div>
            </StaggerItem>

            {/* Step 6 */}
            <StaggerItem className="roadmap-step dark-step">
              <div className="step-header">
                <div className="step-num-icon">
                  <span className="step-number-dark">06</span>
                  <div className="step-icon-dark"><Award size={18} /></div>
                </div>
                <span className="step-duration-dark">FINAL HANDOVER</span>
              </div>
              <h3 className="step-title-dark">Final Quality Check & Handover</h3>
              <p className="step-subtitle-dark">Flawless turnkey delivery</p>
              <p className="step-desc-dark">We conduct an exhaustive 45-point quality inspection on hinge alignments, smooth drawers, polish sheen, and deep clean the site before handing over your dream home.</p>
              <div className="step-output-dark">
                <p><CheckCircle size={14} style={{color:'var(--accent-color)', marginRight:'8px'}}/> Output: Deep-cleaned pristine space + Warranty documentation</p>
                <p><MapPin size={14} style={{color:'var(--accent-color)', marginRight:'8px'}}/> Guaranteed on-time handover with warranty</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="section" style={{ backgroundColor: '#fcfcf7', padding: '6rem 0' }}>
        <div className="container">
          <FadeInUp className="text-center" style={{ marginBottom: '4rem' }}>
            <span className="subtitle" style={{ color: 'var(--accent-color)', letterSpacing: '3px', fontSize: '0.9rem', fontWeight: 'bold' }}>CLIENT SUCCESS STORIES</span>
            <h2 className="section-title" style={{ color: '#222', fontSize: '3rem', marginTop: '1rem', marginBottom: '1rem', fontFamily: 'Playfair Display, serif' }}>What Our Clients Say</h2>
            <GoldLineDrawing width="100px" direction="center" style={{ margin: '0 auto 1.5rem auto' }} />
          </FadeInUp>
          
        </div>
        
        <FadeInUp className="marquee-container">
          <div className="marquee-content">
            {[...testimonialsData, ...testimonialsData].map((testimonial, idx) => (
              <div key={idx} className="testimonial-card" style={{ width: '400px', flexShrink: 0, backgroundColor: '#fff', padding: '2.5rem', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', whiteSpace: 'normal' }}>
                <div style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>★★★★★</div>
                <p style={{ color: '#555', fontStyle: 'italic', marginBottom: '2rem', lineHeight: '1.8', minHeight: '120px' }}>
                  "{testimonial.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--bg-dark)', color: 'var(--accent-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', flexShrink: 0 }}>{testimonial.initials}</div>
                  <div>
                    <h4 style={{ color: '#222', margin: 0, fontFamily: 'Playfair Display, serif', fontSize: '1.1rem' }}>{testimonial.name}</h4>
                    <span style={{ color: '#888', fontSize: '0.85rem' }}>{testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeInUp>
      </section>



      {/* Recent Projects Section */}
      <section className="section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <FadeInUp className="text-center" style={{ marginBottom: '4rem' }}>
            <span className="subtitle" style={{ color: 'var(--accent-color)', letterSpacing: '3px', fontSize: '0.9rem', fontWeight: 'bold' }}>100% REAL SITE EXECUTION</span>
            <h2 className="section-title" style={{ color: '#222', fontSize: '3rem', marginTop: '1rem', marginBottom: '1rem', fontFamily: 'Playfair Display, serif' }}>Recent Projects & Transformations</h2>
            <GoldLineDrawing width="100px" direction="center" style={{ margin: '0 auto 1.5rem auto' }} />
            <p style={{ color: '#666', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Explore authentic photography and video walkthroughs of completed turnkey interiors, bespoke modular kitchens, custom wardrobes, and master woodworking across Hyderabad.
            </p>
            <div className="project-tabs" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <span className="active-tab" style={{ color: 'var(--accent-color)', borderBottom: '2px solid var(--accent-color)', paddingBottom: '0.5rem', fontWeight: 'bold' }}>All Projects</span>
              <span className="tab" style={{ color: '#888', cursor: 'pointer' }}>Ongoing Projects</span>
              <span className="tab" style={{ color: '#888', cursor: 'pointer' }}>Completed Projects</span>
            </div>
          </FadeInUp>

          <StaggerContainer className="projects-grid">
            {/* We will map through a few sample projects here */}
            {[
              { img: homeAboutImg, title: 'Full Turnkey Execution', desc: '2bhk interior design. ECO Home Interiors completed this site', loc: 'Tolichowki, Hyderabad' },
              { img: afterLiving, title: 'Full-Height Entertainment Wall & Chandelier Ceiling', desc: 'Architectural living room TV wall featuring full-height vertical teak louvers, floating backlit marble mounting panel with warm LED glow...', loc: 'Tolichowki, Hyderabad' },
              { img: afterBedroom, title: 'Master Suite & Organic Curved False Ceiling', desc: 'Master bedroom suite with custom king bed, chevron padded velvet headboard, full-height backlit Statuario marble wall...', loc: 'Tolichowki, Hyderabad' },
              { img: afterWardrobe, title: 'Ceiling-Height Wardrobe System with Overhead Lofts', desc: 'Spacious L-shaped wardrobe system clad in high-gloss Calacatta gold marble laminate with custom half-moon brass handles...', loc: 'Tolichowki, Hyderabad' },
              { img: afterKitchen, title: 'Crockery Storage & Kitchen Pass-Through Hatch', desc: 'Multifunctional dining crockery cabinet and serving counter with vertical backlit glass display towers, black granite top...', loc: 'Shaikpet, Hyderabad' }
            ].map((proj, idx) => (
              <StaggerItem key={idx} className="project-card">
                <div className="project-img-wrapper" style={{ position: 'relative', overflow: 'hidden', borderRadius: '10px' }}>
                  <CurtainImageReveal src={proj.img} alt={proj.title} height="300px" />
                  <span style={{ position: 'absolute', top: '15px', left: '15px', backgroundColor: '#fff', color: '#222', padding: '5px 12px', fontSize: '0.8rem', fontWeight: 'bold', borderRadius: '4px' }}>Completed Projects</span>
                </div>
                <div className="project-info" style={{ padding: '1.5rem 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#888', fontSize: '0.9rem' }}>{proj.loc}</span>
                    <a href="#" style={{ color: 'var(--accent-color)', fontWeight: 'bold', fontSize: '0.9rem' }}>View Details ›</a>
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontFamily: 'Playfair Display, serif', marginBottom: '1rem', color: '#222' }}>{proj.title}</h3>
                  <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>{proj.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/gallery" className="btn btn-outline" style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}>
              View All Recent Projects <ArrowRight size={18} style={{marginLeft: '8px'}}/>
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section" style={{ backgroundColor: '#240414', color: '#fff', padding: '6rem 0' }}>
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Info */}
            <FadeInUp className="contact-info-col">
              <span className="subtitle" style={{ color: 'var(--accent-color)', letterSpacing: '3px', fontSize: '0.9rem', fontWeight: 'bold' }}>BE OUR NEXT HAPPY CUSTOMER</span>
              <h2 className="section-title" style={{ color: '#fff', fontSize: '3rem', marginTop: '1rem', marginBottom: '1rem', fontFamily: 'Playfair Display, serif' }}>Let's Create Something Exceptional</h2>
              <GoldLineDrawing width="100px" direction="left" style={{ marginBottom: '1.5rem' }} />
              <p style={{ color: '#ccc', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                Speak directly with our interior designers and master carpenters. We offer free on-site measurements across Kurnool City and surrounding areas.
              </p>

              <div className="contact-details" style={{ display: 'grid', gap: '2rem' }}>
                <div className="contact-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div className="icon-circle" style={{ backgroundColor: 'rgba(216, 170, 90, 0.1)', color: 'var(--accent-color)', padding: '1rem', borderRadius: '50%' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.2rem', fontSize: '1rem' }}>Direct Phone</h4>
                    <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>+91 9885256866, +91 8555935234</p>
                    <a href="https://wa.me/919885256866" target="_blank" rel="noreferrer" style={{ color: '#25D366', display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' }}>
                      <MessageSquare size={16} /> WhatsApp Chat
                    </a>
                  </div>
                </div>

                <div className="contact-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div className="icon-circle" style={{ backgroundColor: 'rgba(216, 170, 90, 0.1)', color: 'var(--accent-color)', padding: '1rem', borderRadius: '50%' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.2rem', fontSize: '1rem' }}>Email</h4>
                    <p style={{ fontSize: '1.1rem' }}>krishna9885256866@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div className="icon-circle" style={{ backgroundColor: 'rgba(216, 170, 90, 0.1)', color: 'var(--accent-color)', padding: '1rem', borderRadius: '50%' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.2rem', fontSize: '1rem' }}>Studio & Workshop Location</h4>
                    <p style={{ color: '#ccc', lineHeight: '1.6' }}>D no-87/1392-B-C-11, shop no 2, opp- Omega hospital,<br/>100ft road, vasavi nagar, kurnool city, AP-518002</p>
                    <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-color)', display: 'inline-block', marginTop: '10px' }}>Get Directions ›</a>
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Contact Form */}
            <div className="contact-form-col">
              <div className="form-card" style={{ backgroundColor: '#fff', borderRadius: '15px', padding: '3rem', color: '#222' }}>
                <h3 style={{ fontSize: '1.8rem', fontFamily: 'Playfair Display, serif', marginBottom: '0.5rem', color: '#222' }}>Book Free Site Consultation</h3>
                <p style={{ color: '#666', marginBottom: '2rem' }}>Complimentary measurement & design briefing in Kurnool City & surrounding areas.</p>
                
                <form className="consultation-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>Full Name *</label>
                    <input type="text" style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }} placeholder="Your Name" />
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>Mobile Number *</label>
                    <div style={{ display: 'flex' }}>
                      <span style={{ backgroundColor: '#f5f5f5', border: '1px solid #ddd', borderRight: 'none', padding: '12px 15px', borderRadius: '8px 0 0 8px', color: '#666' }}>+91</span>
                      <input type="tel" style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '0 8px 8px 0', fontSize: '1rem' }} placeholder="10-digit number" />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>Service Needed</label>
                    <select style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', backgroundColor: '#fff' }}>
                      <option>Complete Home Interior Design</option>
                      <option>Modular Kitchen & Furniture</option>
                      <option>Custom Carpentry & Woodwork</option>
                      <option>Wardrobes & Storage Solutions</option>
                      <option>TV Units, Wall Panels & Ceilings</option>
                      <option>Commercial Interiors & Renovation</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>Space Type</label>
                    <select style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', backgroundColor: '#fff' }}>
                      <option>1 BHK Apartment</option>
                      <option>2 BHK Apartment</option>
                      <option>3 BHK Apartment</option>
                      <option>4 BHK Apartment</option>
                      <option>Luxury Villa / Duplex</option>
                      <option>Commercial Office / Workspace</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>Project Notes (Optional)</label>
                    <textarea rows="3" style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', fontFamily: 'inherit' }} placeholder="Tell us a bit about your requirement..."></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '15px', fontSize: '1.1rem', marginTop: '1rem' }}>Request Free Site Consultation</button>
                  <p style={{ fontSize: '0.8rem', color: '#888', textAlign: 'center', marginTop: '0.5rem' }}>🔒 Your contact information is kept confidential.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
