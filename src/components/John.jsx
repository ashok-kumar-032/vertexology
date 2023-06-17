import React from "react";
import { Row, Col } from "react-bootstrap";
import Btnred from "./Btnred";
import sed_1 from "../assets/img/sed.svg";
import john from "../assets/img/john.webp";

const John = () => {
  return (
    <section className="position-relative">
      <div className="position-absolute end-0 bottom-0 pe-5 pb-5">
        <img src={sed_1} alt="sed_1" />
      </div>
      <div className="max_w_1920">
        <Row>
          <Col md={6} className="pe-0">
            <img className="w-100" src={john} alt="john" />
          </Col>
          <Col
            md={6}
            className="ps-0 bg_black d-flex flex-column justify-content-center py-5 py-md-0"
          >
            <div className="ps-xl-5 ps-4 ms-xl-5">
              <p className="fw-400 ff_Bold ff_Medium fs_sm clr_white text_shado ps-xl-5">
                About me
              </p>
              <p className="fw-900 ff_Heavy fs_xl clr_white lh_83 text_shado ps-xl-5 text-uppercase mb-0">
                John Smith
              </p>
              <p className="fw-400 ff_Bold ff_Medium fs_sm clr_white msx_w_490 ps-xl-5">
                Euismod nunc mauris lacinia sapien nulla accumsan condimentum.
                Lectus vitae tristique tellus amet quis eu faucibus leo. Dictum
                mauris ultrices sed urna, eget cras. Nullam egestas eros
                senectus et, erat aliquet in. Egestas interdum gravida
                pellentesque amet, quisque. In quis vitae lectus aenean congue
                odio sit semper porta. Pellentesque id tempus, mauris donec
                facilisis.
              </p>
              <div className="ps-xl-5 mt-5 pt-2">
                <Btnred textbtn="Contact with Me" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default John;
