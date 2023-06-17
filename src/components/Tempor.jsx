import React from "react";
import { Row, Col } from "react-bootstrap";
import headphone from "../assets/img/headphone.gif";
import footer_full_1 from "../assets/img/footer_full_1.svg";
import Btnred from "./Btnred";
const Tempor = () => {
  return (
    <section className="position-relative">
      <div className="position-absolute start-0 bottom-0 ps-5 pb-5">
        <img src={footer_full_1} alt="footer_full_1" />
      </div>
      <div className="max_w_1920">
        <Row>
          <Col
            md={6}
            className="pe-0 d-flex flex-column justify-content-center py-5 py-md-0 bg_layer"
          >
            <div className="ps-xl-5 ps-4 ms-xl-5">
              <p className="fw-900 ff_Heavy fs_xl clr_black lh_83 text_shado ps-xl-5 text-uppercase">
                At tempor,
                <span className="d-block">amet viverra</span>
                <span className="d-block">eu Quisque</span>
              </p>
              <p className="fw-400 ff_Bold ff_Medium fs_sm clr_black msx_w_490 ps-xl-5 opacity_7">
                Tincidunt phasellus id imperdiet lorem blandit. Congue donec
                scelerisque congue pellentesque massa porta vel donec dapibus.
              </p>
              <div className="ps-xl-5 mt-5 pt-2">
                <Btnred textbtn="Talk To Me" />
              </div>
            </div>
          </Col>
          <Col md={6} className="ps-0">
            <img className="w-100" src={headphone} alt="headphone" />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Tempor;
