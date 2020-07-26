import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25vh;
  font-size: 128px;
`;

const Letter = styled(motion.div)`
  display: inline-block;
`;

function InProgress() {
  const randomColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
  };

  const renderAnimatedText = text => {
    return [...text].map((letter, i) => (
      <Letter
        key={i}
        initial={{ y: 0 }}
        animate={{ y: [0, 200, 0], color: [randomColor(), randomColor(), randomColor()] }}
        transition={{ loop: Infinity, duration: 2 + Math.random(), delay: Math.random() }}
      >
        {letter}
      </Letter>
    ));
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Wrapper>
        <div>{renderAnimatedText('خفه شو کونده')}</div>
      </Wrapper>
    </motion.div>
  );
}

export default InProgress;
