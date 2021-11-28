import React from "react";

export default function HeroKids() {
  return (
    <>
      <div
        className="our-story-card animation-card kidsValueProp flipped"
        data-uia-nmhp="kidsValueProp"
        data-uia="our-story-card"
      >
        <div className="animation-card-container">
          <div className="our-story-card-text">
            <h1
              id=""
              className="our-story-card-title"
              data-uia="animation-card-title"
            >
              Create profiles for kids.
            </h1>
            <h2
              id=""
              className="our-story-card-subtitle"
              data-uia="our-story-card-subtitle"
            >
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </h2>
          </div>
          <div className="our-story-card-img-container">
            <div className="our-story-card-animation-container">
              <img
                alt=""
                className="our-story-card-img"
                src="https://occ-0-5515-2774.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd"
                data-uia="our-story-card-img"
              />
              <div className="our-story-card-animation">
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
