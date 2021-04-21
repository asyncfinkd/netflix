import React from 'react';
import JumbotronContainer from './components/containers/jumbotron';
import FooterContainer from './components/containers/footer';
import FaqsContainer from './components/containers/faqs';

export default function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
