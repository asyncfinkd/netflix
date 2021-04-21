import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JumbotronContainer from './components/containers/jumbotron';
import FooterContainer from './components/containers/footer';
import FaqsContainer from './components/containers/faqs';
import * as ROUTES from './constants/routes';

export default function App() {
  return (
    <>
      <Router>
        <Route exact path={ROUTES.HOME}>
          <JumbotronContainer />
          <FaqsContainer />
          <FooterContainer />
        </Route>
      </Router>
    </>
  );
}
