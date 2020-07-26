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
  justify-content: space-between;
  padding: 12px 16px;
  background-color: rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #222222;
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
  background-color: ${({ theme }) => theme.success[200]};
  padding: 4px 8px;
`;

const BuyButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.success[100]};
  font-family: inherit;
  cursor: pointer;
  transition: 0.15s ease-out;
  font-size: 16px;
  :hover {
    background-color: ${({ theme }) => theme.success[300]};
  }
`;

function ShopItem() {
  return (
    <Wrapper>
      <Title>
        <div>aghanim sceptre</div>
      </Title>
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
