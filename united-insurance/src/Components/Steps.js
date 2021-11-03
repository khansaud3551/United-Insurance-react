import React from "react";

function Steps() {
  return (
    <div className="container-fliud text-center px-5 py-5 text_blue bg_gray">
      <h3 className="my-3 fw-bold">GET INSURED IN JUST 4 STEPS</h3>
      <div className="row py-4">
        <StepsCount
          img="assets/steps1.png"
          heading="1. Submit Details"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
        />
        <StepsCount
          img="assets/steps2.png"
          heading="2. Select Package"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
        />
        <StepsCount
          img="assets/setps3.png"
          heading="3. Personal Profile"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
        />
        <StepsCount
          img="assets/steps4.png"
          heading="4. E-Payment"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
        />
      </div>
    </div>
  );
}

export default Steps;

function StepsCount({ img, heading, text }) {
  return (
    <div className="col-3">
      <img src={img} alt="" />
      <h3 className="my-3 text_blue">{heading}</h3>
      <p className="px-5">{text}</p>
    </div>
  );
}
