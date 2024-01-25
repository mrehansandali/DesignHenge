import React from "react";
import heroimg from "../assets/banner-home.png";
// import right2img from "../assets/Untitled-2.jpg";
import "./hero.css";
import Sliders from "./Sliders";
import WhyUs from "./WhyUs";
import About from "./About";
import Shop from "./Shop";
import Testimonial from "./Testimonial";
import Subscribe from "./Subscribe";

const Hero = () => {
  return (
    <>
      <main>
        <section className="herosection">
          <div className="container">
            <div className="herosection">
              <div className="left">
                <h1>
                  KRAMTOM <br /> <span>FOR SALE</span>
                </h1>
                <div className="line"></div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatum explicabo uri assumenda impedit animi perferendis,
                  labore quod num aperiam.
                </p>
                <button>Shop Now</button>
              </div>
              <div className="right">
                <img src={heroimg} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="herosection2">
              <div className="left2">
                <h4>ABOUT</h4>
                <h3>KRAMTOM GALA</h3>
                <p>
                  Lorem ipsum dolor sit tetur adi amet consectetur adipisicing
                  elit.
                </p>
              </div>
              <div className="right2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam quidem nostrum aliquam provident, minus facere
                  placeat unde inventore, molestiae porro assumenda repellat
                  impedit odit architecto perspiciatis ab quae sit vero voluptas
                  quas repellendus et doloribus?
                </p>
                <button>Discover More</button>
                {/* <img className="rightimg2" src={right2img} alt="" /> */}
              </div>
            </div>
          </div>
        </section>

        <Sliders />
        <About/>
        <Shop/>
        <WhyUs/>
        <Testimonial/>
        <Subscribe/>
      </main>
    </>
  );
};

export default Hero;
