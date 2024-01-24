import React from "react";
import "./slider.css";
import Slider from "react-slick";
import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.png";
import b4 from "../assets/b4.png";

const Sliders = () => {
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
      <section>
        <div className="container mt-5">
        <h1 className="categoriesH1">Kratom Extract <span>Categories</span></h1>

        <div className="slider">
          <Slider {...settings}>
            <div className="sliderontent">
              <img src={b1} alt="" />
              <h5>Extract</h5>
              <h4>Liquid</h4>
            </div>
            <div className="sliderontent">
              <img src={b2} alt="" />
              <h5>Extract</h5>
              <h4>Capsules</h4>
            </div>
            <div className="sliderontent">
              <img src={b3} alt="" />
              <h5>Extract</h5>
              <h4>Powder</h4>
            </div>
            <div className="sliderontent">
              <img src={b4} alt="" />
              <h5>Extract</h5>
              <h4>Tablets</h4>
            </div>
            <div className="sliderontent">
              <img src={b3} alt="" />
              <h5>Extract</h5>
              <h4>Powder</h4>
            </div>
          </Slider>
        </div>
        </div>
      </section>
  );
};

export default Sliders;
