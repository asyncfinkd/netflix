import React from "react";

export default function HeroEnjoy() {
  return (
    <>
      <div
        className="our-story-card animation-card watchOnTv"
        data-uia-nmhp="watchOnTv"
        data-uia="our-story-card"
      >
        <div className="animation-card-container">
          <div className="our-story-card-text">
            <h1
              id=""
              className="our-story-card-title"
              data-uia="animation-card-title"
            >
              Enjoy on your TV.
            </h1>
            <h2
              id=""
              className="our-story-card-subtitle"
              data-uia="our-story-card-subtitle"
            >
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </h2>
          </div>
          <div className="our-story-card-img-container">
            <div className="our-story-card-animation-container">
              <img
                alt=""
                className="our-story-card-img"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                data-uia="our-story-card-img"
              />
              <div className="our-story-card-animation">
                <video
                  className="our-story-card-video"
                  autoPlay={true}
                  playsInline={true}
                  muted={true}
                  loop={true}
                >
                  <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                    type="video/mp4"
                  />
                </video>
                <div className="our-story-card-animation-text"></div>
              </div>
            </div>
          </div>
          <div className="center-pixel" style={{ position: "absolute" }}></div>
        </div>
      </div>
    </>
  );
}
