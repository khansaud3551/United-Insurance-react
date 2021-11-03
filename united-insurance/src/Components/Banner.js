import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="bg_gray">
      <div
        className="div"
        style={{
          background: "url(assets/baner.png)",
          height: "693px",
          backgroundPosition: "bottom",
        }}
      >
        <div
          className="container bg_img"
          style={{ height: "calc(75vh - 70px)" }}
        >
          <div className="row py-md-5 h-100 align-items-center">
            <div className="col-6 text_blue">
              <h2 className="banner_heading ">Think insured; with</h2>
              <h2 className="banner_heading ">United Insurance.</h2>
              <p className="fst-normal text_blue">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
                nibh tristique, aliquet augue quis, tincidunt elit. Fusce
                rhoncus fermentum magna non volutpat. Donec velit dui, fermentum
                quis mollis ac, commodo id enim.
              </p>
              <button className="btn_green">Learn More</button>
            </div>
            <div className="col-6 position-relative">
              <div className="banner_form shadow-lg div_round bg-white d-flex flex-column justify-content-center align-items-center styling_cls">
                <div className="form_width">
                  <h4 className="text-start my-1">Get a Quote</h4>
                  <form action="">
                    <input
                      className="border my-1 px-1 w-100  py-1"
                      type="text"
                      placeholder="Name"
                    />
                    <input
                      className="border height_f my-1 px-1 w-100 py-1"
                      type="text"
                      placeholder="Phone Number"
                    />
                    <input
                      className="border my-1 px-1 w-100 py-1"
                      type="text"
                      placeholder="Email"
                    />
                    <input
                      className="border my-1 px-1 w-100 py-1"
                      type="text"
                      placeholder="Service"
                    />
                  </form>
                  <button className="btn_block fs-6 w-100 px-1 my-1 py-2 height_set">
                    Send
                  </button>
                </div>
              </div>

              <div>
                <form action=""></form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
