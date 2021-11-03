import React from "react";

function OurAchievments() {
  return (
    <>
      <div className="container mb-5 text_blue">
        <div className="row text-center ">
          <div className="row text-start align-items-center my-2">
            <div className="col-6">
              <img src="/assets/achivemnts.png" alt="" className="img-fluid" />
            </div>
            <div className="col-6">
              <h3 className="text_blue fw-bold">Our Achievements</h3>
              <p>
                The United Insurance Company of Pakistan Limited was established
                in the year 1959 on the Twentieth day of October. It was
                operational in Pakistan including East Pakistan (now
                Bangladesh). UIC operating more than 100 branches all over
                Pakistan. UIC doing General business including Group Health
                Insurance, Travel Insurance (Health), Travel Bonds & Guarantees,
                Livestock and Crop Insurance
              </p>
              <div className="row">
                <div className="col-4">
                  <h3 className="fw-bold">4.9 Billion</h3>
                  <p>Premium Underwritten</p>
                </div>
                <div className="col-4">
                  <h3 className="fw-bold">AA</h3>
                  <p>
                    Financial <br />
                    Strength
                  </p>
                </div>
                <div className="col-4">
                  <h3 className="fw-bold">62 +</h3>
                  <p className="m-0">Years of</p>
                  <p>Experience</p>
                </div>
              </div>
              <button className="btn_block px-3 py-2">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-3 d-flex flex-column bg_gray py-5">
        <h3 className="text_blue fw-bold col-6 mx-auto text-center mb-3">
          WHO WE ARE?
        </h3>
        <img src="/assets/Image 26.png" alt="" className="mx-auto" />
      </div>
    </>
  );
}

export default OurAchievments;
