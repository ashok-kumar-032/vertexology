import React from "react";
import nav_logo from "../assets/img/nav_logo.webp";
import insta from "../assets/img/insta.svg";
import Be from "../assets/img/Be.svg";
import youtube from "../assets/img/youtube.svg";
import facebook from "../assets/img/facebook.svg";
import twiter from "../assets/img/twiter.svg";
import linkedin from "../assets/img/linkedin.svg";
import footer_full from "../assets/img/footer_full.svg";
import footer_full_1 from "../assets/img/footer_full_1.svg";
import footer_gol_big from "../assets/img/footer_gol_big.png";
import footer_gol_s from "../assets/img/footer_gol_s.png";
import { Container, Row, Col } from "react-bootstrap";

const Utn = () => {
  return (
    <section className="footer_back position-relative">
      <div className="position-absolute start-0 top-0 ps-lg-5 pt-lg-3 d-none d-sm-block">
        <img src={footer_full} alt="footer_full" />
      </div>
      <div className="position-absolute end-0 bottom-0 pb-5 mb-4 pe-5 d-none d-sm-block">
        <img src={footer_full_1} alt="footer_full_1" />
      </div>
      <div className="position-absolute footer_gol_big">
        <img src={footer_gol_big} alt="footer_gol_big" />
      </div>
      <div className="position-absolute footer_gol_s d-none d-lg-block">
        <img src={footer_gol_s} alt="footer_gol_s" />
      </div>
      <Container className="py-5">
        <Row>
          <Col lg={7}>
            <img className="pointer" src={nav_logo} alt="nav_logo" />
            <p className="fw-900 ff_Heavy clr_black fs_xl text-uppercase text_shadow lh_83 mb-0 pt-5">
              UTN VULPUTATE<span className="d-block">RUTRUM BIBEND PURU.</span>
            </p>
            <p className="fw_400 ff_Bold ff_Medium fs_sm clr_black opacity_7 max_w_630 pt-1">
              Faucibus pulvinar enim in sagittis. Aliquam libero dolor iaculis
              in aliquam. Cursus nibh enim sed et, mauris morbi. Faucibus
              viverra et diam sit cursus.
            </p>
            <div className="email_btn  email_w d-flex justify-content-between align-items-center flex-column flex-sm-row">
              <div className="ps-3">
                <span>
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.67895 3.57422C5.05029 3.57422 4.44738 3.82395 4.00286 4.26848C3.55833 4.71301 3.30859 5.31592 3.30859 5.94458V6.1828L10.4197 10.0121L17.5307 6.18398V5.94458C17.5307 5.31592 17.281 4.71301 16.8365 4.26848C16.3919 3.82395 15.789 3.57422 15.1604 3.57422H5.67895ZM17.5307 7.52916L10.7006 11.2068C10.6142 11.2532 10.5177 11.2776 10.4197 11.2776C10.3216 11.2776 10.2251 11.2532 10.1388 11.2068L3.30859 7.52916V13.0556C3.30859 13.6843 3.55833 14.2872 4.00286 14.7317C4.44738 15.1763 5.05029 15.426 5.67895 15.426H15.1604C15.789 15.426 16.3919 15.1763 16.8365 14.7317C17.281 14.2872 17.5307 13.6843 17.5307 13.0556V7.52916Z"
                      fill="#B2B2B2"
                    />
                  </svg>
                </span>
                <input
                  className="fw_400 fs_xsm ff_Bold ff_Medium border-0 mb-0 clr_input opacity_4"
                  type="text"
                  placeholder="Enter Email Address"
                />
              </div>
              <button className="fw_700 fs_xsm ff_Bold ff_Medium clr_white submit_btn border-0">
                SUBMIT
              </button>
            </div>
          </Col>
          <Col lg={5} className=" d-flex justify-content-lg-end">
            <div className="d-flex flex-row flex-lg-column mt-4">
              <a href="#">
                <img
                  className="footer_hover"
                  src={insta}
                  alt="insta"
                  width={39}
                  height={39}
                />
              </a>
              <a href="#">
                {" "}
                <img
                  className="mt-lg-3 ms-3 ms-lg-0 footer_hover"
                  src={Be}
                  alt="Be"
                  width={39}
                  height={39}
                />
              </a>
              <a href="#">
                <img
                  className="mt-lg-3 ms-3 ms-lg-0 footer_hover"
                  src={youtube}
                  alt="youtube"
                  width={39}
                  height={39}
                />
              </a>
              <a href="#">
                <img
                  className="mt-lg-3 ms-3 ms-lg-0 footer_hover"
                  src={facebook}
                  alt="facebook"
                  width={39}
                  height={39}
                />
              </a>
              <a href="#">
                <img
                  className="mt-lg-3 ms-3 ms-lg-0 footer_hover"
                  src={twiter}
                  alt="twiter"
                  width={39}
                  height={39}
                />
              </a>
              <a href="#">
                <img
                  className="mt-lg-3 ms-3 ms-lg-0 footer_hover"
                  src={linkedin}
                  alt="linkedin"
                  width={39}
                  height={39}
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="footer_line" />
      <Container>
        <div className=" d-flex align-items-center justify-content-between">
          <p className="fw_400 fs_sm ff_Bold ff_Medium clr_black opacity_6">
            Copyright ©2022 | ABA
          </p>
          <p className="fw_400 fs_sm ff_Bold ff_Medium clr_black opacity_6">
            All Rights Reserved.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Utn;
