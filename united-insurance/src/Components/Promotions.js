import React from "react";
import "./Promotionother.css";

function Promotions() {
  return (
    <>
      <div className="container text-center text_blue my-5">
        <h3 className="text_blue fw-bold my-3">PROMOTIONS</h3>
        <div className="row py-3 justify-content-between">
          <div className="col-4 px-4  ">
            <div className=" border radius_style overflow-hidden">
              <div className="col-6 mx-auto bg_gray p-3 py-4 mb-4 border_btom">
                <img src="/assets/faisalbank_con.png" alt="" />
              </div>
              <div className="div px-4">
                <p className="my-3 font_500">
                  Get upto 15% discounts with Faysal bank debit & credit cards
                  on
                </p>
                <p className="my-1 py-2 bg_gray">Health Insurance</p>
                <p className="my-1 py-2 bg_gray">Travel Insurance </p>
                <p className="my-1 py-2 bg_gray">Car Insurance</p>
              </div>
              <p className="mb-0 mt-4 bg_gray py-1">Terms & consditions</p>
            </div>
          </div>

          <div className="col-4 px-4  overflow-hidden">
            <div className=" border radius_style overflow-hidden">
              <div className="col-6 mx-auto bg_gray p-3 py-2 mb-4 border_btom">
                <img
                  src="/assets/Bank_alfalah_logo.png"
                  alt=""
                  style={{ width: "80px" }}
                />
              </div>
              <div className="div px-4">
                <p className="my-3 font_500">
                  Get upto 15% discounts with Faysal bank debit & credit cards
                  on
                </p>
                <p className="my-1 py-2 bg_gray">Health Insurance</p>
                <p className="my-1 py-2 bg_gray">Travel Insurance </p>
                <p className="my-1 py-2 bg_gray">Car Insurance</p>
              </div>
              <p className="mb-0 mt-4 bg_gray py-1">Terms & consditions</p>
            </div>
          </div>

          <div className="col-4 px-4  overflow-hidden">
            <div className=" border radius_style overflow-hidden">
              <div className="col-6 mx-auto bg_gray p-3 py-4 mb-4 border_btom">
                <img src="/assets/silk_logo_.png" alt="" />
              </div>
              <div className="div px-4">
                <p className="my-3 font_500">
                  Get upto 15% discounts with Faysal bank debit & credit cards
                  on
                </p>
                <p className="my-1 py-2 bg_gray">Health Insurance</p>
                <p className="my-1 py-2 bg_gray">Travel Insurance </p>
                <p className="my-1 py-2 bg_gray">Car Insurance</p>
              </div>
              <p className="mb-0 mt-4 bg_gray py-1">Terms & consditions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Registration */}

      <div className="container-fluid bg_gray p-5">
        <div className="row">
          <div className="col-6  text-center mx-auto">
            <h3 className="text_blue fw-bold">Register Today</h3>
            <p className="text_blue font_600 my-4">
              Get register today to view your account History of Issued Policies
              and avail amazing discounts.
            </p>
            <div className="d-flex justify-content-center gap-3 mx-auto">
              <button className="btn_block px-5 py-2">Register</button>
              <button className="btn_blue px-5 py-2">Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Promotions;
