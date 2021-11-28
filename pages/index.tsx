import type { NextPage } from "next";
import Header from "../ui/header";
import Hero from "../ui/hero";

const Home: NextPage = () => {
  return (
    <>
      <div className="basicLayout">
        <div className="netflix-sans-font-loaded">
          <div className="our-story-desktop-framework">
            <div>
              <div className="lang-selector-test our-story-container" dir="ltr">
                <Header />
                <Hero />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
