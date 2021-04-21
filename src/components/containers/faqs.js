import React from 'react';
import faqsData from '../../fixtures/faqs.json';
import Accordion from '../accordion/index';
import OptForm from '../opt-form';

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
        <OptForm>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership
          </OptForm.Text>
        </OptForm>
      </Accordion>
    </>
  );
}
