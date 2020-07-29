import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import ShopItem from './ShopItem';
import Filter from './Filter';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: 48px;
`;

function Shop() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Filter />
      <Wrapper>
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </Wrapper>
    </motion.div>
  );
}

export default Shop;
