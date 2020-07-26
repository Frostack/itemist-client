import React from 'react';
import styled from 'styled-components';
import { BsFilter } from 'react-icons/bs';

import TradeItem from './TradeItem';

const Container = styled.div`
  height: 70vh;
  border-radius: 8px;
  padding: 4px;
  background-color: ${({ theme }) => theme.primary[700]};
`;

const SearchInput = styled.input`
  border-radius: 16px;
  border: none;
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.primary[100]};
  width: 10vw;
  outline: none;
  transition: 0.3s;
  margin-right: 4px;
  :focus {
    flex-grow: 1;
  }
`;

const Row = styled.div`
  display: flex;
`;

const Button = styled.div`
  cursor: pointer;
  background-color: #999999;
  border-radius: 16px;
  padding: 4px 16px;
  margin-left: 4px;
  color: white;
  transition: 0.15s;
  :hover {
    background-color: ${({ variant, theme }) =>
      variant === 'proceed' ? theme.primary[600] : theme.failure[200]};
  }
`;

const Hr = styled.hr`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.primary[300]};
`;

const FilterWrapper = styled.div`
  text-align: right;
  transition: 0.15s;
  :hover {
    color: ${({ theme }) => theme.primary[400]};
  }
`;

function TradeInventory() {
  return (
    <Container>
      <Row>
        <SearchInput placeholder="Search..." />
        <Button style={{ marginLeft: 'auto' }}>Alphabet</Button>
        <Button>Price</Button>
      </Row>
      <Hr />
      <TradeItem />
      <Hr />
      <TradeItem />
      <Hr />
      <TradeItem />
      <Hr />
      <TradeItem />
      <Hr />
      <FilterWrapper>
        <BsFilter size={32} />
      </FilterWrapper>
    </Container>
  );
}

export default TradeInventory;
