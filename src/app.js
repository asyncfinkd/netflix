import React from "react";
import Jumbotron from "./components/jumbotron";
import jumboData from "./fixtures/jumbo.json";

export default function App() {
  return (
    <>
      <Jumbotron.Container>
        {jumboData.map((item) => {
          const { id, title, subTitle, image, alt, direction } = item;
          return (
            <>
              <Jumbotron key={id} direction={direction}>
                <p>{title}</p>
                <p>{subTitle}</p>
                <p>{image}</p>
                <p>{alt}</p>
              </Jumbotron>
            </>
          );
        })}
      </Jumbotron.Container>
    </>
  );
}
