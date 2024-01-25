import React from "react";
import "./testimonail.css";
import Slider from "react-slick";
import b1 from "../assets/pantcoat.jpg";

const Testimonial = () => {
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <section className="testimonialsection">
      <div className="container mt-5">
      <i className="fa-solid fa-quote-right double-quote"></i>
        <h1 className="categoriesH1">
          Our Happy <span>Clients</span>
        </h1>

        <div className="slider">
          <Slider {...settings}>
            <div className="sliderontent">
              <p>
                Lorem ipsum dolor, sit amet consere explicabo ea aut quisquam
                quaerat repellat qui? Impedit, quae.
              </p>
              <img src={b1} alt="" />
              <h4>Rehan Sandali</h4>
            </div>
            <div className="sliderontent">
              <p>
                Lorem ipsum, dolor sit amet consere explicabo ea aut consectetur adipisicing elit. Animi
                adipisci veritatis, eius placeat! Provident nostrum fugiat
                nisi sapiente, placeat voluptate quis.
              </p>
              <img src={b1} alt="" />
              <h4>Rehan Sandali</h4>
            </div>
            <div className="sliderontent">
              <p>
                Lorem ipsum dolor s cumque delectus praesentium
                doloribus velit veniam minus, temporibus aut facilis id?
              </p>
              <img src={b1} alt="" />
              <h4>Rehan Sandali</h4>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
