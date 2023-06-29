import React from "react";

const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
      <section className="footer" id="footer">
        <div className="footer-box">
          <a href="." className="logo">
            <i className="bx bxs-basket"></i>DEEP PANSARA
          </a>
          <p>
            4070 Liberty Street
            <br /> Dallas, TX 75212
          </p>
          <div className="social">
            <a href=".">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href=".">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href=".">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href=".">
              <i className="bx bxl-youtube"></i>
            </a>
          </div>
        </div>
        <div className="footer-box">
          <h2>Categories</h2>
          <a href=".">Fruits & Vegetables</a>
          <a href=".">Dairy Products</a>
          <a href=".">Package Food</a>
          <a href=".">Bavarages</a>
        </div>
        <div className="footer-box">
          <h2>Useful Links</h2>
          <a href=".">Payment & Tax</a>
          <a href=".">Terms of Use</a>
          <a href=".">My Blog</a>
          <a href=".">Return Policy</a>
        </div>
        <div className="footer-box">
          <h2>Newsletter</h2>
          <p>
            Get 10% Discount With <br />
            Email Newsletter
          </p>
          <form action="" className="form">
            <i className="bx bxs-envelope"></i>
            <input type="email" name="" id="" placeholder="Enter Your Email" />
            <i className="bx bx-arrow-back bx-flip-horizontal"></i>
          </form>
        </div>
      </section>
    </>
  );
};

export default Footer;
