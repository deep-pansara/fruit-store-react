import About from "./Home/About";
import Categories from "./Home/Categories";
import Copyright from "./Home/Copyright";
import Footer from "./Home/Footer";
import HomePageProducts from "./Home/HomePageProducts";
import Slider from "./Home/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <HomePageProducts />
      <About />
      {/* <Customer /> */}
      <Footer />
      <Copyright />
    </>
  );
};

export default Home;
