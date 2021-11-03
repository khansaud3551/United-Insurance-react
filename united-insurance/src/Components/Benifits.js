import React from "react";
import "./Benifits.css";

function Benifits() {
  return (
    <div className="container my-5">
      <div className="row ">
        <div className="col-12">
          <h3 className="text_blue fw-bold text-center">
            AN EASIER WAY TO GET INSURED
          </h3>
          <p className="text-center " style={{ color: "#ABAAAA" }}>
            Compare life insurance, health insurance, auto insurance and travel
            insurance to select the best plan for you.
          </p>
          <div className="row align-items-center justify-content-between">
            <div className="col-3 ">
              <div className="col-12 my-5">
                <h4 className="text_blue position-relative">
                  Packages<span className="steps_count">01</span>
                </h4>
                <p className="text_blue mt-4">
                  We offer value for money packages to our valued clients and
                  provide adequate risk coverage.
                </p>
              </div>
              <div className="col-12 my-5">
                <h4 className="text_blue position-relative">
                  Hassle Free Transaction
                  <span className="steps_count">03</span>
                </h4>
                <p className="text_blue ">
                  You can buy insurance from anywhere, any time. Secure, hassle
                  free transactions boost up your reliance and satisfaction.
                </p>
              </div>
              <div className="col-12 my-5">
                <h4 className="text_blue position-relative">
                  Right choice<span className="steps_count">05</span>
                </h4>
                <p className="text_blue ">
                  Our highly qualified Insurance professionals and support team
                  available 24/7 to guide you for selection of Right Plan
                </p>
              </div>
            </div>
            <div className="col-5 d-flex p-5">
              <img
                src="/assets/Group 293.png"
                alt=""
                className="mx-auto w-100"
              />
            </div>
            <div className="col-3 text-end">
              <div className="col-12 my-5">
                <h4 className="text_blue position-relative">
                  Online Access<span className="steps_count2">02</span>
                </h4>
                <p className="text_blue ">
                  View our plans, packages, special offers anywhere, anytime by
                  online access to our secure web portals.
                </p>
              </div>
              <div className="col-12 my-5">
                <h4 className="text_blue position-relative">
                  E-Payments <span className="steps_count2">04</span>
                </h4>
                <p className="text_blue ">
                  For ease of our valued clients, we offer multiple options for
                  digital payments.
                </p>
              </div>
              <div className="col-12 my-5">
                <h4 className="text_blue position-relative">
                  Online Claim Intimation{" "}
                  <span className="steps_count2">06</span>
                </h4>
                <p className="text_blue ">
                  Incidents can be reports instantly through an online portal
                  especially designed for claim intimation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benifits;
