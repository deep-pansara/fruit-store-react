import React from "react";
import Footer from "./Home/Footer";
import Copyright from "./Home/Copyright";

const About = () => {
  return <>
    {/* <!-- About  --> */}
    <section className="about mt-5" id="about">
      <img src="images/fruits/fruitstore.jpg" alt="" className="mt-5" />
      <div className="about-text">
        <span>About Us</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          illo aperiam qui? Fugiat eos omnis esse minus blanditiis ipsa ex
          temporibus corrupti nisi placeat, sed ratione ullam repudiandae,
          iste dolor!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, iure
          sapiente.
        </p>
      </div>
    </section>
    <Footer />
    <Copyright />
  </>
};

export default About;
