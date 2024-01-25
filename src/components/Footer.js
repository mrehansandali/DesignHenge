import React from "react";
import "./footer.css"
import logo from "../assets/logo_main.png"
import pay1 from "../assets/pay_met.png"
import pay2 from "../assets/pay_met2.png"
import pay3 from "../assets/pay_met3.png"
import pay4 from "../assets/pay_met4.png"
import pay5 from "../assets/pay_met5.png"

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-content pt-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50 first_div_foot">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img
                        src={logo}
                        className="img-fluid"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div className="footer-text foot_first">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                  </div>
                  <div className="footer-social-icon">
                    <h3>Follow us</h3>
                    <a href="#!">
                      <i className="active fab fa-facebook-f " />
                    </a>
                    <a href="#!">
                      <i className="fab fa-twitter " />
                    </a>
                    <a href="#!">
                      <i className="fab fa-google-plus-g " />
                    </a>
                    <a href="#!">
                      <i className="fab fa-google-plus-g " />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-6 mb-30">
                <div className="footer-widget foot_quick">
                  <div className="footer-widget-heading">
                    <h3>Quick Links</h3>
                  </div>
                  <div className="ql_ul">
                    <ul>
                      <li>
                        <a href="/">Warranty Policy</a>
                      </li>
                      <li>
                        <a href="/">Returns &amp; Refunds Shipping</a>
                      </li>
                      <li>
                        <a href="/">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a href="/">Purchase Order Policy</a>
                      </li>
                      <li>
                        <a href="/">Sitemap</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="/">About us</a>
                      </li>
                      <li>
                        <a href="/">Contact us</a>
                      </li>
                      <li>
                        <a href="/">Kratom</a>
                      </li>
                      <li>
                        <a href="/">Brand</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Address</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <div className="foot-address">
                      <ul>
                        <li>
                          <span>
                            <i className="fa-solid fa-phone" />
                          </span>
                          123-456-7890
                        </li>
                        <li>
                          <span>
                            <i className="fa-solid fa-envelope" />
                          </span>
                          support@yourdomain.com
                        </li>
                        <li>
                          <span>
                            <i className="fa-solid fa-location-dot" />
                          </span>
                          location Lorem ipsum dolor sit amet.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="foot-desc">
                  <div className="footer-widget-heading">
                    <h3>Disclaimer</h3>
                    <p>
                      Our content is not intended to provide medical advice,
                      diagnosis or treatment. The information we provide does
                      not constitute a medical consultation, and the products we
                      offer are not intended to diagnose, treat, cure, or
                      prevent any disease. The statements made about our
                      products have not been evaluated by the Food and Drug
                      Administration (FDA), and their efficacy has not been
                      confirmed by FDA-approved research. It is important to
                      note that the information provided here is not a
                      substitute for professional medical advice.
                    </p>
                    <p>
                      Additionally, our products are not for sale or use by
                      individuals under the age of 21. KratomGala.com does not
                      endorse and is not responsible for any User Content.
                    </p>
                    <p>
                      We are unable to ship our products to the following
                      states, cities, and counties where kratom is prohibited:
                      Alabama, Arkansas, Indiana, Rhode Island, Tennessee,
                      Vermont, Wisconsin, Sarasota County, Union County, Denver,
                      San Diego, Jerseyville IL, Oceanside CA, and Ontario OR.
                      Moreover, we cannot ship to countries where kratom is
                      banned, including Australia, Burma, Denmark, Finland,
                      Israel, Lithuania, Malaysia, Myanmar, Poland, Romania,
                      South Korea, Sweden, Thailand, United Kingdom, and
                      Vietnam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 ">
                <div className="copyright-text">
                  <p>Copyright © 2023 All Rights Reserved 2018</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="footer-menu ">
                  <ul className="text-right">
                    <li>
                      <h4>Payment Method</h4>
                    </li>
                    <li>
                      <img className="img-fluid" alt="" src={pay1} />
                    </li>
                    <li>
                      <img className="img-fluid" alt="" src={pay2} />
                    </li>
                    <li>
                      <img className="img-fluid" alt="" src={pay3} />
                    </li>
                    <li>
                      <img className="img-fluid" alt="" src={pay4} />
                    </li>
                    <li>
                      <img className="img-fluid" alt="" src={pay5} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
