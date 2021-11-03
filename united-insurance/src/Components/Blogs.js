import React from "react";

function Blogs() {
  return (
    <div className="container my-5">
      <h3 className="text_blue fw-bold my-3 text-center">
        Latest From Our Blogs
      </h3>
      <div className="row">
        <div className="col-4  p-3">
          <Blogsrender
            img="/assets/blog1.png"
            time=""
            title=""
            description=""
          />
        </div>

        <div className="col-4  p-3">
          <Blogsrender
            img="/assets/blog2.png"
            time=""
            title=""
            description=""
          />
        </div>

        <div className="col-4  p-3">
          <Blogsrender
            img="/assets/blog3.png"
            time=""
            title=""
            description=""
          />
        </div>
      </div>
    </div>
  );
}

export default Blogs;

function Blogsrender({ img }) {
  return (
    <div className="col-12 bg_grey text_blue" style={{ cursor: "pointer" }}>
      <img src={img} alt="" className="w-100" />
      <div className="py-2 px-4">
        <p className="my-1 gray_text text_sm" style={{ color: "#9E9E9E" }}>
          November 09, 2019
        </p>
        <h5>Why family insurance is important?</h5>
        <p className="text_sm">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam
        </p>
        <p
          className="m-0 text_sm font_600"
          style={{ textDecoration: "underline" }}
        >
          Read More
        </p>
      </div>
    </div>
  );
}
