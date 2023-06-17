import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { RxCross1 } from "react-icons/rx";
import nav_logo from "../assets/img/nav_logo.webp";
import { BiMenu } from "react-icons/bi";
const Hero = () => {
  const [first, setFirst] = useState(true);
  function clickshow() {
    setFirst(!first);
  }
  if (!first) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <section className="hero_bg vh_100 d-flex flex-column">
      <div className="py-3">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <span className="d-flex align-items-center pointer z_10">
                <img className="w-75" src={nav_logo} alt="nav_logo" />
              </span>
            </div>
            <ul
              className={`nav_show d-flex gap-5 align-items-center mb-0 ${
                first ? "" : "showw ps-0"
              }`}
            >
              <li onClick={() => setFirst(true)}>
                <a
                  className="fw_500 ff_Bold ff_Medium fs_sm clr_white mb-0  position-relative hover_line home nav_effect"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li onClick={() => setFirst(true)}>
                <a
                  className="fw_500 ff_Bold ff_Medium fs_sm clr_white mb-0 position-relative hover_line home nav_effect"
                  href="#"
                >
                  About
                </a>
              </li>
              <li onClick={() => setFirst(true)}>
                <a
                  className="fw_500 ff_Bold ff_Medium fs_sm clr_white mb-0 position-relative hover_line home nav_effect"
                  href="#"
                >
                  Products
                </a>
              </li>
              <li onClick={() => setFirst(true)}>
                <a
                  className="fw_500 ff_Bold ff_Medium fs_sm clr_white mb-0 position-relative hover_line home nav_effect"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="z_10 d-md-none">
              <h3 className="clr_white menu_icon" onClick={clickshow}>
                {first ? <BiMenu /> : <RxCross1 />}
              </h3>
            </div>
          </div>
        </Container>
      </div>
      <div className="text-centerd py-5 flex-grow-1 py-xl-0 d-flex align-items-center justify-content-center">
        <p className="fw_900 ff_Heavy clr_white fs_2xl lh_156 text-uppercase">
          3D Product <span className=" d-block">Animation</span>
        </p>
      </div>
    </section>
  );
};
export default Hero;
