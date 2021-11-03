import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="container">
      <div className="row py-5 my-5">
        <div className="col-md-5 text_blue p-3 p-md-5 ps-md-0 d-flex flex-column justify-content-center">
          <h2 className="fw-bold">Our Sevices</h2>
          <p className="m-0 ">
            Your comfort and satisfaction is most valuable for us. With our
            customized plans, you can buy insurance policies tailored to your
            needs. The United Insurance Company of Pakistan Ltd is a high rated
            (AA by PACRA) leading insurance company of the country. We offer
            wide range of General Insurance/Takaful Products. You can buy travel
            insurance, motor insurance and health insurance online. Just click
            on respective option and get insurance policy instantly.
          </p>
        </div>

        <div className="col-md-7 text_blue">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 height_set1  d-flex flex-column align-items-center justify-content-center ">
              <div className="col-md-12 height_set1 border d-flex flex-column align-items-center justify-content-center ">
                <div className="d-flex flex-column gap_y">
                  <div className="d-flex">
                    <img src="assets/health.svg" alt="" />
                    <div className="ms-3">
                      <h3>Health</h3>
                      <h3>Insurance</h3>
                    </div>
                  </div>
                  <img src="assets/Mask Group 17.png" alt="" />
                  <div className="row gx-0">
                    <a
                      className="col-6 d-flex justify-content-center align-items-center"
                      href=""
                    >
                      See Details
                    </a>
                    <button className="btn_1round col-6 py-2 round_right">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex flex-column gap-3 ">
              <div className="col-md-12 height_set1 border d-flex flex-column align-items-center justify-content-center ">
                <div className="d-flex flex-column gap_y">
                  <div className="d-flex">
                    <img src="assets/aeroplane.svg" alt="" />
                    <div className="ms-3">
                      <h3>Vehicle</h3>
                      <h3>Insurance</h3>
                    </div>
                  </div>
                  <img src="assets/image 18.png" alt="" />
                  <div className="row gx-0">
                    <a
                      className="col-6 d-flex justify-content-center align-items-center"
                      href="#"
                    >
                      See Details
                    </a>
                    <button className="btn_1round col-6 py-2 round_right">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-12 height_set1 border d-flex flex-column align-items-center justify-content-center ">
                <div className="d-flex flex-column gap_y">
                  <div className="d-flex">
                    <img src="assets/car.svg" alt="" />
                    <div className="ms-3">
                      <h3>Travel</h3>
                      <h3>Insurance</h3>
                    </div>
                  </div>
                  <img src="assets/Mask Group 17.png" alt="" />
                  <div className="row gx-0">
                    <a
                      className="col-6 d-flex justify-content-center  align-items-center"
                      href=""
                    >
                      See Details
                    </a>
                    <button className="btn_1round col-6 py-2 round_right">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
