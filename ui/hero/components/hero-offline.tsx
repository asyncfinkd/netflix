import React from "react";

export default function HeroOffline() {
  return (
    <>
      <div
        className="our-story-card animation-card downloadAndWatch flipped"
        data-uia-nmhp="downloadAndWatch"
        data-uia="our-story-card"
      >
        <div className="animation-card-container">
          <div className="our-story-card-text">
            <h1
              id=""
              className="our-story-card-title"
              data-uia="animation-card-title"
            >
              Download your shows to watch offline.
            </h1>
            <h2
              id=""
              className="our-story-card-subtitle"
              data-uia="our-story-card-subtitle"
            >
              Save your favorites easily and always have something to watch.
            </h2>
          </div>
          <div className="our-story-card-img-container">
            <div className="our-story-card-animation-container">
              <img
                alt=""
                className="our-story-card-img"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                data-uia="our-story-card-img"
              />
              <div className="our-story-card-animation">
                <div className="our-story-card-animation-image">
                  <img
                    alt=""
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  />
                </div>
                <div className="our-story-card-animation-text">
                  <div id="" className="text-0" data-uia="">
                    Stranger Things
                  </div>
                  <div id="" className="text-1" data-uia="">
                    Downloading...
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="center-pixel" style={{ position: "absolute" }}></div>
        </div>
      </div>
    </>
  );
}
