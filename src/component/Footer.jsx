import React from "react";

const Footer = () => {
  return (
    <div className="container-fulid futer">
      <div style={{ color: "white", textAlign: "center", marginTop: 50 }}>
        <div className=" footer" style={{ marginTop: 40 }}>
          <h6 style={{ color: "white" }}>Terms Of Use</h6>

          <h6 style={{ marginLeft: 15, color: "white" }}> Privacy Policy</h6>
          <h6 style={{ marginLeft: 15, color: "white" }}>About</h6>
          <h6 style={{ marginLeft: 15, color: "white" }}>Blog</h6>
          <h6 style={{ marginLeft: 15, color: "white" }}>Faq</h6>
        </div>
        <div className="container">
          <p style={{ textAlign: "center", color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
