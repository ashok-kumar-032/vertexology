import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Btnred from "./Btnred";
import Slider from "react-slick";
import flower from "../assets/img/flower.webp";
import portfolios3 from "../assets/img/light.webp";
import portfolios4 from "../assets/img/portfolios4.webp";
import char from "../assets/img/char.png";
const Ourportfolios = () => {
  var ourportfolios = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  const first = React.useRef();
  return (
    <>
      <section className="py-5 overflow-hidden bg_layer position-relative">
        <Container className="py-lg-5 my-xl-4">
          <Row className="my-5 py-5">
            <Col lg={7} xl={8}>
              <p className="ff_Heavy fw_900 text-uppercase fs_lg lh_58 clr_black">
                Nisi et diam euismod
                <span className="d-block">suspendisse tristique quis</span>
              </p>
            </Col>
            <Col lg={5} xl={4}>
              <p className="ff_light fw_400 clr_black opacity_7">
                Tincidunt phasellus id imperdiet lorem blandit. Congue donec
                scelerisque congue pellentesque.
              </p>
              <Btnred textbtn="Contact Us" />
            </Col>
          </Row>
          <div className="space_200px leftline"></div>
          <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between mb-4">
            <p className="ff_Heavy fw_900 text-uppercase fs_xl clr_black mb-0">
              Our Portfolios
            </p>
            <div className="d-flex gap-3">
              <span className="btnarrows">
                <svg
                  onClick={() => first.current.slickPrev()}
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="26.5217"
                    cy="26.5217"
                    r="25.9913"
                    stroke="url(#paint0_linear_1_41)"
                    stroke-width="1.06087"
                  />
                  <path
                    d="M31.6142 32.887L25.249 26.5218L31.6142 20.1566L30.3412 17.6105L21.4298 26.5218L30.3412 35.4331L31.6142 32.887Z"
                    fill="white"
                  />
                  <path
                    d="M31.6142 32.887L25.249 26.5218L31.6142 20.1566L30.3412 17.6105L21.4298 26.5218L30.3412 35.4331L31.6142 32.887Z"
                    fill="url(#paint1_linear_1_41)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_41"
                      x1="-6.58925"
                      y1="6.38486"
                      x2="42.7664"
                      y2="53.5892"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF2801" />
                      <stop offset="1" stop-color="#FF6500" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_41"
                      x1="30.3883"
                      y1="37.6471"
                      x2="16.4076"
                      y2="29.294"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF2801" />
                      <stop offset="1" stop-color="#FF6500" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="btnarrows">
                <svg
                  onClick={() => first.current.slickNext()}
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="27.4783"
                    cy="26.5217"
                    r="26.5217"
                    fill="#D9D9D9"
                  />
                  <circle
                    cx="27.4783"
                    cy="26.5217"
                    r="26.5217"
                    fill="url(#paint0_linear_1_46)"
                  />
                  <path
                    d="M22.3852 32.887L28.7504 26.5218L22.3852 20.1566L23.6582 17.6105L32.5695 26.5218L23.6582 35.4331L22.3852 32.887Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_46"
                      x1="-5.63271"
                      y1="6.38486"
                      x2="43.723"
                      y2="53.5892"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF2801" />
                      <stop offset="1" stop-color="#FF6500" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
          <Slider {...ourportfolios} className="portfolios" ref={first}>
            <div className="py-1 px_12px">
              <img src={flower} alt="flower" className="w-100" />
            </div>
            <div className="py-1 px_12px">
              <img src={char} alt="char" className="w-100" />
            </div>
            <div className="py-1 px_12px">
              <img src={portfolios3} alt="portfolios3" className="w-100" />
            </div>
            <div className="py-1 px_12px">
              <img src={portfolios4} alt="portfolios3" className="w-100" />
            </div>
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default Ourportfolios;
