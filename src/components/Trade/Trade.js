import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BsArrowLeftRight, BsCheck, BsX } from 'react-icons/bs';

import TradeInventory from './TradeInventory';

const Container = styled.div`
  margin: 0 32px;
  color: #eeeeee;
`;

const Button = styled.div`
  cursor: pointer;
  background-color: ${({ theme }) => theme.secondary[100]};
  display: inline-block;
  padding: 8px 24px;
  margin: 0 8px;
  border-radius: 12px;
  text-align: center;
  transition: 0.2s;
  :hover {
    background-color: ${({ theme }) => theme.secondary[200]};
  }
  color: white;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const TextCenter = styled.div`
  text-align: center;
  margin-top: 12px;
`;

const InventoryWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 8px;
`;

const TradeButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  background-color: ${({ variant, theme }) =>
    variant === 'proceed' ? theme.primary[500] : theme.failure[100]};
  :hover {
    background-color: ${({ variant, theme }) =>
      variant === 'proceed' ? theme.primary[600] : theme.failure[200]};
  }
`;

const TradeManage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50vh;
`;

const TradeIcon = styled(BsArrowLeftRight)`
  align-self: center;
`;

const TitleLeft = styled.div`
  margin-bottom: 6px;
`;

const TitleRight = styled.div`
  margin-bottom: 6px;
  text-align: right;
`;

function Trade() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Container>
        <Center>
          <Button>Dota 2</Button>
          <Button>CS Go</Button>
        </Center>
        <TextCenter>Select your items and click on arrow button</TextCenter>
        <InventoryWrapper>
          <div>
            <TitleLeft>Your inventory</TitleLeft>
            <TradeInventory />
          </div>
          <TradeManage>
            <TradeButton variant="proceed">
              Proceed
              <BsCheck size={18} />
            </TradeButton>
            <TradeIcon size={100} />
            <TradeButton>
              Cancel
              <BsX size={18} />
            </TradeButton>
          </TradeManage>
          <div>
            <TitleRight>Website shop</TitleRight>
            <TradeInventory />
          </div>
        </InventoryWrapper>
        <TextCenter>
          You can search through items, and filter them by click on filter button.
        </TextCenter>
      </Container>
    </motion.div>
  );
}

export default Trade;
