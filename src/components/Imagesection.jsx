import React from "react";
import first from "../assets/img/firstimg.webp";
import { Col, Row } from "react-bootstrap";
import Btnred from "./Btnred";
import headphone from "../assets/img/headphone_img.gif";
import man from "../assets/img/man.webp";
const Imagesection = () => {
  return (
    <>
      <section className="overflow-hidden maxw_1920 m-auto">
        <Row>
          <Col lg={6} className="p-0">
            <img src={first} alt="first" className="w-100" />
          </Col>
          <Col lg={6} className="p-0">
            <div className="bg_black h-100 sedmtl_200 position-relative">
              <p className="ff_Heavy fw_900 fs_xl clr_white lh_82 sedmw_498px text-uppercase mb-1">
                Sed volutpat erat dignissim iaculis aenean
              </p>
              <p className="ff_Light fw_400 fs_sm clr_white sedmw_498px mb-5">
                Tincidunt phasellus id imperdiet lorem blandit. Congue donec
                scelerisque congue pellentesque massa porta vel donec dapibus.
              </p>
              <div className="pt-3">
                <Btnred textbtn="Contact Us" />
              </div>
            </div>
          </Col>
          <Col lg={6} className="p-0">
            <div className="h-100 bg_white_1 bg_layer tempormtl position-relative">
              <p className="ff_Heavy fw_900 fs_xl lh_82 sedmw_498px text-uppercase mb-1">
                At tempor, amet viverra eu Quisque
              </p>
              <p className="ff_Light fw_400 fs_sm sedmw_498px mb-4">
                Faucibus pulvinar enim in sagittis. Aliquam libero dolor iaculis
                in aliquam. Cursus nibh enim sed et, mauris morbi. Faucibus
                viverra et diam sit cursus. Pellentesque posuere.
              </p>
              <div className="pt-3">
                <Btnred textbtn="Talk To Me" />
              </div>
            </div>
          </Col>
          <Col lg={6} className="p-0">
            <div className="h-100">
              <img src={headphone} alt="headphone" className="w-100 h-100" />
            </div>
          </Col>
          <Col lg={6} className="p-0">
            <img src={man} alt="man" className="w-100" />
          </Col>
          <Col lg={6} className="p-0">
            <div className="bg_black h-100 johnmtl position-relative">
              <p className="ff_Light fw_400 fs_sm clr_white">About me</p>
              <p className="ff_Heavy fw_900 fs_xl clr_white fs_lg sedmw_498px text-uppercase mb-1">
                John Smith
              </p>
              <p className="ff_Light fw_400 fs_sm clr_white sedmw_498px mb-4">
                Euismod nunc mauris lacinia sapien nulla accumsan condimentum.
                Lectus vitae tristique tellus amet quis eu faucibus leo. Dictum
                mauris ultrices sed urna, eget cras. Nullam egestas eros
                senectus et, erat aliquet in. Egestas interdum gravida
                pellentesque amet, quisque. In quis vitae lectus aenean congue
                odio sit semper porta. Pellentesque id tempus, mauris donec
                facilisis.
              </p>
              <div className="pt-3">
                <Btnred textbtn="Contact with Me" />
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Imagesection;
