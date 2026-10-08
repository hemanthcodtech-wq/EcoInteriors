import React from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text, className, delay = 0, style, Component = motion.div }) => {
  // If the text contains <br/>, we want to split by it and render accordingly
  const lines = text.split('<br/>');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.2 }
    },
  };

  return (
    <Component
      className={className}
      style={style}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {lines.map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {line.split('').map((char, index) => (
            <motion.span 
              key={`${lineIndex}-${index}`} 
              variants={letterVariants}
              style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
            >
              {char}
            </motion.span>
          ))}
          {lineIndex < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </Component>
  );
};

export default TypewriterText;
