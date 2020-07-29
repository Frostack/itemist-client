import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Box = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #555555;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Inner = styled(motion.div)`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #3f51b5;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin-bottom: 8px;
`;

function Checkbox({ text }) {
  const [checked, setChecked] = useState(true);

  return (
    <Wrapper>
      <div>{text}</div>
      <Box onClick={() => setChecked(!checked)}>
        <AnimatePresence>
          {checked && (
            <Inner
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
      </Box>
    </Wrapper>
  );
}

export default Checkbox;
