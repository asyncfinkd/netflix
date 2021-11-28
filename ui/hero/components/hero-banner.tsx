import React from "react";

export default function HeroBanner() {
  return (
    <>
      <div
        className="our-story-card hero-card hero_fuji vlv"
        data-uia-nmhp="hero_fuji"
        data-uia="our-story-card"
      >
        <div className="our-story-card-background">
          <div
            className="concord-img-wrapper"
            data-uia="concord-img-wrapper"
            style={{ height: "733px" }}
          >
            <img
              className="concord-img vlv-creative"
              src="https://assets.nflxext.com/ffe/siteui/vlv3/03fdc4bf-72f6-4926-83a7-a76e6a1a5591/e4e71451-592d-4701-ad43-ac440805001a/GE-en-20211115-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
              srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/03fdc4bf-72f6-4926-83a7-a76e6a1a5591/e4e71451-592d-4701-ad43-ac440805001a/GE-en-20211115-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/03fdc4bf-72f6-4926-83a7-a76e6a1a5591/e4e71451-592d-4701-ad43-ac440805001a/GE-en-20211115-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/03fdc4bf-72f6-4926-83a7-a76e6a1a5591/e4e71451-592d-4701-ad43-ac440805001a/GE-en-20211115-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
              alt=""
              rel="noopener noreferrer"
            />
            <div className="concord-img-gradient"></div>
          </div>
        </div>
        <div className="our-story-card-text">
          <h1 id="" className="our-story-card-title" data-uia="hero-title">
            Unlimited movies, TV shows, and more.
          </h1>
          <h2
            id=""
            className="our-story-card-subtitle"
            data-uia="our-story-card-subtitle"
          >
            Watch anywhere. Cancel anytime.
          </h2>
          <form
            className="cta-form email-form"
            data-uia="email-form"
            method="GET"
          >
            <h3 className="email-form-title">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="email-form-lockup">
              <ul className="simpleForm structural ui-grid">
                <li
                  data-uia="field-email+wrapper"
                  className="nfFormSpace field-email"
                >
                  <div
                    data-uia="field-email+container"
                    className="nfInput nfInputResponsive"
                  >
                    <div className="nfInputPlacement">
                      <label className="input_id" placeholder="email">
                        <input
                          type="email"
                          data-uia="field-email"
                          name="email"
                          className="nfTextField"
                          id="id_email_hero_fuji"
                          value=""
                          tabIndex={0}
                          autoComplete="email"
                          maxLength={50}
                          minLength={5}
                          dir=""
                        />
                        <label
                          htmlFor="id_email_hero_fuji"
                          className="placeLabel"
                        >
                          Email address
                        </label>
                      </label>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="our-story-cta-container cta-link-wrapper">
                <button
                  className="btn btn-red nmhp-cta nmhp-cta-extra-large btn-none btn-custom"
                  type="submit"
                  tabIndex={0}
                  role="link"
                  data-uia="our-story-cta-hero_fuji"
                >
                  <span id="" className="cta-btn-txt" data-uia="">
                    Get Started
                  </span>
                  <span id="" className="chevron-right-arrow" data-uia="">
                    <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                      <desc>chevron</desc>
                      <path
                        d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
                        fill="none"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </form>
          <h3
            id=""
            className="our-story-card-disclaimer"
            data-uia="our-story-card-disclaimer"
          ></h3>
        </div>
        <div className="center-pixel" style={{ position: "absolute" }}></div>
      </div>
    </>
  );
}
