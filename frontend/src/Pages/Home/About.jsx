import React from "react";

const About = () => {
  return (
    <>
      {/* <!-- About  --> */}
      <section className="about" id="about">
        <img src="images/fruits/salad.png" alt="" />
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
          <a href="#" className="btn">
            Learn more<i className="bx bx-right-arrow-alt"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
