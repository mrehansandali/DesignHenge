import React from "react";
import "./subscribe.css";

const Subscribe = () => {
  return (
    <>
      <section className="subscribesection">
        <h2>
          Subscribe to <br /> <span>Our Discount and Offers</span>
        </h2>
        <div className="MRSubscribeForm">
          <input
            type="text"
            className="search"
            id="search-inp"
            placeholder="Enter Email Address"
          />
          <button className="subscribe-btn" id="subscribe-btn">
            <i className="fa-solid fa-magnifying-glass me-2"></i>Subscribe
          </button>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
