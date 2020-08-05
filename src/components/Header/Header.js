import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

import useSteamAuth from '../../hooks/useSteamAuth';

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Navbar = styled.nav`
  padding: 24px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Anchor = styled(Link)`
  margin: auto 16px auto 16px;
  transition: 0.3s;
  display: inline-block;
  ::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: ${({ theme }) => theme.primary[400]};
    transition: width 0.3s;
    margin: 2px auto 0 auto;
  }
  :hover::after {
    width: 100%;
  }
  :hover {
    color: ${({ theme }) => theme.primary[400]};
  }
`;

const Brand = styled(Anchor)`
  font-size: 1.5em;
  margin: 0;
  font-family: 'Lobster', cursive;
`;

const MenuButton = styled(motion.div)`
  transition: 0.2s;
  margin-left: 16px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  :hover {
    color: ${({ theme }) => theme.primary[400]};
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

const Menu = styled(motion.div)`
  display: flex;
  margin-right: 8px;
  align-items: center;
`;

const animateProps = {
  initial: { y: -64 },
  animate: { y: 0 },
  exit: { y: -64 },
};

const Image = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 100%;
  transition: 0.1s ease-out;
  :hover {
    transform: scale(1.1);
  }
`;

const Profile = styled(Anchor)`
  display: flex;
  padding-left: 8px;
`;

const MenuLink = styled(Anchor)`
  padding: 4px;
  border-radius: 2px;
  :hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

function Header({ user }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const handleLogin = useSteamAuth();

  const renderProfile = () => {
    if (user.isVerified) {
      return (
        <Profile to="/profile">
          <Image src={user?.data?.user?.avatar} alt="user-avatar" />
        </Profile>
      );
    }
    return (
      <Anchor to="/" onClick={handleLogin}>
        ورود با استیم
      </Anchor>
    );
  };

  return (
    <Navbar>
      <Flex>
        <MenuButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          animate={{ rotateX: isMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.1 }}
        >
          <BsChevronDown size={24} />
        </MenuButton>
        <AnimatePresence>
          {isMenuOpen && (
            <Menu>
              <motion.div {...animateProps} transition={{ delay: 0.1 }}>
                <MenuLink to="/shop">فروشگاه</MenuLink>
              </motion.div>
              <motion.div {...animateProps} transition={{ delay: 0.15 }}>
                <MenuLink to="/sell">فروش</MenuLink>
              </motion.div>
              <motion.div {...animateProps} transition={{ delay: 0.15 }}>
                <MenuLink to="/trade">ترید</MenuLink>
              </motion.div>
              <motion.div {...animateProps} transition={{ delay: 0.2 }}>
                <MenuLink to="/about">درباره</MenuLink>
              </motion.div>
            </Menu>
          )}
        </AnimatePresence>
      </Flex>
      <Flex>
        {renderProfile()}
        <Brand to="/">Itemist</Brand>
      </Flex>
    </Navbar>
  );
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Header);
