import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import process1 from '../assets/gallery1.jpg';
import process2 from '../assets/gallery2.jpg';
import process3 from '../assets/gallery4.jpg';
import process4 from '../assets/gallery3.jpg';

const storyData = [
  { id: '01', title: 'DESIGN', desc: 'Every great space begins with a visionary blueprint. We meticulously map out your lifestyle needs, blending aesthetic elegance with structural ergonomics to craft a perfect 2D and 3D plan.', img: process1 },
  { id: '02', title: 'CRAFT', desc: 'In our Tolichowki workshop, master carpenters breathe life into raw, premium marine plywood. Using state-of-the-art machinery and generations of woodworking expertise, we ensure precision at every millimeter.', img: process2 },
  { id: '03', title: 'BUILD', desc: 'From modular kitchens to custom wardrobes, our on-site assembly is swift, clean, and exact. We respect your space, ensuring flawless edge-banding, perfect leveling, and rigorous quality checks.', img: process3 },
  { id: '04', title: 'TRANSFORM', desc: 'The final handover is nothing short of cinematic. We deep-clean the site, polish the brass hardware, and unveil a meticulously finished turnkey interior ready for you to call home.', img: process4 },
];

const StickyStory = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      // Divide progress into 4 segments
      const index = Math.min(
        Math.floor(latest * storyData.length),
        storyData.length - 1
      );
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    });
  }, [scrollYProgress, activeIndex]);

  // Disable sticky on mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <section className="section" style={{ backgroundColor: '#fff', padding: '4rem 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="subtitle" style={{ color: 'var(--accent-color)', letterSpacing: '3px', fontSize: '0.9rem', fontWeight: 'bold' }}>OUR STORY</span>
            <h2 className="section-title" style={{ color: '#222', fontSize: '2.5rem', marginTop: '1rem', fontFamily: 'Playfair Display, serif' }}>The Making of Excellence</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {storyData.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px', marginBottom: '1.5rem' }} />
                <h3 style={{ color: 'var(--accent-color)', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{item.id} — {item.title}</h3>
                <p style={{ color: '#666', lineHeight: 1.6 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={containerRef} 
      style={{ 
        position: 'relative', 
        height: '400vh', // 4 sections tall to allow scrolling
        backgroundColor: 'var(--bg-dark)' 
      }}
    >
      <div 
        style={{ 
          position: 'sticky', 
          top: 0, 
          height: '100vh', 
          display: 'flex', 
          alignItems: 'center',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ display: 'flex', height: '80vh', width: '100%', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left Text Side */}
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="subtitle" style={{ color: 'var(--accent-color)', letterSpacing: '3px', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '2rem' }}>OUR STORY</span>
            
            <div style={{ display: 'flex', position: 'relative' }}>
              {/* Progress Line */}
              <div style={{ width: '2px', backgroundColor: 'rgba(255,255,255,0.1)', marginRight: '2rem', position: 'relative' }}>
                <motion.div 
                  style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    backgroundColor: 'var(--accent-color)',
                    scaleY: scrollYProgress,
                    transformOrigin: 'top'
                  }} 
                />
              </div>

              {/* Story Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {storyData.map((item, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <div 
                      key={index} 
                      style={{ 
                        transition: 'all 0.5s ease',
                        opacity: isActive ? 1 : 0.4,
                        transform: isActive ? 'translateX(10px)' : 'translateX(0)'
                      }}
                    >
                      <h3 style={{ 
                        color: isActive ? 'var(--accent-color)' : '#fff', 
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '2.5rem',
                        margin: 0,
                        transition: 'color 0.5s ease'
                      }}>
                        {item.id} — {item.title}
                      </h3>
                      {isActive && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.5 }}
                          style={{ color: '#ccc', marginTop: '1rem', lineHeight: '1.6', maxWidth: '400px' }}
                        >
                          {item.desc}
                        </motion.p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Image Side */}
          <div style={{ flex: '1.2', height: '100%', position: 'relative', borderRadius: '20px', overflow: 'hidden' }}>
            {storyData.map((item, index) => (
              <motion.div
                key={index}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: index === activeIndex ? 2 : 1
                }}
                initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
                animate={{ 
                  opacity: index === activeIndex ? 1 : 0,
                  clipPath: index === activeIndex ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)'
                }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                {/* Overlay for dark cinematic feel */}
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.2)' }} />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default StickyStory;
