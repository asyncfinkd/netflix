import React from 'react';
import Jumbotron from './components/jumbotron';
import jumboData from './fixtures/jumbo.json';

export default function App() {
  return (
    <>
      <Jumbotron.Container>
        {jumboData.map((item) => {
          const { id, title, subTitle, image, alt, direction } = item;
          return (
            <>
              <Jumbotron key={id} direction={direction}>
                <Jumbotron.Pane>
                  <Jumbotron.Title>{title}</Jumbotron.Title>
                  <Jumbotron.SubTitle>{subTitle}</Jumbotron.SubTitle>
                </Jumbotron.Pane>
                <Jumbotron.Pane>
                  <Jumbotron.Image src={image} alt={alt} />
                </Jumbotron.Pane>
              </Jumbotron>
            </>
          );
        })}
      </Jumbotron.Container>
    </>
  );
}
