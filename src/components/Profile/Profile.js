import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BsCardText } from 'react-icons/bs';

import bgImg from '../../assets/profile-bg.jpg';

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  width: 30vw;
  height: 80vh;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
`;

const TitleImage = styled.img`
  max-width: 100%;
`;

const Avatar = styled.img`
  border-radius: 50%;
  position: relative;
  border: 2px solid #eeeeee;
  transform: translateY(-50%);
`;

const Name = styled.div`
  color: #222222;
  font-size: 32px;
`;

const Email = styled.div`
  font-size: 20px;
  font-weight: 300;
  color: #666666;
`;

const TradeIcon = styled(BsCardText)`
  padding-right: 4px;
`;

const TradeUrl = styled.div`
  display: flex;
  direction: ltr;
  border: 1px solid #713648;
  align-self: stretch;
  margin: 16px;
`;

const TradeTitle = styled.div`
  background-color: #713648;
  color: white;
  padding: 8px;
  display: flex;
  align-items: center;
`;

const TradeInput = styled.input`
  background-color: white;
  color: #713648;
  border: none;
  flex-grow: 1;
  font-size: 16px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #71364822;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const TradeText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #713648;
  flex-grow: 1;
  cursor: pointer;
`;

function Profile({ user }) {
  const [tradeState, setTradeState] = useState({
    isEditing: false,
    text: '',
  });

  const onTradeSubmit = e => {
    e.preventDefault();
    setTradeState({ ...tradeState, isEditing: false });
  };

  const renderTradeForm = () => {
    if (tradeState.isEditing)
      return (
        <Form onSubmit={onTradeSubmit}>
          <TradeInput
            defaultValue={tradeState.text}
            onChange={e => setTradeState({ ...tradeState, text: e.target.value })}
            value={tradeState.text}
            autoFocus
          />
        </Form>
      );
    return (
      <TradeText onClick={() => setTradeState({ ...tradeState, isEditing: true })}>
        {tradeState.text}
      </TradeText>
    );
  };

  if (!user) return null;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Center>
        <Card>
          <TitleImage src={bgImg} />
          <Avatar src={user.avatar} />
          <Name>{user.name}</Name>
          <Email>frostack@gmail.com</Email>
          <TradeUrl>
            <TradeTitle>
              <TradeIcon size={24} />
              Trade URL
            </TradeTitle>
            {renderTradeForm()}
          </TradeUrl>
        </Card>
      </Center>
    </motion.div>
  );
}

const mapStateToProps = state => {
  return { user: state.user?.data?.user };
};

export default connect(mapStateToProps)(Profile);
