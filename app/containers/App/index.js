/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import { appName } from 'containers/App/constants';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
`;

const AppContent = styled.div`
  flex: 1;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate={`%s - ${appName}`} defaultTitle={appName}>
        <meta name="description" content="" />
      </Helmet>

      <AppContent>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </AppContent>

      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
