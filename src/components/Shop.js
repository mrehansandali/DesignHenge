import React from "react";
import "./shop.css";
import Slider from "react-slick";
import b1 from "../assets/t1.png";
import b2 from "../assets/t2.png";
import b3 from "../assets/t3.png";
import b5 from "../assets/t5.png";
import stars from "../assets/stars.png"

const Shop = () => {
  const settings = {
    dots: false,
    slidesToShow: 5,
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
          slidesToShow: 1,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <section className="shopsection">
      <div className="container text-center">
        <h1 className="categoriesH1">
          Shop By Kratom <span>Liquid</span>
        </h1>

        <div className="slider MRslider">
          <Slider {...settings}>
            <div className="MRslide">
              <div className="sliderontent">
                <img src={b1} alt="" />
                <h5>LOREM IPSUM DOLOR AMET CONSECTETUR</h5>
                <img className="stars" src={stars} alt="" />
                <h4>$67.00</h4>
                <button className="MRbtn atcbtn"><span><i class="fa-solid fa-cart-shopping"></i></span> ADD TO CART</button>
              </div>
            </div>
            <div className="MRslide">
              <div className="sliderontent">
                <img src={b2} alt="" />
                <h5>LOREM IPSUM DOLOR AMET CONSECTETUR</h5>
                <img className="stars" src={stars} alt="" />
                <h4>$67.00</h4>
                <button className="MRbtn atcbtn"><span><i class="fa-solid fa-cart-shopping"></i></span> ADD TO CART</button>
              </div>
            </div>
            <div className="MRslide">
              <div className="sliderontent">
                <img src={b3} alt="" />
                <h5>LOREM IPSUM DOLOR AMET CONSECTETUR</h5>
                <img className="stars" src={stars} alt="" />
                <h4>$67.00</h4>
                <button className="MRbtn atcbtn"><span><i class="fa-solid fa-cart-shopping"></i></span> ADD TO CART</button>
              </div>
            </div>
            <div className="MRslide">
              <div className="sliderontent">
                <img src={b1} alt="" />
                <h5>LOREM IPSUM DOLOR AMET CONSECTETUR</h5>
                <img className="stars" src={stars} alt="" />
                <h4>$67.00</h4>
                <button className="MRbtn atcbtn"><span><i class="fa-solid fa-cart-shopping"></i></span> ADD TO CART</button>
              </div>
            </div>
            <div className="MRslide">
              <div className="sliderontent">
                <img src={b5} alt="" />
                <h5>LOREM IPSUM DOLOR AMET CONSECTETUR</h5>
                <img className="stars" src={stars} alt="" />
                <h4>$67.00</h4>
                <button className="MRbtn atcbtn"><span><i class="fa-solid fa-cart-shopping"></i></span> ADD TO CART</button>
              </div>
            </div>
            <div className="MRslide">
              <div className="sliderontent">
                <img src={b3} alt="" />
                <h5>LOREM IPSUM DOLOR AMET CONSECTETUR</h5>
                <img className="stars" src={stars} alt="" />
                <h4>$67.00</h4>
                <button className="MRbtn atcbtn"><span><i class="fa-solid fa-cart-shopping"></i></span> ADD TO CART</button>
              </div>
            </div>
          </Slider>
        </div>
        <button className="orderbtn">ORDER KRATOM NOW</button>
      </div>
    </section>
  );
};

export default Shop;
