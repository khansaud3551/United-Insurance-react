import React from "react";

function OurCustomer() {
  return (
    <div className="container my-5">
      <h3 class="text_blue fw-bold my-3 text-center">Our Customers Love Us</h3>
      <div className="row">
        <div className="col-4 p-3 mt-4">
          <div className="border  box_round">
            <img
              src="/assets/black-qoute.png"
              alt=""
              className="mx-auto d-flex my-2"
            />
            <p className="my-4 mt-2 text_blue text-center  p-3">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et.
            </p>
          </div>
          <div className="d-flex gap-3 minus_margin">
            <img src="assets/customer.png" alt="" />
          </div>
        </div>
        <div className="col-4 p-3 ">
          <div className="border bg_blue box_round">
            <img
              src="/assets/white.png"
              alt=""
              className="mx-auto d-flex my-2"
            />
            <p className="my-4 mt-2 text-white text-center  p-3">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et.
            </p>
          </div>
          <div className="d-flex gap-3 mt-2 px-1">
            <img src="assets/Ellipse 29.png" alt="" />
            <div className="d-flex flex-column justify-content-center font_500">
              <p className="m-0">Annie Shah</p>
              <p className="m-0">CEO - CyberVision</p>
            </div>
          </div>
        </div>
        <div className="col-4 p-3 mt-4">
          <div className="border  box_round">
            <img
              src="/assets/black-qoute.png"
              alt=""
              className="mx-auto d-flex my-2"
            />
            <p className="my-4 mt-2 text_blue text-center  p-3">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et.
            </p>
          </div>
          <div className="d-flex gap-3 minus_margin">
            <img src="assets/Ellipse -1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCustomer;
