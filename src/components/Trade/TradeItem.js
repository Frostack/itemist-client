import React from 'react';
import styled from 'styled-components';
import { BsImage } from 'react-icons/bs';

const Container = styled.div`
  padding: ${({ padding }) => (padding !== undefined ? padding : 16)}px;
`;

const Row = styled.div`
  display: flex;
`;

const TextContainer = styled.div`
  padding: 4px;
  flex-grow: 1;
`;

const Title = styled.div`
  color: white;
`;

const Description = styled.div`
  font-size: small;
  color: #dddddd;
`;

const Price = styled.div`
  background-color: ${({ theme }) => theme.primary[800]};
  padding: 4px 16px;
  height: fit-content;
  border-radius: 16px;
  color: white;
`;

const PreviousPrice = styled.span`
  text-decoration: line-through;
  margin-right: 16px;
  color: #cccccc;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemIcon = styled(BsImage)`
  align-self: flex-end;
`;

function TradeItem({ padding }) {
  return (
    <Container padding={padding}>
      <Row>
        <BsImage size={64} />
        <TextContainer>
          <Title>sample name</Title>
          <Description>this is some description for this item</Description>
        </TextContainer>
        <Col>
          <Price>
            <PreviousPrice>15 USD</PreviousPrice>
            <span>12 USD</span>
          </Price>
          <ItemIcon size={20} />
        </Col>
      </Row>
    </Container>
  );
}

export default TradeItem;
