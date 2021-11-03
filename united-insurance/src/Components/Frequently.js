import React from "react";
import "./Promotionother.css";

function Frequently() {
  return (
    <div className="container my-5 text_blue">
      <div className="row my-5 text-center font_600">
        <h3 className="fw-bold">Frequently Asked Question (FAQ)</h3>
        <p className="my-1">Lorem ipsum dolor sit amet, consetetur </p>
        <div className="row mt-3">
          <div className="col-6 ">
            <div className="row gap-3 px-3">
              <Frequentlyq
                title="Why Travel insurance?"
                img="assets/arrow-down.svg"
              />
              <Frequentlyq
                title="Is travel insurance compulsory?"
                img="assets/arrow-down.svg"
              />
              <Frequentlyq
                title="Can I change my trip details  after issuance of travel policy?"
                img="assets/arrow-down.svg"
              />
              <Frequentlyq
                title=" If I face any medical emergencies abroad who can I contact?"
                img="assets/arrow-down.svg"
              />
            </div>
          </div>
          <div className="col-6 ">
            <div className="row gap-3 px-3">
              <Frequentlyq
                title="What is depreciation?"
                img="assets/arrow-down.svg"
              />

              <Frequentlyq
                title="Is my travel insurance policy is refundable?"
                img="assets/arrow-down.svg"
              />

              <Frequentlyq
                title="Will I get compensation if my car is set on fire during a
                  public strike or a riot?"
                img="assets/arrow-down.svg"
              />

              <Frequentlyq
                title="Will I be indemnified in case of an accident if someone else
                  is driving my car?"
                img="assets/arrow-down.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frequentlyq({ title, img }) {
  return (
    <div className="row justify-content-between align-items-center p-3 py-4 font_600 box_shadow">
      <div className="col-9">
        <p className="m-0 text-start px-2">{title}</p>
      </div>
      <div className="col-3">
        <img src={img} className="arrow_width" alt="" />
      </div>
    </div>
  );
}

export default Frequently;
