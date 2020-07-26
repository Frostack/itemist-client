import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  padding: 16px 64px;
`;

function Profile({ user }) {
  if (!user) return null;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Wrapper>{user.name}</Wrapper>
    </motion.div>
  );
}

const mapStateToProps = state => {
  return { user: state.user?.data?.user };
};

export default connect(mapStateToProps)(Profile);
