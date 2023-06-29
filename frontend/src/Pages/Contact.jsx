import React from "react";
import Copyright from "./Home/Copyright";
import Footer from "./Home/Footer";

const Contact = () => {
  return <>
    <div className="mt-5 container-fluid">
      <section className="container">
        <h2 className="h1-responsive font-weight-bold text-center mt-4">Contact us</h2>
        <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
          a matter of hours to help you.</p>
        <div className="row">
          <div className="col-md-9">
            <form id="contact-form" name="contact-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form">
                    <label for="name" className="">Your name</label>
                    <input type="text" id="name" name="name" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form">
                    <label for="email" className="">Your email</label>
                    <input type="text" id="email" name="email" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <label for="subject" className="">Subject</label>
                    <input type="text" id="subject" name="subject" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <label for="message">Your message</label>
                    <textarea type="text" id="message" name="message" rows="5" className="form-control md-textarea contact-form-text-area"></textarea>
                  </div>
                </div>
              </div>
              {/* <!--Grid row--> */}
            </form>
            <div className="text-center text-md-left">
              <button className="btn mt-3">Send</button>
            </div>
            <div className="status"></div>
          </div>
          {/* <!--Grid column--> */}
          {/* <!--Grid column--> */}
          <div className="col-md-3 text-center">
            <ul className="list-unstyled">
              <li><i className="fas fa-map-marker-alt mt-4 fa-2x"></i>
                <p>MUMBAI, MH,  743266, IN</p>
              </li>
              <li><i className="fas fa-phone mt-3 fa-2x"></i>
                <p>+91 99887766</p>
              </li>
              <li><i className="fas fa-envelope mt-3 fa-2x"></i>
                <p>contact@fruitstore.com</p>
              </li>
            </ul>
          </div>
          {/* <!--Grid column--> */}
        </div>
      </section>
    </div>;
    <Footer />
    <Copyright />
  </>
};

export default Contact;
