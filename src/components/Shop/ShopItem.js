import React from 'react';
import styled from 'styled-components';
import { BsImage } from 'react-icons/bs';

const Wrapper = styled.div`
  border-radius: 2px;
  background-color: ${({ theme }) => theme.primary[100]};
  color: #222222;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  margin: 32px;
`;

const Title = styled.div`
  direction: ltr;
  display: flex;
  padding: 10px 16px;
  background-color: rgba(0, 0, 0, 0.06);
  font-size: 18px;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  color: #333333;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  flex-grow: 1;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-self: stretch;
`;

const Price = styled.div`
  border-radius: 4px;
  padding: 4px 8px;
  background-color: #c2d3eb;
  color: #192f4d;
`;

const BuyButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  font-family: inherit;
  cursor: pointer;
  transition: 0.15s ease-out;
  font-size: 16px;
  color: #3d4f17;
  background-color: #cee3a1;
  :hover {
    background-color: #add062;
  }
`;

function ShopItem() {
  return (
    <Wrapper>
      <Title>aghanim sceptre</Title>
      <Body>
        <Col>
          <Price>200,000 تومان</Price>
          <BuyButton>خرید</BuyButton>
        </Col>
        <BsImage size={103} />
      </Body>
    </Wrapper>
  );
}

export default ShopItem;
