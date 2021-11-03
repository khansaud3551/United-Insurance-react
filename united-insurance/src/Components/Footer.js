import React from "react";

function Footer() {
  return (
    <div
      className="container-fluid p-md-5 "
      style={{ background: "url(assets/footer_bg.png)" }}
    >
      <div className="container my-md-5 py-md-5 pb-md-0 mb-md-0 text-white">
        <div className="row py-md-5">
          <div className="col-4 ">
            <h3 className="fw-bold" style={{ color: "#ABFFE1" }}>
              United Insurance
            </h3>
            <p className="pe-5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet.
            </p>
          </div>
          <div className="col-2">
            <h3>Services</h3>
            <p>Health Insurance</p>
            <p>Travel Insurance</p>
            <p>Car Insurance</p>
            <p>Motor Renewal</p>
            <p>Motor Takaful Renewal</p>
            <p>Buy Travel Takaful</p>
            <p>Takaful</p>
          </div>
          <div className="col-2">
            <h3>Quick Links</h3>
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Pricing</p>
            <p>Offers</p>
            <p>Contact Us</p>
            <p>Verify Policy</p>
          </div>
          <div className="col-4">
            <h3>News Later</h3>
            <p>Get discount offers and buying tips by email</p>
            <div className="style_1">
              <input
                type="text"
                placeholder="Your Email Address"
                className="style_2 px-2"
              />
              <a>
                <img
                  src="/assets/send-footer.png"
                  alt=""
                  className="style_3 "
                />
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-between text-white">
          <div className="col-3 ">
            <h3>Need Help?</h3>

            <div className="d-flex align-items-start gap-2">
              <img src="assets/location.png" alt="" className="p-2" />
              <p>
                Head Office: <br /> UIG House, 2nd Floor, 6-D, Upper Mall,
                Lahore, Pakistan.
              </p>
            </div>
            <div className="d-flex align-items-center gap-2 mb-2">
              <img src="assets/Icon material-call.png" alt="" className="p-2" />
              <p className="m-0">Call us: +92-300-0402627</p>
            </div>
            <div className="d-flex align-items-center gap-2 mb-2">
              <img src="assets/whatsapp.png" alt="" className="p-2" />
              <p className="m-0">WhatsApp: +92-300-0402628</p>
            </div>
            <div className="d-flex align-items-center gap-2 mb-2">
              <img
                src="assets/Icon ionic-ios-mail.png"
                alt=""
                className="p-2 "
              />
              <p className="m-0">
                csd@theunitedinsurance.com <br />{" "}
                zeeshan.naqvi@theunitedinsurance.com
              </p>
            </div>
          </div>
          <div className="col-3">
            <h3>Social Media</h3>
            <div className="d-flex gap-1">
              <img
                className=" bg-green cursor_pointer"
                src="assets/group 292.png"
                alt=""
              />
              <img
                className="bg-green bg_greenL rounded-circle cursor_pointer"
                src="assets/instaa.png"
                alt=""
              />
              <img
                className="bg-green  cursor_pointer"
                src="assets/group 294.png"
                alt=""
              />
              <img
                className=" bg-green  cursor_pointer"
                src="assets/group 295.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <hr className="text-white styling_col" />
        <div className="row my-3">
          <div className="col-12 mt-md-4 d-flex justify-content-between align-items-center">
            <p className="m-0 ">
              Copyrights © 2021 - 2024 United Insurance & Technologies
              International Limited
            </p>
            <img className="cursor_pointer" src="assets/whatts.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
