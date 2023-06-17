import React from "react";
import { Row, Col } from "react-bootstrap";
import sed from "../assets/img/sed.webp";
import sed_1 from "../assets/img/sed.svg";
import Btnred from "./Btnred";

const Sed = () => {
  return (
    <section className="position-relative">
        <div className="position-absolute end-0 bottom-0 pe-5 pb-5">
            <img src={sed_1} alt="sed_1" />
        </div>
      <div className="max_w_1920">
        <Row>
          <Col md={6} className="pe-0">
            <img className="w-100" src={sed} alt="sed" />
          </Col>
          <Col
            md={6}
            className="ps-0 bg_black d-flex flex-column justify-content-center py-5 py-md-0"
          >
            <div className="ps-xl-5 ps-4 ms-xl-5">
              <p className="fw-900 ff_Heavy fs_xl clr_white lh_83 text_shado ps-xl-5 text-uppercase">
                Sed volutpat <span className="d-block">erat dignissim</span>
                <span className="d-block">iaculis aenean</span>
              </p>
              <p className="fw-400 ff_Bold ff_Medium fs_sm clr_white msx_w_490 ps-xl-5">
                Tincidunt phasellus id imperdiet lorem blandit. Congue donec
                scelerisque congue pellentesque massa porta vel donec dapibus.
              </p>
              <div className="ps-xl-5 mt-5 pt-2">
                <Btnred textbtn="Contact Us" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Sed;
