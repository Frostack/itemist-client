import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  margin-right: 100px;
  margin-top: 25vh;
`;

const Display = styled.div`
  font-size: 5.5vw;
  font-weight: bold;
`;

const Lead = styled.p`
  font-size: 20px;
  line-height: 140%;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 16px 64px;
  background-color: ${({ theme }) => theme.primary[100]};
  margin-top: 24px;
  color: ${({ theme }) => theme.primary[300]};
  font-size: 24px;
  font-weight: 900;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.25s;
  :hover {
    transform: scale(1.1);
    color: white;
    background-color: ${({ theme }) => theme.primary[400]};
  }
`;

function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Wrapper>
        <Display>
          از دارکنس فالز
          <br />
          آیتمیست رایز اگین
        </Display>
        <Lead>
          ا دریم شترز ا لایف برنز تو ویست
          <br />
          اشیز تو اشیز داست تو داست
          <br />
          اسکین تو بون استیل تو راست
        </Lead>
        <Button to="/trade">ترید</Button>
      </Wrapper>
    </motion.div>
  );
}

export default Home;
