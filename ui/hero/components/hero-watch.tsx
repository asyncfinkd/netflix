import React from "react";

export default function HeroWatch() {
  return (
    <>
      <div
        className="our-story-card animation-card watchOnDevice"
        data-uia-nmhp="watchOnDevice"
        data-uia="our-story-card"
      >
        <div className="animation-card-container">
          <div className="our-story-card-text">
            <h1
              id=""
              className="our-story-card-title"
              data-uia="animation-card-title"
            >
              Watch everywhere.
            </h1>
            <h2
              id=""
              className="our-story-card-subtitle"
              data-uia="our-story-card-subtitle"
            >
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more.
            </h2>
          </div>
          <div className="our-story-card-img-container">
            <div className="our-story-card-animation-container">
              <img
                alt=""
                className="our-story-card-img"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
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
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
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
