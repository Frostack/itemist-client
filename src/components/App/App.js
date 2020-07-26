import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { verifyUser } from '../../actions/userActions';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Trade from '../Trade/Trade';
import InProgress from '../InProgress/InProgress';
import Shop from '../Shop/Shop';
import Profile from '../Profile/Profile';
import Sell from '../Sell/Sell';

const Wrapper = styled.div`
  background: url(./assets/background.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
  color: white;
`;

function App({ verifyUser }) {
  useEffect(() => {
    verifyUser();
  }, [verifyUser]);

  return (
    <Router>
      <Wrapper>
        <Header />
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Home} />
                <Route exact path="/trade" component={Trade} />
                <Route exact path="/verify" component={InProgress} />
                <Route exact path="/about" component={InProgress} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/sell" component={Sell} />
              </Switch>
            </AnimatePresence>
          )}
        />
        <Footer />
      </Wrapper>
    </Router>
  );
}

const mapDispatchToProps = {
  verifyUser,
};

export default connect(null, mapDispatchToProps)(App);
