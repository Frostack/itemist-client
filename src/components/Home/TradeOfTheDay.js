import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import TradeItem from '../Trade/TradeItem';

const Item = styled(motion.div)`
  padding: 16px 64px;
  background-color: ${({ theme }) => theme.primary[300]};
  margin: 8px;
  border-radius: 2px;
`;

function TradeOfTheDay() {
  return (
    <div transition={{ delay: 1 }}>
      <Item initial={{ opacity: 0 }} animate={{ x: -25, opacity: 1 }} transition={{ delay: 1 }}>
        <TradeItem padding={0} />
      </Item>
      <Item
        initial={{ opacity: 0, scale: 1.1, x: 25 }}
        animate={{ x: -75, opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <TradeItem padding={0} />
      </Item>
      <Item initial={{ opacity: 0 }} animate={{ x: -25, opacity: 1 }} transition={{ delay: 1.6 }}>
        <TradeItem padding={0} />
      </Item>
    </div>
  );
}

export default TradeOfTheDay;
