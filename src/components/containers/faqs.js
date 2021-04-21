import React from 'react';
import faqsData from '../../fixtures/faqs.json';
import Accordion from '../accordion/index';

export default function FaqsContainer() {
  return (
    <>
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqsData.map((item) => {
          const { id, body, header } = item;
          return (
            <>
              <Accordion.Item key={id}>
                <Accordion.Header>{header}</Accordion.Header>
                <Accordion.Body>{body}</Accordion.Body>
              </Accordion.Item>
            </>
          );
        })}
      </Accordion>
    </>
  );
}
